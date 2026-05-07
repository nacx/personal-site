---
title: "Bringing the power of Envoy extensibility to Go and Rust developers"
event: "Virtual EnvoyCon 2026"
date: 2026-05-07
description: "Extending Envoy without C++: how Go and Rust filters open the platform to a broader audience."
# videoLink: "https://www.youtube.com/watch?v=ItpCGpYupQQ"
draft: true
---

Envoy is a highly extensible proxy that provides many mechanisms to extend its core functionality to specific use cases: Lua, ext-authz, ext-proc, WASM, dynamic modules... Leveraging those powerful features, however, is not easy. Some knowledge of Envoy internals is usually needed; the maturity of SDKs for languages other than C++ is an issue, and the overall developer UX is simply not there.

In this session, I'll introduce Built On Envoy, a project that fills the gap in the Envoy extensibility UX, providing developers with a zero-friction framework to create extensions using the official Dynamic Modules SDK, and very easily run and test extensions on their laptops using Rust and Go.

Built On Envoy also provides a home for extensions that don't belong to the Envoy tree, allowing users to discover, build, and share extensions, and lowering the barrier of Envoy adoption to make it the go-to proxy not only for knowledgeable platform teams, but for the wider appdev community.
