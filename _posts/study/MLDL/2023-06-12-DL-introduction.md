---
title: "[ML/DL] DL introduction"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
---

# ML vs DL
딥러닝을 주목받게 만든 3가지 요인
 - Neural Network: 데이터 처리 기법
 - Big data: 패턴을 찾을 만한 충분한 데이터에 접근 가능하다.
 - GPU: 수많은 연산을 처리할 수 있는 하드웨어 발전.

기존 머신러닝과의 비교
 - 데이터가 적을 시 상대적으로 좋은 성능을 보인다.
 - 하지만 데이터가 많을 때에는, 많은 데이터를 반영할 만큼 모델의 복잡도가 크지 않아 성능이 정체된다.
 - 데이터 수가 적을 때에는 머신러닝의 접근이 더 효율적일 수 있다.

# 기계학습의 3요소
## Task
 - 학습의 궁극적 목표로, 실제 모델이 수행하고자 하는 작업.
 - 분류, 회귀, 예측, detection, 생성 등

## Experience
 - 경험, dataset
 - input data / observation 
 - output data / target / label

## Performance Measure
 - 모델이 task를 수행하는 정도를 측정
 - accuracy for classification / MSE for regression / Intersection-over-Union for segmentation 등
 - 모델의 성능은 memorization이 아니라 generalization. 즉 unseen data에 대해 잘 작동해야 함.

# Learning Algorithm
- Learning Algorithm = Model + Learning Rule
- Deep Learning Algorithm = Neural Net + Gradient Descent Optimization

$$ \theta_{\tau}^{*} \leftarrow A_{\phi} \left( D_{\tau}, P_{\tau}, L_{\tau}, f_{\theta} \right) $$

 - $$A_{\phi}$$: Leaning Rule  --> stochastic gradient descent
 - $$D_{\tau}$$: Experience (dataset) --> large dataset
 - $$P_{\tau}$$: Performance Measurement
 - $$L_{\tau}$$: Fitting Loss --> differentiable surrogate loss
 - $$f_{\theta}$$: Model --> deep neural network
 - *surrogate loss: 똑같은 matric은 아니지만 비슷한 결과를 도출할 수 있게 해주는 loss.

