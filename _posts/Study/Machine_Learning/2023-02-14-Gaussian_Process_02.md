---
layout: post #Do not change.
category: [Study, Machine_Learning_Study] #One, more categories or no at all.
title:  "Gaussian Process - 2"
date:   2023-02-14 17:08:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

본 포스트는 <a href="http://gaussianprocess.org/gpml/chapters/RW.pdf">Gaussian Processes for Machine Learning (2006)</a> 책의 내용을 읽고 정리하는 포스트다. 

# 2. Regression

GP를 해석하는 몇 가지 방법이 있다. 그 중 하나는 GP를 함수 공간에서의 분포로 보는 것인데, 처음에 이해하기 조금 어려울 수 있기 때문에 동등하지만 상대적으로 쉬운 <i>weight-space view</i>에서 먼저 바라본다.

## 2.1. Weight-space View


<div class="sx-center row">
    <a href="/assets/img/posts/Study/Machine_Learning/GP-01-01.jpg" data-lity>
        <img    src="/assets/img/posts/Study/Machine_Learning/GP-01-01.jpg"
                width="800"/>
    </a>
</div>