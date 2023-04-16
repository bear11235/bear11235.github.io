---
title: "Bayesian Network 공부하기"
categories:
  - study
  - machine learning
tags:
  - study
  - machine learning
  - bayesian network
---

# Bayesian Network(BN) 란?
- **Bayesian Network** = **Graph** + **Conditional Probability Table**
- 확률 변수 사이의 상관관계를 그래프로 표현하고, 변수 사이의 조건부 확률 분포를 학습
- 그래프는 node와 edge로 표현된다. BN은 확률 변수를 node로, 확률 변수 사이 직접적인 의존성(direct dependency)을 edge로 표현한다.
- BN에서 사용하는 그래프 모델은 Directed Acyclic Graph (DAG), 즉 비순환-방향성 그래프로 표현된다. 
  - Directed: 노드 간 연결은 단순 선분이 아니라 방향성이 있는 화살표로 표현된다.
  - Acyclic: a->b->c->a 와 같이 순환적인 구조가 없다.

<img src="/assets/images/posts/MLDL/bayesian-network-01.png" alt="">