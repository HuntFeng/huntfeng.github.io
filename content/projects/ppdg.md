---
title: GPU-based Provably Positive Discontinuous Galerkin method for Multidimensional Ideal Magnetohydrodynamics
date: 2021-06-01
category: Research
description: GPU-accelerated implementation of Provably Positive Discontinuous Galerkin method for ideal MHD simulations using Taichi Lang, ensuring positivity of density and pressure during plasma shock simulations.
keywords:
  - Magnetohydrodynamics
  - Discontinuous Galerkin
  - Positivity-preserving
  - GPU
  - Taichi Lang
---

## Abstract

Discontinuous Galerkin (DG) method is a commonly used numerical method for ideal magnetohydro-
dynamics (MHD) simulation. However, the simulated density and pressure might drop to negative when
shocks occur in the plasma. These negative quantities will lead to catastrophic results, and sometimes
will even crash the program. Therefore, it is crucial to ensure the positivity of density and pressure dur-
ing the simulation. Hence, the Provably Positive Discontinuous Galerkin (PPDG) method is developed.
It is proven mathematically that PPDG method preserves the positivity of density and pressure. The
innovation of this work is the implementation of PPDG using Taichi, an open-source high-performance
programming language. Such implementation can be run on GPU or multi-core CPU. Moreover, this
program has high portability because Tachi supports a wide range of backends, including x64 and ARM
CPUs, CUDA, OpenGL, Metal and more.

## Poster (CUPC 2021)

![Poster](/ppdg/poster.png)
