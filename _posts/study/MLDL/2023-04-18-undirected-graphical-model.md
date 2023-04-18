---
title: "Undirected model 공부하기"
categories:
  - study
  - machine learning
tags:
  - study
  - machine learning
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
- Clique
  - 어떤 그래프 $$G$$가 주어져 있을 때, 그것의 subgraph 중 complete graph를 의미한다.
  - 즉 부분 그래프 중 완전그래프를 clique라고 정의.
  
- Potential Function
  
$$\psi_c(x_c)$$: ㅁㄴㅇㄹ

- Partition Function
  - Normalize를 위한 상수.
  - $$ Z = \sum_{x_1, \cdots, x_n} \prod_{c\in C} \psi_c(x_c)$$


- n개의 노드를 가진 undirected graph, $$H$$를 생각하자. n개 변수들의 확률 분포는 $$P(X_1, \cdots, X_n)$$으로 표현할 수 있다.
- 확률 분포는 아래와 같이 potential functions의 곱으로 표현됨.
- $$P(x_1, \cdots, x_n) = \frac{1}{Z} \prod_{c\in C}\psi_c(x_c)$$
- Z