---
layout: post #Do not change.
category: [Computer, Linux] #One, more categories or no at all.
title:  " Rocky8 아나콘다 설치"
date:   2023-02-04 20:03:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

# 1. Anaconda 홈페이지에서 설치파일 다운 받기

- 아래 링크에서 OS에 맞는 아나콘다 설치 프로그램 다운받자. 링크: <a href="https://www.anaconda.com/products/distribution#Downloads">Anaconda 다운로드 홈페이지</a>
- 다른 버전의 Python을 설치하고 싶은 경우는 밑에 다른 버전의 아나콘다를 다운받으면 된다.
- Linux 64-Bit & Python 3.9 버전을 설치하자

<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0001.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0001.jpg" />
    </a>
</div>



- 다운받은 sh파일을 실행시켜 설치를 진행하자.
- sh 파일을 실행하고 화면에 나온 내용을 읽으며 시키는 대로 넘어가면 된다.
```bash
wget $ANACONDA_LINK
sh ./Anaconda3-2022.10-Linux-x86_64.sh
```
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0002.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0002.jpg" />
    </a>
</div>


- 기본 설치 경로는 $HOME/anaconda3인데, 원하는 경로가 있으면 지정해준다.
- 경로 지정 후에는 알아서 설치가 진행된다.
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0003.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0003.jpg" />
    </a>
</div>

- 설치가 완료된 후에는 아래와 같이 나오면서, anaconda 초기 세팅할거냐 묻는다.
- yes를 누르면 로그인 시 자동으로 아나콘다를 실행하도록 ~/.bashrc 스크립트를 변경한다.
- 필자는  no를 입력했다.
- 나중에 command를 입력해서 initialize를 할 수 있으므로 꼭 지금 안 해도 된다.
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0004.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0004.jpg" />
    </a>
</div>

- 이렇게하면 아래와 같이 설치가 모두 끝난다.
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0005.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0005.jpg" />
    </a>
</div>

- 설치 시 conda init을 하지 않았다면 아래의 커맨드로 실행할 수 있다.
- 출력 창에서 보듯, ```conda init``` 커맨드를 실행하면 ~/.bashrc 파일이 수정되는데, 아래의 부분이 추가된다.
```bash
~/anaconda3/bin/conda init
```
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0006.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0006.jpg" />
    </a>
</div>
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0007.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0007.jpg" />
    </a>
</div>

- 설치 후, 다시 로그인하면 가상환경이 실행되는 것을 확인할 수 있다.
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/Rocky8/Anaconda/0008.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/Rocky8/Anaconda/0008.jpg" />
    </a>
</div>



# 2. 가상환경 만들기
