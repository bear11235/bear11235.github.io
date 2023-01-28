---
layout: post #Do not change.
category: [Study, Fluid_Mechanics_Study, Turbulent_Flow_Study] #One, more categories or no at all.
title:  "Chapter 2. The equations of fluid motion - (1)"
date:   2023-01-28 17:35:00 +0900
author: bear11235 #Author's nick.
#nextPart: _posts/2021-06-16-syntax-example.md #Next part.
#prevPart: _posts/2021-01-30-example.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
---


## 2.1 Continuum fluid properties

#### Continuum hypothesis:

 - The smallest geometric length scale in a ﬂow is much larger than that of molecular scales
 - The mean free path, $ \lambda \sim 6 \times 10^{-8}m $ for air at STP condition
 - The smallest geometric length scale, $ l > 10^{-4}m $ for general case	s
 - Thus, "infinitesimal material elements" are quite larger than "fluid particles"
<br><br>

## 2.2 Eulerian and Lagrangian ﬁelds

Let $ \boldsymbol{X}^+(t, \boldsymbol{Y}) $ be the position at time $ t $ of the ﬂuid particle that is located at $ \boldsymbol{Y} $ at the speciﬁed ﬁxed reference time $ t_0 $. Then,

$$\frac{\partial}{\partial t} \boldsymbol{X}^+(t,\boldsymbol{Y})=\boldsymbol{U}(t, \boldsymbol{X}^+(t,\boldsymbol{Y}))$$.
Note that $\boldsymbol{Y}$ does not depend on time $ t $.
<br><br>

Let $ \boldsymbol{Q}(t, \boldsymbol{X}^+(t, \boldsymbol{Y})) $: Eulerian field variable

-  A quantity at time $ t $ of particles which are at the position $ \boldsymbol{X}^+ $ at time $ t $
- Note that the Eulerian ﬁeld $ \boldsymbol{Q} $ is indexed by the current position of the ﬂuid particle

Let $ \boldsymbol{Q}^+(t, \boldsymbol{Y}) $: Largrangian field variable

- A quantity at time $ t $ of particles which are from the position $ \boldsymbol{Y} $ at time $ t_0 $
- Note that the Lagrangian ﬁeld $ \boldsymbol{Q}^+ $ is indexed not by the current position of the ﬂuid particle, but by its position $ \boldsymbol{Y} $ at the reference time $ t_0 $.
- Hence, $ \boldsymbol{Y} $ is called the Lagrangian coordinate or the material coordinate.


Then, <br><br>
$$\begin{align}
%
\boldsymbol{Q}^+(t, \boldsymbol{Y}) &= \boldsymbol{Q}^+(t, \boldsymbol{X}^+(t, \boldsymbol{Y})) \qquad (Eulerian \leftrightarrow  Lagrangian)\\
%
\frac{\partial}{\partial t} \boldsymbol{Q}^+(t, \boldsymbol{Y}) &= \frac{\partial}{\partial t} \boldsymbol{Q}^+(t, \boldsymbol{X}^+(t, \boldsymbol{Y}))\\
%
&= \left( \frac{\partial}{\partial t} \boldsymbol{Q}^+(t, \boldsymbol{Y})) \right)_{\boldsymbol{x}=\boldsymbol{X}^+(t,\boldsymbol{Y})} +
%
\frac{\partial}{\partial t}X_i^+(t,\boldsymbol{Y})\left( \frac{\partial}{\partial x_i}\boldsymbol{Q}(\boldsymbol{x}, t) \right)_{\boldsymbol{x}=\boldsymbol{X}^+(t, \boldsymbol{Y})}\\
%
&= \left( \frac{\partial}{\partial t}\boldsymbol{Q}(\boldsymbol{x},t) + U_i(\boldsymbol{x_i},t)\frac{\partial}{\partial x_i}\boldsymbol{Q}(\boldsymbol{x},t)\right)_{\boldsymbol{x}=\boldsymbol{X}^+(t, \boldsymbol{Y})} \\
%
&= \left( \frac{D}{Dt}\boldsymbol{Q}(\boldsymbol{x},t) \right)_{\boldsymbol{x}=\boldsymbol{X}^+(t, \boldsymbol{Y})}
%
\end{align}$$
<br><br>


## 위 식의 의미

- 처음 $\frac{\partial}{\partial t} \boldsymbol{Q}^+(t, \boldsymbol{Y})$ 이 항은 Lagrangian variable에 대한 시간 편미분이므로, particle을 따라가며 변화율을 살펴보는 것이다 => Material Derivative (물질을 따라가며 미분하기 때문)
- 마지막 항 $\frac{D}{Dt}\boldsymbol{Q}(\boldsymbol{x},t)$ 을 보면, Euler variable에 대하여 Material Derivative로 표현된 것을 볼 수 있다.
- 따라서 Euler field에서의 Material Derivative는 아래와 같이 표현된다. 

$$ \frac{D}{Dt} \equiv \frac{\partial}{\partial t} +\boldsymbol{U} \cdot \bf{\nabla} $$
