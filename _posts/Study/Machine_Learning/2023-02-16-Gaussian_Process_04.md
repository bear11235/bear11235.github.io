---
layout: post #Do not change.
category: [Study, Machine_Learning_Study] #One, more categories or no at all.
title:  "Gaussian Process - 4"
date:   2023-02-16 14:08:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---

본 포스트는 <a href="http://gaussianprocess.org/gpml/chapters/RW.pdf">Gaussian Processes for Machine Learning (2006)</a> 책의 내용을 읽고 정리하는 포스트다. 

# Chapter 4. Covariance Functions

본 챕터의 목적은 잘 사용되는 covariance function과 그들의 성질을 살펴보는 것이다.

## 4.1. Preliminaries

#### Definitions and Properties:

 - stationary covariance: 

    - a function of $\mathbf{x} - \mathbf{x'}$. 
    - Invariant to translations in the input space
    - ex: squared exponential covariance

 - isotropic covariance: 

    - a function of $ \vert \mathbf{x} - \mathbf{x'} \vert$. 
    - Invariant to all rigid motions
    - ex: radial basis function (RBF)

 - dot product covariance:

    - a function depending only on $\mathbf{x \cdot x'}$
    - ex: $k(\mathbf{x}, \mathbf{x'}) = \sigma_0^2 + \mathbf{x \cdot x'}$
 
 - kernel:

    - a function $k$ of two arguments mapping a pair of inputs $\mathbf{x \in \chi, x' \in \chi'}$ into $R$
    - If $k(\mathbf{x}, \mathbf{x'}) = k(\mathbf{x'}, \mathbf{x})$, then the kernel is called <b>symmetric</b>. 
    - Covariance functions must me symmetric from the definition.

 - Gram matrix, $K$:

    - its entries are $K_{ij} = k(\mathbf{x_i}, \mathbf{x_j}')$
    - If $k$ is a covariance function, matrix $K$ is the <b>covariance matrix</b>.

 - Positive Semi-definite (PSD):

    - A real $n \times n$ matrix $K$ which satisfies $Q(\mathbf{v})=\mathbf{v}^TK\mathbf{v} \ge 0$ for all vectors $\mathbf{v} \in R^n$ is called <b>Positive Semi-definite</b>.
    - $Q(\mathbf{v})$ is called a <b>quadratic form</b>.
    - A symmetric matrix is PSD iff all of its eigenvalues are non-negative.

<br>

## 4.2. Examples of Covariance Functions

we consider covariance functions where the input domain $\chi$ is a subset of the vector space $R^D$. 

<br>

### 4.2.1. Stationary Covariance Functions

 It will be convenient to allow kernels to be a map from $\mathbf{x \in \chi, x' \in \chi'}$ into $C$ (rather than $R$).

 <b>Bochner's theorem</b>: stationary process의 공분산 함수는 positive finite measure의 푸리에 변환으로 표현된다. 

 - Theorem 4.1 (Bochner’s theorem) A complex-valued function $k$ on $R^D$ is the covariance function of a <i>weakly stationary mean square continuous</i> complex-valued random process on $R^D$ if and only if t can be represented as below, where $\mu$ is a positive finite measure:

 $$ k(\mathbf{\tau}) = \int_{R^D} e^{2 \pi i \mathbf{s \cdot \tau}} d\mu(\mathbf{s}) $$

 - If $\mu$ has a density $S(\mathbf{s})$ then $S$ is known as the <b>spectral density</b> or <b>power specturm</b> corresponding to $k$.

 - In the case that the spectral density S(s) exists, the covariance function and the spectral density are Fourier duals of each other as shown in below:

 $$ k(\mathbf{\tau}) = \int S(\mathbf{s}) e^{2 \pi i \mathbf{s \cdot \tau}} d\mathbf{s}, \qquad\qquad S(\mathbf{s}) = \int k(\mathbf{\tau}) e^{2 \pi i \mathbf{s \cdot \tau}} d\mathbf{\tau } $$

 - $S(\mathbf{s})$는 주파수 $\mathbf{s}$에 해당하는 eigenfunction, $e^{2 \pi i \mathbf{s \cdot x}}$ 의 평균에 할당된 파워량을 의미한다고 볼 수 있다. $S(\mathbf{s})$는 적분가능할 정도로 충분히 빠르게 감소해야 하는데, 이 감소하는 속도는 smoothness of random process에 대한 중요한 정보를 준다.

<br>

<b> Squared Exponential Covariance Function </b>

 Squared Exponential (SE) 공분산 함수는 아래와 같은 형태를 가진다: 

 $$ k_{SE}(r) = \exp{\left( -\frac{r^2}{2l^2} \right)}$$

 - $l$은 <i>characteristic length scale</i>을 의미한다.

 - 무한미분가능 함수이므로, 이 공분산 함수를 갖는 GP는 모든 차수에 대해 mean square derivatives를 갖고 따라서 굉장히 smooth하다.

 - Spectral density, $S(s) = (2 \pi l^2)^{D/2} \exp(-2 \pi^2 l^2 s^2)$

 - Stein[1999]는 이 분포가 너무 smooth하기 때문에 실제 프로세스들을 모델링하기에는 부적합하다고 주장하며 Matern class를 추전하기도 함.

 - SE covariance function은 input $\mathbf{x}$를 Gaussian-shape basis functions로 정의된 feature space로 확장함으로써도 구해질 수 있다.

<br>

<b> The Matern Class of Covariance Functions </b>

Matern class 공분산 함수는 아래와 같이 정의된다. $\nu$와 $l$은 positive paramters이고 $K_\nu$는 modified Bessel function이다.

 $$k_{Matern}(r) = \frac{2^{1-\nu}}{\Gamma(\nu)} \left( \frac{\sqrt{2\nu}r}{l} \right)^\nu K_\nu \left( \frac{\sqrt{2\nu}r}{l} \right)$$

 - Spectral densitiy, $S(s) = \frac{2^D \pi^{D/2} \Gamma(\nu+D/2) (2\nu)^\nu}{\Gamma(\nu) l^{2v}} \left( \frac{2\nu}{l^2} + 4 \pi^2 s^2 \right) ^ {-(\nu + D/2)}$

 - Matern class 공분산 함수를 갖는 process $f(\mathbf{x})$는 if and only if $\nu \gt k$일 때, $k$-times mean square differentiable하다.

 - $\nu = p + 1/2$, 즉 half-integer가 되면 비교적 간단해진다. 머신러닝에서 잘 쓰이는 함수인 $\nu=3/2$와 $\nu=5/2$의 경우는 아래와 같이 된다. $\nu=1/2$에서는 process가 굉장히 거칠어지고, $\nu \ge 7/2$에서는 고차 미분값 존재성에 대한 prior knowledge가 없기 때문에, noisy example을 통해 $\nu$ 값을 구분하는 것은 매우 어렵다. (?)
 
 $$\begin{align*}
 &k_{\nu=3/2}(r)     = \left( 1+ \frac{\sqrt{3}r}{l} \right) \exp{\left(-\frac{\sqrt{3}r}{l} \right)} \\ \\
 &k_{\nu=5/2}(r) = \left( 1+ \frac{\sqrt{5}r}{l} + \frac{\sqrt{5}r^2}{3l^2}\right) \exp{\left(-\frac{\sqrt{5}r}{l} \right)} 
 \end{align*}$$

<div class="sx-center row">
    <a href="/assets/img/posts/Study/Machine_Learning/GP-04-01.jpg" data-lity>
        <img    src="/assets/img/posts/Study/Machine_Learning/GP-04-01.jpg"
                width="800"/>
    </a>
</div>

<!-- <br>

<b>Ornstein-Uhlenbeck Process and Exponential Covariance Function</b> -->

<br>

<b>The $\mathbf{\gamma}$-exponential Covariance Function</b>

 $$k(r) = \exp{(-(r/l)^\gamma)} \qquad \text{for} \qquad 0 \lt \gamma \le 2.$$

 - Matern class와 비슷한 수의 파라미터를 갖고 있지만, 그것보다 덜 flexible하다. 왜냐하면 $\gamma \ne 2$에서 corresponding process가 not MS differentiable하기 때문이다.

<div class="sx-center row">
    <a href="/assets/img/posts/Study/Machine_Learning/GP-04-02.jpg" data-lity>
        <img    src="/assets/img/posts/Study/Machine_Learning/GP-04-02.jpg"
                width="800"/>
    </a>
</div>

<br>

<b>Rational Quadratic Covariant Function</b>

 Rational Quadratic (RQ) 공분산 함수는 아래와 같이 정의된다. 여기서 $ \alpha, l \gt 0 $는 scale mixture of SE covariance funtions with different characteristic length scale이라 볼 수 있다.
 $$k_{RQ}(r) = \left( 1 + \frac{r^2}{2 \alpha l^2} \right)^{-\alpha}$$

 

 - Matern class와 비슷한 수의 파라미터를 갖고 있지만, 그것보다 덜 flexible하다. 왜냐하면 $\gamma \ne 2$에서 corresponding process가 not MS differentiable하기 때문이다.

<div class="sx-center row">
    <a href="/assets/img/posts/Study/Machine_Learning/GP-04-02.jpg" data-lity>
        <img    src="/assets/img/posts/Study/Machine_Learning/GP-04-02.jpg"
                width="800"/>
    </a>
</div>

