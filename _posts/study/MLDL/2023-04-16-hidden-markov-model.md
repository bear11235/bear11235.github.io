---
title: "Hidden Markov Model 공부하기"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
  - markov
  - bayesian network


---
 
# Markov Chain

## Markov Property
 - Markov 성질은 현재 시점의 상태는 바로 직전 시점의 상태에만 의존한다는 것이다.
 - 즉 $ P(X_{n} \vert X_{n-1}, X_{n-2}, \cdots, X_{1}) = P(X_{n} \vert X_{n-1}) $
 - 이것은 다가오는 미래는 과거에 영향 받지 않고 온전히 현재 상태에만 의존함을 의미한다.

## Definition
 - A Markov process is a stochastic process that satisfies the Markov property (sometimes characterized as "memorylessness"). In simpler terms, it is a process for which predictions can be made regarding future outcomes based solely on its present state and—most importantly—such predictions are just as good as the ones that could be made knowing the process's full history. In other words, conditional on the present state of the system, its future and past states are independent.
 - Markov chain은 Markov 성질을 만족하는 확률 과정이다. 쉽게 말해,, 한 상태에서 다른 상태로 상태가 전이될 때의 확률이 Markov property를 만족하는 chain을 의미한다. 다른 상태로 전이할 때 이전 상태의 history는 전혀 중요하지 않고 현재 상태만 고려하면 된다. 
 - 예를 들어, 날씨의 변화를 Markov chain을 통해 표현한다는 것은 오늘의 날씨는 바로 전날의 날씨에만 영향을 받으며, 또한 내일의 날씨는 오늘의 날씨에만 영향을 받는다는 것을 의미한다. 굉장히 강력한 가정이라 볼 수 있다.

## Transition Matrix
 - n개의 상태 $(X_{1}, \cdot, X_{n})$ 로 구성된 Markov chain을 생각해보자. 
 - $i$번째 상태 $X_{i}$에서 $j$번째 상태 $X_{j}$로 전이될 확률을 $P_{ij}$로 생각할 수 있다.
 - Transition Matrix $P$는 $P_{ij}$를 성분으로 갖는 $n \times n$ 크기의 행렬이다.


# Hidden Markov Model (HMM)

## Definition
 - A hidden Markov model (HMM) is a statistical Markov model in which the system being modeled is assumed to be a Markov process with unobservable ("hidden") states.
 - 관측가능한 변수 $(X)$와 관측이 불가능한 은닉 상태 $(Z)$로 이루어진 Markov 시스템을 의미한다.
 - 우리가 관측하는 변수들끼리는 markov 성질을 만족하지 않지만, 그것들을 야기하는 은닉 상태는 markov chain을 이룬다.
 - HMM의 Joint Probability Distribution $P(X_1, \cdots, X_n, Z_1, \cdots, Z_n)$를 그래프로 표현하면 아래와 같이 표현할 수 있다. <br>
   <img src="/assets/images/posts/MLDL/hidden-markov-model/01.png" style="width:50%">

## Example
**Part-Of-Speech(POS) Tag** <br>
  <img src="/assets/images/posts/MLDL/hidden-markov-model/02.png" style="width:45%">
  <img src="/assets/images/posts/MLDL/hidden-markov-model/03.png" style="width:45%">
  - "Janet will back the bill"이란 문장이 있다고 생각해보자.
  - 여기서 우리가 관측한 변수는 Janet, will 등과 같은 단어 자체다.
  - 이때 HMM은 상태의 전이 확률(A단어 다음 B단어가 등장할 확률)을 단어와 단어 사이의 직접적인 관계가 아닌 은닉 상태 Z를 통해 표현된다고 본다.
  - 본 예시에서 은닉 상태 Z는 단어의 품사다. Janet이란 단어$(X_1)$ 뒤에 will이란 단어$(X_2)$가 등장할 확률은 각각의 품사와 함께 표현된다.
  - $P(X_2, X_1) = P(X_1, X_2, Z_1, Z_2) = P(Z_1)P(X_1 \vert Z_1)P(Z_2 \vert Z_1)P(X_2 \vert Z_2)$
    - $P(Z_1)$: $Z_1$(명사)의 품사가 등장할 확률
    - $P(X_1 \vert Z_1)$: 품사가 $Z_1$(명사)일 때, 단어가 $X_1$(Janet)일 확률
    - $P(Z_2 \vert Z_1)$: 이전 품사가 $Z_1$(명사)일 때, 다음 품사가 $Z_2$(조동사)일 확률
    - $P(X_2 \vert Z_2)$: 품사가 $Z_2$(조동사)일 때, 단어가 $X_2$(will)일 확률

## HMM
<img src="/assets/images/posts/MLDL/hidden-markov-model/01.png" style="width:70%"> <br>
위 그림과 같은 Hidden Markov Model를 생각해보자. 이때 편의를 위해 HMM이 다음의 조건을 만족한다 가정하자.
 - 각각의 은닉 상태는 $$\{ 1, \cdots, m \}$$ 중 하나를 갖는다: $$Z_i \in \{1, \cdots, m\}$$
 - 초기 분포를 $\pi$라고 하자: $\pi_i = P(Z_1=i)$
 - Time-homogeneity를 만족한다. 전이확률 $T_{ij}=P(Z_{t+1}=j \vert Z_t=i)$이 time-index인 t에 대해 변하지 않는다. 즉 전이 확률은 시간에 대해 independent하다.
 - 마찬가지로 emission distribution $\epsilon_{i}(x_t)=P(x_{t} \vert Z_{t}=i)$ 또한 time-independent하다.

## Tasks in HMM
**1. Decoding**
- Find $argmax_z P(z \vert x)$. 
- Given an HMM, what is the most likely sequence of states z to generate output x? 
- 어떤 HMM에 대해 주어진 output $\mathbf{X}$를 생성해냈을 가장 그럴듯한 sequence of hidden state $\mathbf{Z}$ 가 무엇이냐?

**2. Likelihood**
 - Compute $P(X)$
 - Given an HMM parametrized with $$\Theta = (\pi, T, \epsilon)$$, compute the likelihood of the output sequence.
 - $$\Theta = (\pi, T, \epsilon)$$으로 parametrization 된 HMM이 주어졌을 때, output $\mathbf{X}$이 생성될 확률은?

**3. Estimation**
 - Find $argmax_{\Theta} P(X;\Theta)$
 - Learning
 - Maximum Likelihood Estimation
