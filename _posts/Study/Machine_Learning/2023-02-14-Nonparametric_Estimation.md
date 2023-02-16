---
layout: post #Do not change.
category: [Study, Machine_Learning_Study] #One, more categories or no at all.
title:  "Non-parametric Estimation"
date:   2023-02-14 12:20:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

참고한 글: 
 - <a href="https://machinelearningmastery.com/probability-density-estimation/"> A Gentle Introduction to Probability Density Estimation </a>

 - <a href="https://en.wikipedia.org/wiki/Nonparametric_statistics"> Nonparametric statistics </a>

 - 


# Parametric Density Estimation

우리가 알고 있는 확률 분포를 이용하여 표현하는 것. 예를들어 Normal Distribution 같은 경우, mean과 variance 2개로 완전히 표현된다. 만약 어떤 데이터의 분포를 normal distribution으로 표현하고 싶을 때, 데이터 분포를 가장 잘 설명하는 mean과 variance를 추정하면 된다. 확률 분포의 파라미터를 추정하여 데이터 분포를 추정하기 때문에 <b>Parametric</b> Density Estimation이라고 부른다.

파라미터를 적절히 설정하여 분포를 추정했다면, 그것이 좋은 분포인지 확인하는 여러 방법이 있다.

 - 데이터의 histogram과 추정한 pdf를 plot하여 비교한다.

 - 추정한 pdf에서 여러 데이터를 sampling하여 실제 데이터와 비교한다.

 - 실제 데이터의 statistics와 추정한 pdf의 그것을 비교한다.

<b>즉 여기서 말하는 파라미터라는 것은, 어떤 확률 분포의 파라미터를 의미한다.</b> (ex. mean & variance in normal distribution)

<br>

# Non-parametric Density Estimation

Nonparametric statistics is the branch of statistics that is not based solely on parametrized families of probability distributions (common examples of parameters are the mean and variance). 

&rarr; Non-parametric이라는 말은 파라미터 자체가 없다는 것보다는 "확률 분포의 파라미"터를 추정하지 않는다는 의미같다. 위키에서는 아래와 같이 말한다.


"nonparametric statistics"이라는 용어는 아래의 의미들로 정의된다.

 1. 어떤 특정한 parametric family of probability distributions에 속하는 데이터에 의존하지 않는 방법

 2. 모델의 구조가 정해져있다고 가정하지 않는 방법

우리는 어떤 관측된 random variable를 통계적으로 추정하고 있다. 아래의 가정들을 살펴보자.

 - 가정 a. 특정한 mean과 variance를 가진 Normal distribution이다.
 
 - 가정 b. 특정한 mean과 아직 안 정해진 variance를 가진 Normal distribution이다.

 - 가정 c. 아직 안 정해진 mean과 variance를 가진 Normal distribution이다.

 - 가정 d. two unspecified continuous distributions are identical.

가정 a와 b는 특정한 form (여기서는 normal)를 가지고 있고 온전히 그 분포의 파라미터에 대해서 다루고 있다. 따라서 a와 b는 parametric이라 할 수 있다. 

가정 c는 조금 다른 성질을 갖는데, 가정에서 어떤 파라미터도 값이 정해지지 않았다. 우리는 이러한 가정을 non-parametric이라고 부를 수도 있다. 

가정 d 또한 non-parametric이지만, 추가적으로 분포의 형태 또한 정하지 않았기 때문에 "distribution free"라고 부를 수 있다.

위와 같은 분류에도 요즘에는 "non-parametric"이라는 말을 "distribution free" (가정 d)이라 불렀던 것에 적용하고 있다. 

즉, 엄밀하게는 c의 경우만 non-parametric이라 해야하지만 d의 경우에도 쓰고 있다는 듯? 조금 애매하게 정의되는 듯 하다. 2번의 의미로 해석하면 좋을 듯.


<br>

# Non-parametric Models

Non-parametric model은 model structure가 사전에 정의되지 않고 데이터에 의해 결정된다는 점에서 parametric model과 차이를 있다. Non-parametric이란 말은 파라미터 자체가 없다는 뜻이 아니라, 파라미터의 수나 특징들이 미리 정의되지 않고 유동적이라는 의미라고 생각하면 좋을 듯. 아래와 같은 방법들이 대표적인 non-parametric model이다.

 - Histogram
 
 - Kernel Density Estimation (KDE)

 - KNNs

 - Support Vector Machine (SVM)

