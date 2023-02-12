---
layout: post #Do not change.
category: [Computer, Linux] #One, more categories or no at all.
title:  "CentOS7 GUI에서 root 로그인하기"
date:   2023-02-02 16:20:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

- CentOS에서 GUI로 로그인 시 root로는 로그인이 안 된다.
- 초기 설정 등 편의를 위해 sudoer가 아닌 root로 로그인하고 싶을 떄는 root 계정에 passwd를 설정해야 한다.
- su 커맨드로 root 계정으로 진입하여 passwd를 변경한다.

```bash
su
passwd
```