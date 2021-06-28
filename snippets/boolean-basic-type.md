---
title: Boolean Basic Type
tags: []
topics: [Basic Types, Mutability]
repo: https://github.com/near/core-contracts
sdk:
  language: rust
  version: near-sdk-rs@2.0.0
difficulty:
  near: 1
  language: 1
---

Adding a basic type, like an `bool`, to the struct of a smart contract will persist the value across method invocations.

Here `paused` is included in the `StakingContract` struct:

```https://github.com/near/core-contracts/blob/d84f7a924b79009d3f7aa4e577c07b08a0489dc9/staking-pool/src/lib.rs#L89-L117
```

The current value of `paused` is available in each smart contract method with `self.paused` and can be mutated if `self` is mutably borrowed:

```https://github.com/near/core-contracts/blob/d84f7a924b79009d3f7aa4e577c07b08a0489dc9/staking-pool/src/lib.rs#L464-L471
```

**NOTE** in the method signature `self` is mutably borrowed with `&mut self`.

```https://github.com/near/core-contracts/blob/d84f7a924b79009d3f7aa4e577c07b08a0489dc9/staking-pool/src/lib.rs#L475-L482
```
