---
layout: post #Do not change.
category: [Computer, Linux] #One, more categories or no at all.
title:  "윈도우11에 WSL2 설치하기"
date:   2023-01-29 15:00:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

# 1. WSL이란?

 - Windows Subsystem for Linux. 말 그대로 Linux용 Windows 하위 시스템이다.
 - WSL1, WSL2 버전 2가지로 구성되어 있다. 
 - 윈도우 11에서는 설치나 관리 등이 더 잘 지원되는 듯하다.

# 2. WSL 설치하기
## 2.1. Window 및 MS store 업데이트
 - 미리 "설정" -> "windows 업데이트" 에서 윈도우 업테이트 완료하기<br><br>
 - MS store에 가서 프로그램 업데이트 완료하기.<br>
 (아래 Powershell이나 cmd에서 wsl을 설치하는데, 이때 실질적으로 MS store에서 여러 프로그램을 다운받기 때문에, MS store에서 다른 프로그램의 설치가 아직 안 끝났다면 wsl 설치가 보류됨)

<div class="sx-center row">
    <a href="/assets/img/posts/Computer/window-update.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/window-update.jpg"
                height="400"/>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/assets/img/posts/Computer/store-update.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/store-update.jpg"
                height="400"/>
    </a>
</div>

## 2.2. Powershell에서 WSL 설치
 - Window 키를 눌러 Powershell을 관리자 권한으로 실행
 - console 창에 아래의 command 입력하면 자동으로 필요한 기능을 켜주고 프로그램들을 설치
 - 현재 온라인에 배포되어 있는 WSL 배포판을 검색하여 설치 가능 (Distro 미지정 시  Ubuntu가 설치)
    ```
     wsl --list --online         # 설치할 수 있는 유효한 배포판 목록
     wsl --install <Distro>      # <Distro>를 설치
    ```
    
<div class="sx-center row">
    <a href="/assets/img/posts/Computer/powershell-admin.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/powershell-admin.jpg"
                height="500"/>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/assets/img/posts/Computer/wsl-install.jpg" data-lity>
        <img    src="/assets/img/posts/Computer/wsl-install.jpg"
                height="500"/>
    </a>
</div>






