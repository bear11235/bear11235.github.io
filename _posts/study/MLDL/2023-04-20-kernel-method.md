---
title: "Kernel method 공부하기"
categories:
  - study
  - machine learning
tags:
  - study
  - machine learning
  - kernel
---

# Linear Regression with Non-linear Features

어떤 데이터 x를 다루고 싶을 때, 그 x를 그대로 모델의 입력값으로 사용할 수도 있지만, 어떤 $$y=f(x)$$라는 매핑을 통해 일차적으로 변환을 하고, 그 이후에 모델에 집어넣을 수 있다. 예를 들어 x를 n차 다항식 형태로 매핑을 한다고 생각해보자. 

$$y = w_0x_0 + \cdots w_nx_n = [w_0, \cdots, w_n]^T \cdot [x^0, \cdots, x^n] = \mathbf{w \cdots x}$$

linear regression에서 선형성은 파라미터 $$w$$에 대한 선형성이다. $$x$$는 다항함수를 지나기 때문에 선형성이 유지되진 않지만, 모델은 $$w_i$$에 대해 1차로 구성되어 있기 때문에 파라미터에 대한 선형성을 가지고 있다. 이때 어떤 변환을 거쳐야 하는지는 데이터의 특성과 밀접한 관련이 있다. 
- 주기적인 데이터를 가진 경우는 $$sin / cos$$ 등과 같은 harmonic function 등을 사용할 수 있다.
- 고차항이 필요하다면 다음의 변환을 생각해볼 수 있다. 

$$ \phi(x) = [1, x, x^2, \cdots ]$$

- 변수 사이의 상관 관계가 있다면 다음 변환

$$ \phi(x) = [1, x_{1}x_{2}, x_{3}x_{4}, \cdots] $$


이 방법에서 핵심은 non-linear feature + linear model이라는 것. 즉 변수는 비선형 변환을 통해 복잡한 패턴을 잡아낼 수 있지만 모델 자체는 선형이기 때문에 다루기 쉽다. 위에 예시에서 보듯 보통 feature를 생성할 때는 원래 데이터보다 더 고차원의 공간으로 매핑을 하게 된다. 이는 데이터를 다룰 때 계산량을 키우게 되는 단점을 가지고 있다. 이를 보안하기 위해 **kernel method**를 생각하게 되었다.


# Kernel

## kernel method

위 예시에서 나타난 공통점인데, input x는 feature로의 변환을 거치고, 그 변환된 feature들은 모델의 파라미터와 dot product를 하게 된다. kernel method는 중간 단계인 x->y로의 feature 변환을 건너 뛰려는 목적을 가지고 있다. 이를 **kernel trick**이라고 부른다. 이 커널 트릭을 통해 고차원으로의 변환을 찾거나 계산할 필요 없이, 바로 저차원의 데이터를 가지고 계산하면 된다. 쉽게 말해서 고차원의 데이터가 등장하는 중간 단계를 건너 뛰고 똑같은 계산 결과를 얻는 과정이다.

다음의 예시를 보자. 2차원 데이터 x,y에 대해 2nd order polynomial kernel $$k(x,y)=(x \cdot y)^2$$를 생각해보자. 커널 계산 결과는 다음과 같다. 우리는 2차원 데이터 x,y 만을 가지고 계산했지만 사실 그 과정에는 3차원으로의 매핑 -> 내적 이라는 계산 과정이 들어간 것이다.

$$k(x,y)=(x \cdot y)^2=(x_1 y_1 + x_2 y_2)^2 = (x_1^2, x_2^2, \sqrt{2} x_1 x_2) \cdot (y_1^2, y_2^2, \sqrt{2} y_1 y_2) $$

## kernel examples
- Linear Kernel: $$k(x,y) = x \cdot y$$
- Polynomial kernel: $$k(x,y) = (x \cdot y)^d or (x \cdot y + 1)^d$$
- Gaussian of RBF kernel: $$ k(x,y) = \exp{(\frac{\vert x-y \vert}{2l^2})} $$


## kernel properties
커널을 통해 feature transformation 계산을 하지 않아도 되는 것은 알겠는데, 그렇다면 특성으로의 변환과 커널 함수는 서로 일대일 대응이 되는지 궁금해진다. 즉 임의의 feature로의 변환을 생각했을 때 그에 대응되는 커널 함수 k가 있는지, 그리고 임의의 커널함수 k를 생각했을 때 그에 대응되는 feature가 있는지 말이다.

커널이 다음의 두 조건을 만족하면, 그에 대응되는 유일한 feature가 존재한다고 한다. 근데 실제로는 PSD가 아닌 커널 함수여도 충분히 유용한 커널 함수가 존재한다더라.
- symmetric
- positive semi-definite (PSD)

kernel은 다음과 같이 normalized 될 수 있다. 

# Algorithms Using Kernel
선형 모델을 생각해보면 $$\mathbf{w^T x}$$ 항이 등장한다. 이는 weight vector가 data와 같은 공간에 위치하는 것을 의미한다(중요). 

## Kernel Perceptron Algorithm
perceptron은 x를 인풋으로 받아 그 값을 +1/-1로 구분하는 단순한 모델. 
이것을 풀다보면 $$\mathbf{x \cdot x}$$ 가 등장하는데, 이 항을 커널 함수로 바꾸는 알고리즘.
여기서 학습은 계수값인 $$\alpha$$를 업데이트 하는 것.

## Kernel Linear Regression
Regression model에서 Ordinary Least Square(OLS)는 오차의 제곱을 최소로 하도록 하는 것.

Kernelization

우리가 찾고자 하는 solution of weight vector를 데이터 포인트의 linear combination으로 표현해보자.

$$\mathbf{w}=\sum_{i=1}{n}\alpha_i\mathbf{x_i}=\mathbf{X}\vec{\alpha}$$
$$\mathbf{w}=\mathbf{(XX^T)^{-1}Xy}$$

당연히 아직은 alpha값은 모르며, 학습을 통해 alpha를 업데이트 해갈 것이다. 가중치를 찾는 것은 alpha를 찾는 것과 동일. 위처럼 표현한 가중치 벡터에 데이터를 곱하면 아래와 같다.

$$\mathbf{w^T z}=\sum_{i=1}{n}\alpha_i\mathbf{x_i^T z}$$

위 식에서 $$\mathbf{x^T z}=k(\mathbf{x}, \mathbf{z})$$로 kernelize 할 수 있다. 그렇게 되면 아래 같이 정리된다.

$$\vec{\alpha} = \mathbf{K^{-1}y}$$

Ridge regression은 위와 유사한다.

*유사도라는 개념. w를 x의 선형 결합으로 표현한다는 것은 데이터 사이의 유사도 개념과 밀접하다. perceptron 예시 참고.


## Kernel PCA
