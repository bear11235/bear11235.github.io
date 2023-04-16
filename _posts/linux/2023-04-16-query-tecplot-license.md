---
title: "Query a TecPlot license status"
categories:
  - linux
  - tecplot
tags:
  - linux
  - tecplot
  - license
---

# problem
  - TecPlot client host에서 server host로 license status 요청하기

# Solution
  - `rlmutil rlmstat -c PORT@SERVER`
```bash
[root@master bin]# /opt/tecplot/360ex_2022r2/bin/rlmutil rlmstat -a -c 27100@license.tml
Setting license file path to 27100@license.tml
rlmutil v12.4
Copyright (C) 2006-2018, Reprise Software, Inc. All rights reserved.


	rlm status on license.tml (port 27100), up 00:28:24
	rlm software version v12.4 (build:2)
	rlm comm version: v1.2
	Startup time: Sun Apr 16 13:06:01 2023
	Todays Statistics (00:28:23), init time: Sun Apr 16 13:06:02 2023
	Recent Statistics (00:28:23), init time: Sun Apr 16 13:06:02 2023

	             Recent Stats         Todays Stats         Total Stats
	              00:28:23             00:28:23             00:28:24
	Messages:    71 (0/sec)           71 (0/sec)          71 (0/sec)
	Connections: 52 (0/sec)           52 (0/sec)          52 (0/sec)

	--------- ISV servers ----------
	   Name           Port Running Restarts
	teclmd           27101   Yes      2

	------------------------

	teclmd ISV server status on license.tml (port 27101), up 00:03:37
	teclmd software version v12.4 (build: 2)
	teclmd comm version: v1.2
	teclmd Debug log filename: +./teclmd.log
	teclmd Report log filename: ./report.log
	Startup time: Sun Apr 16 13:30:48 2023
	Todays Statistics (00:03:37), init time: Sun Apr 16 13:30:48 2023
	Recent Statistics (00:03:37), init time: Sun Apr 16 13:30:48 2023

	             Recent Stats         Todays Stats         Total Stats
	              00:03:37             00:03:37             00:03:37
	Messages:    37 (0/sec)           37 (0/sec)          37 (0/sec)
	Connections: 17 (0/sec)           17 (0/sec)          17 (0/sec)
	Checkouts:   1 (0/sec)           1 (0/sec)          1 (0/sec)
	Denials:     1 (0/sec)           1 (0/sec)          1 (0/sec)
	Removals:    0 (0/sec)           0 (0/sec)          0 (0/sec)


	------------------------

	teclmd license pool status on license.tml (port 27101)

	360ex v2024.04
		count: 1, # reservations: 0, inuse: 0, exp: 30-apr-2024
		obsolete: 0, min_remove: 120, total checkouts: 1
	rs v2024.04
		count: 1, # reservations: 0, inuse: 0, exp: 30-apr-2024
		obsolete: 0, min_remove: 120, total checkouts: 0
	chorus v2024.04
		count: 1, # reservations: 0, inuse: 0, exp: 30-apr-2024
		obsolete: 0, min_remove: 120, total checkouts: 0
	batch v2024.04
		count: 1, # reservations: 0, inuse: 0, exp: 30-apr-2024
		obsolete: 0, min_remove: 120, total checkouts: 0
	fv v2024.04
		count: 1, # reservations: 0, inuse: 0, exp: 30-apr-2024
		obsolete: 0, min_remove: 120, total checkouts: 0
	360 v2013.1
		Token-based license
```

# Issues
  - `rlmutil` 도움말을 보면 아래와 같이 나오는데, 문제는 일반 사용자도 rlmdown, rlmreread 같은 명령어를 사용하여 lisence server에 명령을 내릴 수 있다는 것. 
```bash
[root@master bin]# /opt/tecplot/360ex_2022r2/bin/rlmutil -h
Usage: rlmutil program <args>, -OR-
              program <args>
 where program is one of:
 	rlmdebug   rlmdown    rlmhostid
 	rlmnewlog  rlmremove  rlmreread
 	rlmstat    rlmswitch  rlmswitchr
 args are:
 -c license_file | port@host - to specify license
 -dat - use *.dat instead of *.lic for license file
 -h - print usage information and exit
 -q - don't prompt on rlmdown/rlmremove/rlmswitch(r)
      and don't check license checksums
 -v - print version and exit
 -z password - specify license password
  rlmdebug [product]
  rlmdown [isv] [RLM]
  rlmhostid -q [[-]32|disksn|ether|gc|ip|internet|host|user|rlmid1]
  rlmnewlog isv log-file-name
  rlmremove server_host port isv handle
  rlmreread [isv]
  rlmstat [-a] [-i [isv]] -I [-l [isv]] [-n [node]] [-p [product]] [-u [user]] 
  rlmstat -avail [-b] [-i isv] [-p product]
  rlmswitch isv new-file
  rlmswitchr isv new-file
```