---
title: "Ensemble Method 공부하기"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
  - boost
  - learning
---

# Preliminary Knowledge
## Bootstrap 요약
Bootstrap (부트스트랩)은 데이터 내에서 반복적으로 샘플을 사용하는 resampling 방법 중 하나.

Bootstrap sampling을 하면 애초에 한 개 밖에 없었던 우리들의 sample data set을 n개의 sample data set을 가지고 있는 것과 같은 효과를 누릴 수 있게 한다. 이를 통해 우리는 data의 variance를 상당히 잘 근사 할 수 있는 결과를 볼 수 있다.

전체 크기가 n개인 원래의 데이터셋 S가 있다고 하자. S를 통해 크기가 N개인, 기존보다 더 큰 데이터셋 S'을 얻고 싶을 때, 부트스트랩 샘플링을 할 수 있다. 원래 데이터셋 S에서 복원 추출을 통해 m개를 뽑는다. 그렇게 뽑은 하나의 데이터셋을 $$s_i$$라고 하자. 이러한 복원추출을 N번 반복한다. 그러면 $$S'=\{s_1, \cdots, s_N \}$$의 새로운 데이터 셋을 구할 수 있다.

부트스트랩을 통해 얻어진 새로운 데이터 셋은 기존의 데이터 셋과 비슷한 분포를 가진다.

# Ensemble Model

강력한 하나의 모델 대신, 여러 개의 간단한 모델을 만들고 그들을 조합하여 예측하는 것.
예를 들어 Classifier를 만든다고 생각할 때, 엄청 복잡한 하나의 모델을 만들기보다는 간단한 classifer들을 만들고, 결과를 내야할 때 각 classifer에게 물어보고, 그것들의 대답 비율을 따져 최종 결정을 내리는 것.

대표적인 앙상블 유형에는 다음이 있다: Voting, Bagging, Boosting.

## Bagging

Bootstrap Aggregation의 약자로, 샘플을 여러 번 뽑아(Bootstrap) 각 모델을 학습시켜 결과물을 집계(Aggregration)하는 방법이다. 원래 데이터 셋에서 작은 여러 개의 데이터 셋을 샘플링한다(bootstrap). 각 데이터 셋으로 모델을 학습시킨다. 그리고 학습된 모델의 결과를 집계하여 최종 결과 값을 구한다(Aggregation).

Categorical data는 각 모델들이 말한 catogory의 빈도수를 확인하고, 가장 많이 나온 결과를 채택하면 된다. Regression과 같이 continuous data를 다루는 경우, 각 모델들의 결과를 평균낼 수 있다.

## Voting

Voting은 Bagging과 비슷하게, 부트스트랩을 통해 구해진 여러 데이터 셋을 이용한다. 하지만 Bagging은 각 데이터 셋에 같은 알고리즘의 모델을 사용한다면, Voting은 각 데이터 셋에 대해 다른 알고리즘의 모델들을 사용하고, 각 모델이 자신만의 알고리즘으로 답한 결과를 이용하여 최종 결과를 도출한다. 예를 들어 분류 문제에서 Voting은 각 데이터 셋에 대해 KNN, SVM, Linear Regression 등의 알고리즘을 사용할 수 있다.

## Boosting

Bagging에서는 부트스트랩을 통해 얻어진 데이터 셋에 대해 각각의 모델들이 "독립적으로" 학습하게 된다. 하지만 Boosting에서는 이전 모델의 학습이 다음 모델의 학습에 영향을 미친다. 이전 모델의 학습 결과에 대해 오답 데이터에는 더 큰 가중치를 두어, 새로운 모델은 이전에 모델이 틀린 부분에 대해 조금 더 집중해서 학습하게 된다. Bagging은 병렬적인 과정이라면, Boosting은 순차적인 과정이다.


# Characteristics of Ensemble Model

- Bias를 줄인다. 쉬운 모델들을 중첩하여 하나의 모델을 만들기 때문에 dicision boundary가 부드럽게 형성된다. 그렇게 모델의 복잡도를 늘리기 때문에 모델의 bias가 작아진다.
- 