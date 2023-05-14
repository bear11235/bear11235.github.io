---
title: "Turbulence Equations"
categories:
  - study
  - turbulence
tags:
  - 
---

# Types of Turbulence
## Statistically Homogeneous Turbulence
- All statistics of fluctuating quantities are invariant under translation of the coordinate system
- 어디에서 난류 유동의 통계량을 측정해도 같은 값을 가짐
- 모든 곳에서 평균 속도에 대한 gradient는 0이어야 하고, 따라서 모든 곳에서 평균 속도는 모두 0을 가짐
- Kolmogorov hypotheses: Turbulent motions on small scales are typically assumed to be isotropic

<figure class="third center">
  <img 
  src="/assets/images/posts/linux/Turbulence/introduction/01.png" 
  >
  <figcaption>DNS of statistically homogeneous and isotropic turbulence: x1-component of the velocity
</figcaption>
</figure>

## Turbulent Shear Flow
- Relevant flow cases in technical systems
  - Round jet
  - Flow around airfoil
  - Flows in combustion chamber
- Due to the complexity of these turbulent flows they cannot be described theoretically

<figure class="third center">
  <img 
  src="/assets/images/posts/linux/Turbulence/introduction/02.png" 
  >
  <img 
  src="/assets/images/posts/linux/Turbulence/introduction/03.png" 
  >
  <figcaption>
  Temporally evolving shear layer“: Scalar dissipation rate χ (left), mixture fraction Z (rechts)
</figcaption>
</figure>


# Equations
## Mean-flow Equations
- Averaged Momentum Equation
<figure class="two-third center" style="margin: 0 0">
  <img 
  src="/assets/images/posts/linux/Turbulence/introduction/04.png" 
  >
</figure>

The last term is defined as Reynolds stress tensor:

$$ \tau_{ij,turb}=-\rho \overline{u'_i u'_j} $$

## Reynolds Stress Equations
<figure class="two-third center" style="margin: 0 0">
  <img 
  src="/assets/images/posts/linux/Turbulence/introduction/05-1.png" 
  >
  <img 
  src="/assets/images/posts/linux/Turbulence/introduction/05-2.png" 
  >
</figure>

**Physical meaning of each term**
- $$L$$: Local change
- $$C$$: Convective transport
- $$P$$: Production of Reynolds stresses (negative product of Reynolds-stress tensor and the gradient of time-averaged velocity)
- $$DS$$: (Pseudo-)dissipation of Reynolds stresses
- $$PSC$$: pressure-rate-of-strain correlation. It contributes to the redistribution of Reynolds stresses in a similar way the diffusion term does
- $$DF$$: diffusion of the Reynolds stresses. It includes all terms under the divergence operator
