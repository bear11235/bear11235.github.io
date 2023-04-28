---
title: "[ML/DL] Gaussian Process 공부하기"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
  - Gaussian Process
  - GP
---

# Learning

## Log-Likelihood of MVN
GP를 실제 데이터에 적용하면 우리가 얻게되는 데이터의 형태는 Multi-Variate Normal(MVN) 분포를 따르게 된다. n차원의 MVN 분포를 생각해보자. 평균은 n차원의 벡터로, 공분산은 $$n \times n$$의 행렬로 표현된다.

$$\mathbf{X}\sim \mathcal{N_n}(\mathbf{\mu}, \mathbf{\Sigma}) \quad \text{where} \quad \mathbf{\mu} \in \mathcal{R}^n, \mathbf{\Sigma} \in \mathcal{R}^{n \times n}$$

그리고 위 분포의 pdf는 아래와 같이 정의된다.

$$p(\mathbf{x; \mu, \Sigma}) = (2 \pi)^{-n/2} \det{(\mathbf{\Sigma})}^{-1/2} \exp{\left(-\frac{1}{2} \mathbf{(x-\mu)^T \Sigma^{-1} (x-\mu)}\right)} $$


평균과 공분산을 파라미터 $$\mathbf{\Theta}$$로 생각하면 log-likelihood 함수를 아래와 같이 계산할 수 있다.

$$ \mathcal{L}(\mathbf{\Theta}) = \log p(\mathbf{x}; \mathbf{\Theta}) = 
-\frac{n}{2}\log(2\pi) -\frac{1}{2}\det{\mathbf{\Sigma}} -\frac{1}{2} \mathbf{(x-\mu)^T \Sigma^{-1} (x-\mu)} $$

만약 prior mean을 0으로 생각한다면 조금 단순해진다.

$$ \mathcal{L}(\mathbf{\Theta}) = -\frac{n}{2}\log(2\pi) -\frac{1}{2}\det{\mathbf{\Sigma}} -\frac{1}{2} \mathbf{x^T \Sigma^{-1} x} $$

## Marginal Log-Likelihood in GP
Gaussian Process는 프로세스 안에서 어떠한 subset을 골라도 gaussian distribution을 따르기 때문에, 우리가 관심있는 index에 대해서 marginalize하기 쉽다. 이를 Marginal Log-Likelihood(MLL)이라 하자. GP를 통해 찾고자하는 latent function variable(?) 혹은 참이라고 추정하는 함수값을 $$\mathbf{f}$$라고 하자. 실제 그 함수가 우리에게 발현되어 관측되는 값은 노이즈가 섞인 값이다. 관측되는 값을 $$\mathbf{y}$$라고 하자. 우리가 학습하는 과정에서 활용하는 데이터는 실제 측정된 데이터이므로 $$\mathbf{f}$$보단 $$\mathbf{y}$$라고 생각해야 한다. 따라서 우리가 구하고자 하는 likelihood 값은 아래와 같다. GP를 학습하기 위해서 위 MLL 값을 최대화, 혹은 negative MLL을 최소화한다. 

$$ 
\begin{align}
\mathcal{L}(\mathbf{\Theta}) &= p(\mathbf{y}\vert\mathbf{x}; \mathbf{\Theta}) \\
&= \int{p(\mathbf{y \vert f}) p(\mathbf{f \vert x}) d\mathbf{f}} \\
&= -\frac{n}{2}\log(2\pi) -\frac{1}{2}\log(\det{(\mathbf{\Sigma} + \sigma_n^2\mathbf{I})}) -\frac{1}{2} \mathbf{x^T (\mathbf{\Sigma} + \sigma_n^2\mathbf{I})^{-1} x} \\
&= -\frac{n}{2}\log(2\pi) -\frac{1}{2}\log(\det{\mathbf{\Sigma'}}) -\frac{1}{2} \mathbf{x^T (\Sigma')^{-1} x}
\end{align}
$$

MLL을 계산할 때, Covariance Matrix가 가진 성질을 바탕으로 Cholesky decomposition을 활용해 직접 역행렬과 행렬식을 구하는 것보다 빠르게 구할 수 있다. Symmetric Semi-Positive Definite Matrix $$K$$에 대해서 아래와 같은 cholesky decomposition이 가능하다. 

$$ K = LL^T = L^TL  \quad \text{where} \quad L \text{ is triangular matrix}$$

우리가 다루는 Covariance Matrix는 위 조건을 만족하므로 cholesky decomposition이 가능하고, 위에서 정리한 MLL은 아래와 같이 전개된다.

$$ 
\begin{align}
\mathcal{L} &\propto -\frac{1}{2}\log(\det{\mathbf{\Sigma'}}) -\frac{1}{2} \mathbf{y^T (\Sigma')^{-1} y} \\
&= -\frac{1}{2}\log(\det{(\mathbf{L L}^T)}) -\frac{1}{2} \mathbf{y^T L^{-T} L^{-1} y} \\
&= -\log(\det{\mathbf{L}}) -\frac{1}{2} \mathbf{y^T L^{-T} L^{-1} y} \\
&= -\sum_{i=1}^{n} \log L_{ii} -\frac{1}{2} \mathbf{\alpha}^T \mathbf{\alpha}, \qquad \text{where } \alpha =\mathbf{L}\backslash\mathbf{y}\\
\end{align}
$$
