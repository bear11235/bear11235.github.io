---
layout: post #Do not change.
category: [Study, Machine_Learning_Study] #One, more categories or no at all.
title:  "Gaussian Process - 1"
date:   2023-02-14 15:22:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

본 포스트는 <a href="http://gaussianprocess.org/gpml/chapters/RW.pdf">Gaussian Processes for Machine Learning (2006)</a> 책의 내용을 읽고 정리하는 포스트다. 

# 1. Introduction

지도학습 문제를 다룰 때 자주 등장하는 2가지 접근은 아래와 같다.

 1. 함수의 범주(the class of functions)를 우리가 고려하는 범주로만 제한한다. 예를 들어 선형 함수 안에서 찾는다, 다항 함수 안에서 찾는다 등.

    - 문제점 1. 우리의 target function이 해당 범주에 없으면 예측 성능이 좋지 못하다.
    - 문제점 2. 모델의 복잡도를 키우면 overfitting 문제에 빠질 수 있다.

 2. 모든 가능한 함수에 prior probability를 부여한다. 가장 그럴듯한 함수에 높은 확률을 부여한다.

    - 문제점 1. 가능한 함수는 대부분 무한하다.

Gaussian Process는 위 문제점들을 해결할 수 있다. <i>Gaussian Process</i>는 Gaussian probability distribution의 일반화이다. probability distribution은 random variable를 설명하지만, random process는 함수를 다룬다. (대강 생각해보면 함수를 굉장히 긴 하나의 벡터로 생각할 수 있는데, 벡터 안에 각 값은 특정한 input x에 대한 출력값으로 이루어져있다고 보면 된다.) 그렇다면, 과연 무한한 차원을 가진 벡터를 계산적으로 어떻게 처리할 수 있을까? 이 질문에 책은 다음과 같이 답한다.

 - <i>if you ask only for the properties of the function at a finite number of points, then inference in the Gaussian process will give you the same answer if you ignore the infinitely many other points, as if you would have taken them all into account!</i>

<br>

## 1.1. A Pictorial Introduction to Bayesian Modelling

<div class="sx-center row">
    <a href="/assets/img/posts/Study/Machine_Learning/GP-01-01.jpg" data-lity>
        <img    src="/assets/img/posts/Study/Machine_Learning/GP-01-01.jpg"
                width="800"/>
    </a>
</div>

그림 (a)는 smooth function를 선호하는 prior를 가진 Gaussion process에서 sampling된 sample functions을 나타낸다. 하지만 다른 정보는 없기에 각 점에서의 평균값은 0이라 가정한다. sample된 함수의 평균값은 0이 되진 않아도, 어떤 고정된 x에서 함수값의 평균은 x와 무관하게 0이 될 수 있다 (함수를 계속 sampling 하면 된다). 

그림 (b)는 Dataset $D={(x_1, y_1), (x_2, y_2)}$가 관측되었을 때, 관측된 값을 지나는 함수들만을 고려한 것이다. 점선은 가능한 함수들을, 실선은 그런 함수들의 평균을 나타낸다. 관측된 데이터가 uncertainty(회색 음영부분)을 어떻게 줄이는지 주목하자. D가 더 많아질수록, 불확실성이 작아진다. Prior와 Dataset의 결합은 Posterior distribution을 도출하게 된다.

Gaussian Process는 parametric model이 아니라는 것을 주목하자. 따라서 우리는 모델이 데이터에 잘 fit 될 수 있을지 걱정하지 않아도 된다. (만약 비선형성이 강한 데이터를 선형 모델로만 fitting 하려고 한다면 발생할 문제를 GP는 고려하지 않아도 된다.) 무한한 경우의 수가 있기에, 제한 조건을 만족하는 sample이 등장할 때까지 무한히 sampling 하면 된다. 하지만 이는 impractical하기 때문에, exact analytical computation를 다음 챕터에서 다루겠다.

GP에서 prior는 우리가 고려하는 함수의 특징을 고정시키기 때문에 잘 설정해야 한다. 그림 (a)는 smooth & stationary한 성질을 갖는 함수들을 sampling 한 것이다. 이러한 함수들의 특징들은 GP의 <i>covariance function</i>에 의해 결정되는데, 다양한 covariance function이 가능하다. 예를 들어 characteristic length scale은 covariance function의 파라미터를 통해 조절할 수 있다. GP에서 <i>Learning</i>이란 covariance function의 적절한 특징을 찾는 문제라 할 수 있다. 