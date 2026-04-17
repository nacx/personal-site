---
title: "Service Mesh as the Security Kernel for Zero Trust Platforms"
event: "Zero Trust Architecture and DevSecOps for Cloud-Native Applications, NIST 2022"
date: 2022-01-01
description: "Demonstrating how a Service Mesh can be used as a Security Kernel to implement Zero Trust platforms."
codeLink: "https://github.com/tetratelabs/nist-demo-2022"
videoLink: "https://www.youtube.com/watch?v=1-QPmJAH-p0&list=PLm51GPKRAmTk8hFMgR6w3g0tSR1mpYipc"
demoLink: https://github.com/tetratelabs/nist-demo-2022
---

In this talk given at the
[Zero Trust Architecture and DevSecOps for Cloud-Native Applications](https://www.nist.gov/news-events/events/2022/01/zta-and-devsecops-cloud-native-applications-virtual)
conference held at [NIST](https://www.nist.gov/), I am demonstrating how a Service Mesh can be used as a Security
Kernel to implement Zero Trust platforms. We will see how we can leverage distributed enforcement points to apply policy on the user identity, how to enforce runtime identity as well, and how application targetted policies can be created to quickly mitigate vulnerabilities like the `Log4Shell` one.

The [demo](https://github.com/tetratelabs/nist-demo-2022) also shows the development of custom WASM-based policies that can leverage the entire feature set of the programming language of choice to build rich access policies that can be enforced by the mesh.
