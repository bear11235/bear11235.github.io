---
title: "여러 Boosting 알고리즘 공부하기"
categories:
  - study
  - machine learning
tags:
  - study
  - machine learning
  - boosting
  - ensemble
---

# AdaBoost
Adaptive Boost의 약자로, 이름에서 알 수 있다시피 적응형이다. 
AdaBoost도 Boosting이므로 classifier를 순차적으로 학습한다. 첫번째 데이터셋에 대해 학습을 진행하고, 그 결과에 따라 다음 데이터셋에 적절한 가중치를 부여하고 다음 모델을 학습한다. 이때 데이터셋에 가중치는 어떻게 부여하는가? 또한 n개의 모델을 학습한 후에 각 모델들에 가중치를 두어 최종 모델을 구해야하는데, 이때도 각 모델에 대한 가중치를 어떻게 정할 것인가? 이 2개의 질문에 대한 답을 하는 것이 목적이다.

전체적인 흐름은 다음과 같다.

m번째 스텝에 대해 데이터 셋에 대한 가중치 $$w_m$$이 주어져 있다고 하자. 그리고 우리의 목적함수는 Exponential Loss의 형태를 가지는데, 그렇게 표현하는 이유는 loss의 축적이 더하기로 되는 것이 아닌 곱하기로 되게끔 하기 위함이다. Loss는 다음과 같이 표현된다.

$$J_m = fcn(\alpha_m, w_m, f_m) $$

먼저, 가중치가 고려된 m번째 데이터 셋에 대해 $$f_m$$을 학습한다. 학습이 완료된 m번째 모델 $$f_m$$을 기존 모델들과 잘 합쳐야하는데, 이는 $$\alpha_m$$을 결정하는 것이다. 이때 목적함수 $$J_m$$을 최소로 하는 $$\alpha_m$$ 값을 찾으면 된다. 목적함수를 줄일 때는 gradient를 이용해서 찾는다. 


장점:
- 빠르고 쉽다.
- 반복 횟수에 대한 변수를 제외하면 parameter to tune이 없다.

단점:
- boosting 자체가 데이터 노이즈에 취약한 점이 있다.
- 데이터가 부족하면 큰 효과가 없다.


# XGBoost

Extreme Gradient Boost의 약자.
