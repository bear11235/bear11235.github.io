---
layout: post #Do not change.
category: [Computer, Linux] #One, more categories or no at all.
title:  "CentOS7 Repository 추가하기"
date:   2023-02-02 16:20:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

- 패키지 업데이트 하기
- 아래 커맨드로 repository 설치하기
```bash
yum update
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm -y
yum install https://rpms.remirepo.net/enterprise/remi-release-7.rpm -y
```

<div class="sx-center row">
    <a href="/assets/img/posts/Computer/CentOS7-Repository/01.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-Repository/01.jpg"
                width="500"/>
    </a>
</div>

<div class="sx-center row">
    <a href="/assets/img/posts/Computer/CentOS7-Repository/02.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-Repository/02.jpg"
                width="500"/>
    </a>
    &nbsp;
    <a href="/assets/img/posts/Computer/CentOS7-Repository/03.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-Repository/03.jpg"
                width="500"/>
    </a>
</div>

- 설치된 repository 적용을 위해 아래 커맨드 입력
```bash
yum repolist
yum update
```

<div class="sx-center row">
    <a href="/assets/img/posts/Computer/CentOS7-Repository/04.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/CentOS7-Repository/04.jpg"
                width="500"/>
    </a>
</div>

