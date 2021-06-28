---
title: i8 Basic Type
tags: [overflows]
topics: [Basic TypesMutability]
repo: https://github.com/near-examples/rust-counter
difficulty:
  near: 1
  language: 1
---

Adding a basic type, like an `i8`, to the struct of a smart contract will persist the value across method invocations.

Here `val` is included in the `Contract` struct:

```https://github.com/near-examples/rust-counter/blob/ce7e8df3d87bf0f695537d50de2a058de545f7ab/contract/src/lib.rs#L18-L23

```

The current value of `val` is available in each smart contract method with `self.val` and can be mutated if `self` is mutably borrowed:

```https://github.com/near-examples/rust-counter/blob/ce7e8df3d87bf0f695537d50de2a058de545f7ab/contract/src/lib.rs#L51-L60

```

**NOTE** in the method signature `self` is mutably borrowed with `&mut self`.

```https://github.com/near-examples/rust-counter/blob/ce7e8df3d87bf0f695537d50de2a058de545f7ab/contract/src/lib.rs#L70-L79

```
