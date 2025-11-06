---
title: Spectral Stability of Plasma Flows In the Magnetic Nozzle
date: 2024-08-30
category: Research
description: Spectral stability analysis of plasma flows in magnetic nozzle configurations using spectral methods, examining eigenvalue problems and addressing spectral pollution in subsonic, supersonic, and transonic velocity profiles.
keywords:
  - Magnetic nozzle
  - Magnetic mirror configuration
  - Spectral method
  - Spectral pollution
  - Spectral stability
  - Plasma stability
  - Eigenvalue problem
github: https://github.com/HuntFeng/magnetic_nozzle_spectral_stability
paper: https://harvest.usask.ca/items/8f1064ef-ac1c-41b5-b157-a39c70e77b14
---

## Abstract

In this thesis, spectral stability of plasmas is understood as an eigenvalue problem of linearized plasma equations describing time dynamics near some equilibrium state. Presence of eigenvalues with positive imaginary part would indicate the instability when small fluctuations will grow (typically exponentially) in time. A particular focus is the stability of plasma with stationary flows, in particular, flows in the magnetic nozzle. Magnetic nozzle, or magnetic mirror configurations, with converging-diverging magnetic field are used to accelerate plasma in plasma propulsion systems (magnetic Laval nozzle) and in fusion devices aiming to confine plasma and reach controlled thermonuclear fusion. We consider the linear stability of plasma folws under different boundary conditions. The linearized plasma equations are discretized and spectral stability problem is reduced to a polynomial eigenvalue problem. We found that the subsonic and supersonic folws are stable for Dirichlet boundary conditions. The supersonic flow is unstable for the mixed (fixed-open) boundary conditions. The subsonic flow has conflicting modes; i.e., the ground mode is unstable while the rest are stable. We show that different spectral methods, spectral-collocation and spectral-Galerkin methods agree. Phenomena of spectral pollution resulting in spurious unstable modes is discussed. By studying the convergence of different modes, we successfully eliminated the spurious modes. The stability problem of the transonic velocity profile has an additional difcfiulty due to the singularity at the sonic point, the point when the folw velocity is equal to the local sound velocity. At this point, the coefficient in front of the highest derivative of the differential eigenvalue equation becomes zero. In this case, the direct application of the spectral methods is problematic. To solve this problem, we solve the equation near the singularity by the Frobenius method and then use the regular solution with the shooting method to find the eigenvalues. We find that the transonic accelerating velocity profile is stable.

## Figures

![Accelerating case](/spectral-stability/accelerating-case.png)
