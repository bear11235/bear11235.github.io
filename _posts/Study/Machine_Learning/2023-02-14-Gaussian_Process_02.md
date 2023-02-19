---
layout: post #Do not change.
category: [Study, Machine_Learning_Study] #One, more categories or no at all.
title:  "Gaussian Process - Chapter 2. Regression - (1)"
date:   2023-02-14 17:08:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

본 포스트는 <a href="http://gaussianprocess.org/gpml/chapters/RW.pdf">Gaussian Processes for Machine Learning (2006)</a> 책의 내용을 읽고 정리하는 포스트다. 

<hr>

# 2. Regression

GP를 해석하는 몇 가지 방법이 있다. 그 중 하나는 GP를 함수 공간에서의 분포로 보는 것인데, 처음에 이해하기 조금 어려울 수 있기 때문에 동등하지만 상대적으로 쉬운 <i>weight-space view</i>에서 먼저 바라본다.

<br>
<hr>

## 2.1. Weight-space View

이번 섹션에서는 우선 선형 모델에 대한 Bayesian treatment를 다룬다. 그 다음, 고차원의 <i>feature space</i>로의 mapping을 선형 모델에 추가 적용한다. 그러면 어떤 feature space에서 <b>kernel trick</b>을 통해 고차원 공간에서의 implicit computation을 수행할 수 있음을 보게 된다.

- $n$개의 관측 데이터로 구성된 training set $D$가 있다고 하자: $D = \\{ (\mathbf{x_i}, y_i) \vert i = 1, ... , n \\}$

- $\mathbf{x}$: input vector of dimension $D$

- $y$: output scalar or target

- $X$: Design Matrix of dimension $N \times D$, aggregation of n-$\mathbf{x}$'s. 

<br>
<hr>

### 2.1.1. The Standard Linear Model

Bayesian analysis of the standard linear regression model with Gaussian noise: 

$$
\begin{equation}
f(\mathbf{x}) = \mathbf{x}^T \mathbf{w}, \qquad \qquad y = f(\mathbf{x}) + \epsilon
\end{equation}
$$
 
 - $\mathbf{x}$: input (colomn) vector

 - $\mathbf{w}$: weight parameters (colomn) vector of the linear model

 - $f$: function value (with no noise)

 - $y$: observed target value (containing noise)
 
 - $\epsilon$: iid Gaussian noise with zero-mean and variance $\sigma_n^2$: $\epsilon \sim N(0, \sigma_n^2)$

<br>
노이즈에 대한 가정(iid & Gaussian)은 likeli-hood에 대한 확률 분포를 계산할 수 있게 한다.

$$
\begin{align}
p(\mathbf{y} \vert X, \mathbf{w}) &= \prod_{i=1}^{n} p(y_i \vert \mathbf{x}_i, \mathbf{w}) \qquad \text{(factorized by iid assumption)} \\\\
&= \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi}\sigma_n} \exp{\left( -\frac{(y_i - \mathbf{x}_i^T \mathbf{w})^2}{2\sigma_n^2} \right)} \\\\
&= \frac{1}{(2\pi\sigma_n^2)^{n/2}} \exp{\left( -\frac{1}{2\sigma_n^2} \vert \mathbf{y} - X \mathbf{w} \vert ^2 \right)} \\\\
&= N(X \mathbf{w}, \sigma_n^2 \mathbf{I}) \\
\end{align}
$$

<br>

Bayesian Framework에서는 우리가 알고싶은 random variable, $\mathbf{w}$에 대한 <b>prior</b>를 정의해야 한다. prior는 말 그대로 데이터를 보기 전에, 우리가 $\mathbf{w}$에 대해 가지고 있는 믿음의 정도를 표현하므로 임의로 정하면 된다. 책에서는 아래와 같이 zero-mean Gaussian with covariance matrix $\Sigma_p$로 정했다: 이 prior의 역할 및 특성에 대해서는 2.2 section에서 다룰 예정이므로, 지금은 주어진 prior에 대해 식을 유도해보자.

$$ \mathbf{w} \sim N(\mathbf{0}, \Sigma_p) $$

<br>

위에서 prior와 likeli-hood를 구했으므로 우리는 posterior, 즉 데이터를 관측한 후 모델 파라미터 $\mathbf{w}$가 가지는 확률 분포를 계산할 수 있다.

$$ 
p(\mathbf{w} \vert \mathbf{y}, X) = \frac{p(\mathbf{y} \vert X, \mathbf{w}) p(\mathbf{w})}{p(\mathbf{y} \vert X)}, \qquad
p(\mathbf{y} \vert X) = \int{p(\mathbf{y} \vert X, \mathbf{w}) p(\mathbf{w}) d\mathbf{w}}
$$

<br>

우변 분모에 나오는 항 $p(\mathbf{y} \vert X)$은 posterior의 적분값이 1이 되도록 하는 normalizing constant로, marginal likelihood로 불린다. 이 항은 모델 파라미터 $p\mathbf{w}$에 의존하지 않기 때문에 posterior의 확률분포를 계산할 때 무시할 수 있다(?). 아래 식을 통해 우리는 데이터 $X, \mathbf{y}$가 주어졌을 때의 모델 파라미터 $\mathbf{w}$의 분포, $p(\mathbf{w} \vert X, \mathbf{y})$를 계산할 수 있다.

