---
layout: post #Do not change.
category: [Computer, Linux] #One, more categories or no at all.
title:  "CentOS7 openssh server 구축하기"
date:   2023-02-02 16:40:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

- 패키지 업데이트 하기
- root 계정이 아닌 admin 계정으로 할 경우 sudo 명령어로 root 권한 얻기
```bash
yum update
yum install openssh-server openssh-clients
```

<div class="sx-center row">
    <a href="/assets/img/posts/Computer/CentOS7-SSHserver/01.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-SSHserver/01.jpg"
                width="500"/>
    </a>
    &nbsp;
    <a href="/assets/img/posts/Computer/CentOS7-SSHserver/02.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-SSHserver/02.jpg"
                width="500"/>
    </a>
</div>



- 위 패키지를 설치 후 편집기르 아래 파일을 열고 Port를 변경할 수 있다. (기본 포트: 22)
```bash
vim /etc/ssh/sshd_config
```
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/CentOS7-SSHserver/03.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-SSHserver/03.jpg"
                width="500"/>
    </a>
    &nbsp;
    <a href="/assets/img/posts/Computer/CentOS7-SSHserver/04.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-SSHserver/04.jpg"
                width="500"/>
    </a>
</div>

- 그리고 CentOS7은 기본적으로 방화벽이 켜져있는데, 방화벽의 상태를 보고, ssh service나 22번 포트 (혹은 위에서 설정한 포트)에 대한 방화벽이 열려있는지 확인한다.
- 방화벽 설정하는 법은 <a href="">"CentOS7에서 방화벽 설정하기"</a> 참고
```bash
firewall-cmd --list-all
firewall-cmd --reload
```
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/CentOS7-SSHserver/05.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-SSHserver/05.jpg"
                width="500"/>
    </a>
</div>


- 방화벽 설정과 ssh 설정이 모두 끝나면 ssh 접속이 가능하다.
- 만약 안 된다면, client의 outbound 방화벽을 확인해보거나 22번 포트의 외부망 접속이 막혀있는지 확인해보자.
