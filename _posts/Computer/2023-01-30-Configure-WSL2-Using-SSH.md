---
layout: post #Do not change.
category: [Computer, Linux] #One, more categories or no at all.
title:  "SSH를 이용하여 WSL2 구성하기"
date:   2023-01-30 23:00:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

# 1. WSL2 설치하기
- <a href="/computer/linux/2023/01/29/Install-WSL2-on-Win11.html">윈도우11에 WSL2 설치하기</a>에서 설명한 대로 본인이 원하는 배포판을 선택 후 설치한다.<br>

 

# 2. SSH 클라이언트 준비하기 (MobaXterm)
- 기본적으로 설치되는 wsl terminal에서 사용할 수 있지만, 별도의 ssh 클라이언트를 설치하여 ssh로 wsl에 접속하여 사용하는 것을 추천한다. 아무래도 기본 terminal보다는 ssh client 프로그램이 편의성이나 UI 면에서 익숙하기 때문에.

- 보통 Window 프로그램 중 추천하는 ssh client program은 <a href="https://www.putty.org/">PuTTY</a>가 있는데, 필자는 <a href="https://mobaxterm.mobatek.net/">MobaXterm</a> 프로그램을 추천한다. 무료버전을 며칠 써보니, 몇 개 써본 ssh 클라이언트 프로그램 중에서는 꽤 괜찮은 듯 싶다. 무료버전에는 session이나 ssh tunnel 등 개수 제한이 있는데, 일반적으로 쓰기에는 부족하지 않은 숫자같다. 

<a href="/assets/img/posts/Computer/mobaxterm_comparison.jpg" data-lity>
    <img src="/assets/img/posts/Computer/mobaxterm_comparison.jpg" />
</a>