$$
\begin{align}
p(\mathbf{w} \vert X, \mathbf{y}) &\propto 
    \exp{\left( -\frac{1}{2\sigma_n^2} (\mathbf{y}-X\mathbf{w})^T (\mathbf{y}-X\mathbf{w}) \right)}
    \exp{\left( -\frac{1}{2} \mathbf{w}^T \Sigma_p^{-1} \mathbf{w} \right)} \\
&\propto \exp{\left( -\frac{1}{2} (\mathbf{w-\bar{w}})^T A (\mathbf{w-\bar{w}}) \right)} \\
\end{align}
$$

$$
\text{where} \qquad A=\sigma_n^{-2} X^T X + \Sigma_p^{-1}, \qquad \mathbf{\bar{w}}=\sigma_n^{-2} A^{-1} X^T \mathbf{y}
$$

위 식에서 모델 파라미터의 평균 $\mathbf{\bar{w}}$는 <b>maximum a posterior (MAP)</b> estimation이 된다. 즉, posterior를 최대로 하는 모델 파라미터 값이라는 것이다.

<br>

아래 그림은 모델 파라미터에 대한 prior, likelihood, 그리고 posterior를 나타내고 있다.

 - 먼저 (a)를 보면 $\mathbf{w}$에 대한 prior가 나타나있다. 이 prior는 모델 파라미터가 0 근처에서 큰 값을 가지고, 원점에서 멀어질수록 작은 값을 갖는다. 따라서 우리는 이 모델 파라미터의 크기가 작을 것이라는 믿음을 가지고 있다고 볼 수 있다.

 - (b)에서 x로 표시된 3개의 점은 관측을 통해 측정된 값이다.

 - (c)에서는 likelihood $p(\mathbf{y} \vert X, \mathbf{w})$의 분포를 보여준다. likelihood 분포가 가지는 의미를 잘 생각해보자. likelihood의 의미는 모델 파라미터가, 예를 들어, $\mathbf{w}=\mathbf{w}_0$라고 할 때, 주어진 데이터 $X, \mathbf{y}$ 가 나올 확률을 의미한다. 

 - (d)에서는 posterior $p(\mathbf{w} \vert X, \mathbf{y})$의 분포를 보여준다. posterior는 말 그대로 데이터 $X, \mathbf{y}$가 주어졌을 때, 모델 파라미터 $\mathbf{w}$의 확률 분포를 나타낸다. 이는 $likelihood \times prior$로 표현되는데, 만약 $\mathbf{w}=\mathbf{w}_0$가 데이터 $X, \mathbf{y}$를 잘 표현한다고 해도, 애초에 $\mathbf{w}=\mathbf{w}_0$가 될 확률이 작다면, 결과적으로 데이터 $X, \mathbf{y}$가 주어졌을 때 $\mathbf{w}=\mathbf{w}_0$일 확률은 likelihood만큼 크진 않을 것이다. (d)에서 시각적으로 볼 수 있는데, prior에서 원점과 가까운 모델 파라미터의 확률을 더 높게 가정하였으니, 똑같은 likelihood를 갖는 모델 파라미터라도 최종적으로 원점에 가까운 점의 확률이 더 크다고 볼 것이다. 따라서 (c)의 likelihood 분포가 (d)에서는 prior의 peak가 있는 원점으로 조금 이동한 것을 볼 수 있다.

<div class="sx-center row">
    <a href="/assets/img/posts/Study/Machine_Learning/GP-02-01.jpg" data-lity>
        <img    src="/assets/img/posts/Study/Machine_Learning/GP-02-01.jpg"
                width="800"/>
    </a>
</div>


<br>

위 과정은 모델 파라미터 $\mathbf{w}$, 혹은 모델의 확률 분포에 대해 이야기했다. 모델의 확률 분포를 안다면, 그를 바탕으로 관측되지 않은 새로운 점 $X_\*$에서의 함수값 $f_\*$ 값을 예측할 수 있다. 우리는 모델의 확률 분포를 알기 때문에, 어떤 점에서의 함수 값 또한 one-point prediction이 아닌 그것의 확률 분포를 에측할 수 있다.

$$
\begin{align}
p(f_* \vert \mathbf{x}_*, X, \mathbf{y}) &= \int{p(f_* \vert \mathbf{x}_*, \mathbf{w}) p(\mathbf{w} \vert X, \mathbf{y}) d\mathbf{w}} \\\\
&= N(\color{red}{\mathbf{x}_*^T} \mathbf{\bar{w}}, \quad \color{red}{\mathbf{x}_*^T} A^{-1} \color{red}{\mathbf{x}_*}) \\\\
\end{align}
$$

$$
\text{cf:} \qquad p(\mathbf{w} \vert X, \mathbf{y}) =  N(\mathbf{\bar{w}}, A^{-1} )
$$

<br>
<hr>

### 2.1.2. Projections of Inputs into Feature Space
