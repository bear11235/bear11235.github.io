---
title: "Explainable AI (LIME, SHAP) 공부하기"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
  - AI
  - LIME
  - SHAP

---

AI의 모델
- Rule-based system: 사람이 일일이 프로그램하여 컴퓨터는 주어진 규칙대로 계산만 수행.
- Classic ML-DL: 사람이 feature를 디자인하고, 컴퓨터는 feature를 매핑한다.
- Deep Learning: 더욱 복잡한 feature를 모델이 찾는다. 

일반적으로 explainability가 높다는 것은 모델의 complexity가 낮다는 것이고, 이는 모델의 capacity or performance가 낮음을 의미한다. 그래서 복잡한 DL의 경우, black-box처럼 생각되는 경우가 많다. 


Need for explainable AI
- Explain to Justify: 시스템의 행동 이유에 대한 정당성. 
- Explain to Improve: 시스템의 성능 개선을 위해서.
- Explain to Discover: DL은 사람이 찾지 못하는 패턴들을 잘 찾는다. 그 패턴을 이해하기 위해.
- Explain to Control: 모델의 적절한 제어를 위해.

설명가능한 AI를 통해 아래의 질문에 답하고자 함.
- 왜 그렇게 했는지?
- 왜 다른 행동은 안 했는지?
- 언제 성공/실패를 하는지?
- 언제 결과를 신뢰해도 괜찮은지?
- 어떻게 에러를 수정할지?

# 설명 가능성의 종류
## 설명 가능함의 시점
- Ante-hoc (build a new learning model)
  - 모델을 만들 때부터 설명가능하게끔 만든다.
- Post-hoc (explain the black-box)
  - 블랙박스 형태의 모델을 생성한 후에, 그 블랙박스 모델을 새로운 방식을 통해 설명하고자 함.

## 모델 제한적
- Model-specific
  - 어떤 구체적인 아키텍쳐의 모델에 대해 사용 가능
  - 모델 자체가 설명 가능함을 지닌 경우
  - 어떤 경우에는 모델 성능에 영향을 준다.
- Model-agnostic
  - 일반적인 블랙박스 모델에 사용 가능
  - 기존 모델은 그대로 두고, 추후 설명 가능함을 위한 모듈을 추가하는 형식이라 블랙박스 모델 성능에 영향을 주지 않음.

## 국지성
- Global interpretability
  - 모델 전체를 보고, 해당 모델이 전반적으로 어떤 행동을 할지 설명 가능함.
  - 예를 들어, decisition tree를 보면 전체적인 모델의 행동 양상이 보인다.
- Local interpretability
  - 어떤 입력값에 대한 모델의 결과를 설명 가능함. 
  - 예를 들어 복잡한 사진을 주고 물체를 구분하는 작업에서 사진 내 픽셀에 대한 각 카테고리 별 확률 분포 제시.



**Sensitivity Analysis (SA)**

모델에 영향을 많이 주는 입력값은, 출력값을 입력값으로 미분했을 때, gradient 값이 큰 입력값이다. 예를 들어 모델에 사진을 넣었고, 모델은 고양이라는 답을 주었다면 그 답에 영향을 많이 미치는 입력 픽셀은 큰 gradient를 가질 것이다(?) 진짜 그럴려나.. 만약 사진을 입력으로 넣은 경우를 생각해보자. 사진을 보고 카테고리를 분류하는 모델이 어떤 한 사진을 입력으로 받고 고양이라는 답을 내놓았다. 모델의 출력에 x라는 점들이 영향을 가장 크게 주었다면, 만약 x 점들이 이상한 값으로 될 경우, 모델이 고양이라는 답을 내놓지 않을 것이다. 


**Layerwise Relevance Propagation (LRP)**

어떤 결과가 나왔을 때, 입력값을 기준으로 얼마나 contribution이 있는지 역추적하는 느낌? FCNN을 생각해볼 때, 마지막 hidden layer 내 노드 중, 출력값에 가장 큰 영향을 주는 노드를 찾을 수 있을 것이다. 또 해당 layer에 영향을 주는 정도를 이전 layer의 노드들에 대해 계산할 수 있을 것이고 이를 반복적으로 할 수 있을 것이다. 그렇게 출력값에 대한 입력값의 기여도를 계산할 수 있다.



# LIME
Local Interpretable Model-agnostic Explanations

예시를 먼저 보자. 어떤 모델이 sneeze, weight, headache, no fatigue, age의 feature를 보고 flu를 판단한다고 하자. LIME이 하고 싶은 것은 flu라는 답에 대해 어떤 features가 얼마나 영향을 끼쳤는지를 보는 것이다.

LIME은 다음 4개의 basic criteria를 만족해야 함:
1. Interpretable: 쉽게 설명 가능해야 한다.
2. Local fidelity: 임의의 instance에 대해서 설명을 할 때, local behavior를 잘 설명해야 한다.
3. Model-agnostic: 임의의 모델에 대해 잘 작동해야 한다.
4. Global perspective: 전체적인 거동도 어느 정도 설명해야 한다(?)


# SHAP
SHapley Additive exPlanation의 약자.

## Shapley Value
게임 이론에서 등장하는 개념. Total payout을 도출하기 위한 각 개인의 기여도를 계산하는 방식. 예를 들어 A,B가 팀 과제를 하는 상황이다. A 혼자하면 70점을 맞고, B 혼자하면 80점을 맞고, A와 B가 같이 하면 100점을 맞는다고 하자. 둘이 같이 하여 100점을 맞았을 때 A, B의 기여도는 어떻게 되는 것인가? 이러한 질문에 사용되는 개념이다. 출력값에 대한 입력값의 영향이 비선형적으로 결합이 될텐데, 그것을 decompostion하는 방식이라고 보면 좋을 듯.