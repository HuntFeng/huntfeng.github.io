---
title: Noise‑Free Grid-based Vlasov Modeling of Plasma-Object Interactions via a Unified Ghost‑Fluid Immersed‑Boundary Method
date: 2025-05-20
category: Research
description: We present a unified immersed-boundary framework for grid-based Vlasov-Poisson simulations of plasma-object interactions, leveraging a ghost-fluid method to accurately impose complex boundary conditions on Cartesian grids. This approach enables noise-free, high-fidelity kinetic modeling in complex geometries, resolving critical near-wall phenomena.
keywords:
  - Grid-based Vlasov solver
  - Ghost-Fluid method
  - Immersed boundary
  - Vlasov-Poisson system
  - GPU
  - Kokkos
github: https://github.com/HuntFeng/vlasolver
---

## Abstract

Plasma-material interactions are critical to applications from electric propulsion and spacecraft charging to fusion divertor erosion and semiconductor fabrication. Predictive modeling requires high-fidelity, fully kinetic simulations that resolve the velocity distribution function (VDF) near complex boundaries. Particle-in-Cell (PIC) methods are widely used but suffer from noise and poor sampling of high-energy tails, where key plasma–surface processes occur. Grid-based Vlasov method avoids these issues by directly solving the VDF, but faces challenges imposing sharp, curved geometries on Cartesian meshes without costly local refinement.

We present a unified, second-order immersed-boundary framework for the 2D2V Vlasov-Poisson system on a single Cartesian grid. A ghost-fluid method enforces dielectric jump conditions between plasma and solid in the Poisson solver, while a sharp-interface ghost-cell scheme applies complex geometry conditions for the Vlasov equation without staircasing errors or dual meshes. Coupled with a Positive Flux Conserving semi-Lagrangian scheme, our method ensures charge conservation, VDF positivity, and relaxed CFL limits.

This approach enables accurate, noise-free kinetic simulations in complex geometries, resolving high-energy tails and near-wall structures. Results on classical plasma-dielectric cases demonstrate robust handling of curved boundaries, opening a practical path for Vlasov modeling in real-world applications.

## (Work In Progress)
