---
title: "Undirected model 공부하기"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
  - graph model
  - bayesian network
  - UG
  - DAG
---

# Directed vs Undirected
- 적용하고자 하는 application에서 변수 간 order가 있을 수도 있고 없을 수도 있음.
- 오늘의 날씨와 내일의 날씨는 order가 있음.
- 이미지의 픽셀 정보는 order가 없음.
- 순서가 있는 경우에는 DAG 모델을 주로 사용하고, 순서가 없는 경우에는 Undirected Graphical Model(UG, UGM) 혹은 Markov Random Fields(MRF)를 사용한다.
- BN에서는 Conditional Probability Table(CPT)를 사용하여 변수 간 관계를 정했다면, UG에서는 각 변수 노드간 연결이 "얼마나 잘 어울리는가", "그럴듯한 조합이다"의 정도를 판단한다. (?)

## UG의 예시
1. Ising Model
  - 격자 구조를 갖는 분자 구조에서 각 분자의 극성(+/-)은 해당 분자의 주변 분자에서 영향을 갖는다. 
  - 확률이 높은 상태라는 것은 에너지가 낮은 상태라는 것.
2. 이미지 처리
  - 이미지에서 denoising. noised pixel value는 실제 관측된 값, true pixel value는 관측되지 않은 값이라 생각할 수 있다. noised value를 가지고 denoised value를 확률적으로 추정할 수 있을까?

# UG의 수학적 표현

## 정의
- **Clique**
  - 어떤 그래프 $$G$$가 주어져 있을 때, 그것의 subgraph 중 complete graph를 의미한다.
  - 즉 부분 그래프 중 완전그래프를 clique라고 정의.
  - 노드의 개수가 0개인 경우 또한 clique
  - 노드의 개수가 1개인 경우 또한 clique
  - Maximal Clique: 모든 clique 중에 가장 큰 clique. 가장 크다는 것은 어떤 노드를 추가하더라도 clique이 되지 못하는 경우를 의미.
  
- **Potential Function**, $$\psi_c(\mathbf{x}_c)$$
  -  $$c$$라는 clique 안의 x에 대해 $$\mathbf{x}_c$$가 얼마나 그럴듯한지 (확률이 높은지) 의미하는 함수.

- **Partition Function**, Z
  - Normalize를 위한 상수.
  - $$ Z = \sum_{x_1, \cdots, x_n} \prod_{c\in C} \psi_c(x_c)$$: 모든 clique에 대한 potential function 값을 모두 곱한 뒤, 가능한 모든 x의 경우에 대해 더한다.

## 표현
- n개의 노드를 가진 undirected graph, $$H$$를 생각하자. n개 변수들의 확률 분포는 $$P(X_1, \cdots, X_n)$$으로 표현할 수 있다.
- 확률 분포는 아래와 같이 potential functions의 곱으로 표현됨. (이처럼 될 수 있다는 정리는 뒷부분에)
- $$P(x_1, \cdots, x_n) = \frac{1}{Z} \prod_{c\in C}\psi_c(x_c)$$ 

- clique을 이용하여 UG의 확률분포를 표현할 수 있는데, maximal clique만 사용할 수도 있고, 모든 clique을 다 사용할 수도 있다.
  - $$
  P(x_1, x_2, x_3, x_4) = 
  \frac{1}{Z} \psi_{124}(\mathbf{x}_{124}) \psi_{234}(\mathbf{x}_{234}) 
  $$
  - 만약 3개 clique만을 사용한다면 변수 2개 사이 관계는 못 보지 않을까? 
  - 즉 확률 분포를 어떤 clique들의 조합으로 보는지 또한 모델링 과정 중 하나일 듯.
  
## Interpretation of clique potentials
X-Y-Z 라는 모델은 X와 Z의 Y에 대한 조건부 확률을 의미한다: $$X \mathrel{\unicode{x2AEB}} Z \vert Y$$ (일단 지금 단계에서는 받아들이자.) 확률 분포는 아래와 같이 주어져야 한다. 

$$ p(x,y,z) = p(y) p(x \vert y) p(z \vert y) $$

또한 위에서 살펴본 것처럼, 확률 분포는 potential functions의 곱으로 표현된다.

$$ p(x,y,z) = \psi_{xy} \psi_{yz} $$

그렇다면 여기서 potential function의 의미는?
- $$ p(x,y,z) = p(x,y) p(z \vert y) $$ 혹은 $$ p(x,y,z) = p(z,y) p(x \vert y) $$로도 표현할 수 있지만, 그렇게 되면 각각의 potential은 marginalize 혹은 conditionalize 될 수 없다. (?)
- 따라서 potential function을 확률로서 생각하지 말고, 그 값이 높으면 확률이 높으므로 서로 연결된 값이 얼마나 그럴듯한 값들을 가지고 있는지 정도로 생각하자.

## Clique Potentials in Exponential Form
clique potential이 항상 양수가 되게끔 하는 것이 불편한 경우가 있다. 예를 들어 분자의 극성을 표현할 때는 +/-로 표현하는 것이 편하겠지. 그렇기 때문에 실수 범위에서 정의되는 함수를 하나 생각하고 그 함수에 expotential 함수를 취해 양수 범위로 mapping하자.

$$ \psi_c(x_c) = \exp\{ -\phi_c(x_c) \} $$

그렇게 되면 확률 분포는 Gibbs distribution을 따르게 된다.

$$ p(x) = 
\frac{1}{Z} \prod_{c\in C} \psi_c(x_c) = 
\frac{1}{Z} \exp\left( -\sum_{c\in C} \phi_c(x_c) \right) $$

# 왜 clique를 이용하여 확률 분포를 생각하는가?