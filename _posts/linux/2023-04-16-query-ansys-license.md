---
title: "Query an Ansys license status"
categories:
  - linux
  - ansys
tags:
  - linux
  - ansys
  - license
---

# problem
  - ANSYS client host에서 server host로 license status 요청하기

# Solution
  - `lmutil lmstat -c PORT@SERVER -a`
  - 모든 프로그램에 대한 현재 라이센스 상태를 보여준다.  
  
  
	```bash
	[root@master ~]$ /nopt/ansys_inc/v202/licensingclient/linx64/lmutil lmstat -c 1055@license.tml -a

	lmutil - Copyright (c) 1989-2015 Flexera Software LLC. All Rights Reserved.
	Flexible License Manager status on Sun 4/16/2023 14:03

	License server status: 1055@license.tml
		License file(s) on license.tml: /ansys_inc/shared_files/licensing/license_files/ansyslmd.lic:

	license.tml: license server UP (MASTER) v11.19.0

	Vendor daemon status (on license.tml):

	ansyslmd: UP v11.19.0
	Feature usage info:

	Users of anshpc:  (Total of 1080 licenses issued;  Total of 124 licenses in use)

	"anshpc" v2020.0514, vendor: ansyslmd, expiry: 1-jan-0
	floating license

		shlee t009 t009.tml 60048 (v2020.0507) (license.tml/1055 1404), start Sun 4/16 14:02, 124 licenses

	Users of 1spacdes:  (Total of 26 licenses issued;  Total of 0 licenses in use)

	Users of cfd_base:  (Total of 25 licenses issued;  Total of 1 license in use)

	"cfd_base" v2020.0514, vendor: ansyslmd, expiry: 1-jan-0
	floating license

		shlee t009 t009.tml 60048 (v2020.0507) (license.tml/1055 1304), start Sun 4/16 14:02

	...
	```
  - 현재 사용중인 license만 출력하기 위해 별도의 shell script 작성
  - 사용중인 라이센스에 대해 USER, HOST, Start Time, (USED, AVAILABLE, TOTAL) 출력
  - HPC의 경우, 해당 작업이 사용중인 license 개수도 출력
  1. `lmutil lmstat -c PORT@SERVER -a`: 전체 license status를 출력한다.
  2. `sed '/Total of 0 licenses in use/d'`: 사용중인 license 개수가 0인 프로그램 문장은 지운다.
  3. `sed '/^[[:space:]]*$/d'`: 빈 문장 지운다.
  4. `awk '!/floating/' | awk '!/expiry/' `: license 사용중인 프로그램의 경우 'floating'과 'expiry'란 단어가 들어간 문장이 등장하는데 필요 없으므로 지운다.
  5. `sed -e '1,8d'`: 앞에 필요없는 문장 지운다.
  6. `$INDEX, $PROGRAMS`: For loop을 돌릴 때 필요한 변수. For loop을 돌면서 사용중인 프로그램에 대해서 각각 USER, Host 등 필요한 정보를 양식에 맞춰 기록한다.
  7. `USER`, `HOST`, `DATE` 등 필요한 정보를 `awk`, `sed`, `printf` 등의 command를 통해 양식에 맞도록 출력한다.
  8. 임시 파일을 지우면서 마무리한다.
   
	```bash
	[root@master bin]# cat query_license_ansys.sh 
	#!/bin/bash
	echo ""
	echo "Only licenses being used now are shown."
	echo ""

	FILE=$HOME/.license_status_ansys.tmp

	/nopt/ansys_inc/v202/licensingclient/linx64/lmutil lmstat -c 1055@license.tml -a |\
	sed '/Total of 0 licenses in use/d' |\
	sed '/^[[:space:]]*$/d' |\
	awk '!/floating/' | awk '!/expiry/' |\
	sed -e '1,8d' > $FILE

	INDEX=($(cat $FILE | nl | grep "Users of" | awk '{print $1}') $(( `(cat $FILE | nl | tail -1 | awk '{print $1}')` + 1 )) )
	PROGRAMS=($(cat $FILE | grep "Users of" | awk '{print $3}' | sed 's/://g'))

	for idx in `seq 0 $(( ${#PROGRAMS[@]} -1 ))`
	do
		i=${INDEX[$idx]}
		j=${INDEX[$(( $idx + 1 ))]}
		PROGRAM=${PROGRAMS[$idx]}
		TOT=$(head -$i $FILE | tail -n +$i | awk '{print $6}')
		USE=$(head -$i $FILE | tail -n +$i | awk '{print $11}')
		AVA=$(( $TOT - $USE ))
		echo -e "license in used: ${PROGRAM} (used, available, total) = (${USE}, ${AVA}, ${TOT})"

		if [[ $PROGRAM == "anshpc" ]]; then
			echo -e " --------------------------------------------- "
			echo -e "|    User    |    Host    |  Start Time | Use |"	
			echo -e "|---------------------------------------------|"
		else
			echo -e " --------------------------------------- "
			echo -e "|    User    |    Host    |  Start Time |"	
			echo -e "|---------------------------------------|"
		fi

		for k in `seq $(( $i + 1 )) $(( $j - 1 ))`
		do
			LINE=$(head -$k $FILE | tail -n +$k)
			
			USER=$(echo $LINE | awk '{print $1}' | sed 's/$/         /' | cut -c -10)
			COMP=$(echo $LINE | awk '{print $2}' | sed 's/$/         /' | cut -c -10)
			DATE=$(printf "%02d/%02d" $(echo $LINE | awk '{print $10}' | sed 's/\// /'))
			TIME=$(printf "%02d:%s"  $(echo $LINE | awk '{print $11}' | sed 's/:/ /' | sed 's/,//' ))
			
			if [[ $PROGRAM == "anshpc" ]]; then
				USEHPC=$(printf "%3d" $(echo $LINE | awk '{print $12}' ))
				echo -e "| ${USER} | ${COMP} | ${DATE}-${TIME} | ${USEHPC} |"
			else
				echo -e "| ${USER} | ${COMP} | ${DATE}-${TIME} |"
			fi
		done

		
		if [[ $PROGRAM == "anshpc" ]]; then
			echo -e " --------------------------------------------- "
		else
			echo -e " --------------------------------------- "
		fi
		echo ""
	done

	rm $FILE
	```

  - 위 script를 사용한 출력 결과는 아래와 같다.

	```bash
	[root@master ~]$ query_license_ansys 

	Only licenses being used now are shown.

	license in used: anshpc (used, available, total) = (124, 956, 1080)
	--------------------------------------------- 
	|    User    |    Host    |  Start Time | Use |
	|---------------------------------------------|
	| shlee      | t009       | 04/16-14:03 | 124 |
	--------------------------------------------- 

	license in used: cfd_base (used, available, total) = (1, 24, 25)
	--------------------------------------- 
	|    User    |    Host    |  Start Time |
	|---------------------------------------|
	| shlee      | t009       | 04/16-14:03 |
	--------------------------------------- 

	license in used: cfd_solve_level1 (used, available, total) = (1, 24, 25)
	--------------------------------------- 
	|    User    |    Host    |  Start Time |
	|---------------------------------------|
	| shlee      | t009       | 04/16-14:03 |
	--------------------------------------- 

	license in used: cfd_solve_level2 (used, available, total) = (1, 24, 25)
	--------------------------------------- 
	|    User    |    Host    |  Start Time |
	|---------------------------------------|
	| shlee      | t009       | 04/16-14:03 |
	--------------------------------------- 

	```

# Command

1. `awk`

2. `sed`

3. `For`