---
title: "[ML/DL] DL - Optimization"
categories:
  - study
  - ML-DL
tags:
  - study
  - ML-DL
---

# Expected Risk Minimization (ERM)
여기서 risk란 loss 혹은 error의 의미로 생각하면 될듯. 즉 expected risk는 데이터 분포에서 기대되는 risk이다. 하지만 우리는 거의 모든 상황에서 데이터의 분포 $$ dP_{\tau}(x,y) $$를 알지 못한다. 따라서 Monte Carlo 방식으로 기대값을 구한다. ERM의 방식은 overfitting 문제에 빠지기 쉽다. 따라서 generalization을 보완할 수 있는 추가적인 항이 필요하다.

$$ R(f_{\theta}, \tau) = \int L_{\tau}(f_{\theta}(x), y) dP_{\tau}(x,y) \approx \frac{1}{n} \sum_{i=1}^{n} L_{\tau}(f_{\theta}(x_i), y_i)$$ 

# Stochastic Gradient Descent (SGD)
## Gradient Descent
- 매우 많은 데이터에 대해 구한 expected risk를 기반으로 GD를 하게 되면 요구 계산량이 많아진다.
- 매우 많은 local minima가 존재한다.
- 위 2가지 이유에서 subsampling하여 GD를 수행한다.

## SGD
 - GD는 모든 데이터에 대해서 구한 risk의 gradient를 활용하지만, SGD는 single data에 대한 risk를 이용한다.
 - 그럼에도 local minima에 충분히 수렴할 수 있다.
 - randomly sampled single data는 variance가 크기 때문에 gradient가 굉장히 noisy하고 따라서 수렴 속도가 느리다.

## Mini-batch SGD
 - GD와 SGD의 중간지점. 전체도 아니고 하나도 아닌, 데이터 중 일부분(mini-batch)의 risk를 최소화하도록 한다.
