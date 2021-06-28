---
title: Multiple Vector Pushes
tags: [Vector, match]
topics: [Mutability, Control Flow]
repo: https://github.com/near-examples/nft-exquisite-corpse
sdk:
  language: rust
  version: near-sdk-rs@3.1.0
difficulty:
  near: 1
  language: 2
---

Persisting list like data is done with the `Vector` collection.

To use a `Vector` create a filed in the contract struct:

```https://github.com/near-examples/nft-exquisite-corpse/blob/e1e0759ffc7a3f3911b86dd79b2e3417e671e8f8/src/lib.rs#L62-L70
```

Instantiate the `Vector` either as a `Default` implementation or in an `#[init]` method:

```https://github.com/near-examples/nft-exquisite-corpse/blob/e1e0759ffc7a3f3911b86dd79b2e3417e671e8f8/src/lib.rs#L280-L292
```

Push into the `Vector` and persist the data to the blockchain:


```https://github.com/near-examples/nft-exquisite-corpse/blob/e1e0759ffc7a3f3911b86dd79b2e3417e671e8f8/src/lib.rs#L241-L275
```

**IMPORTANT** make sure to mutably borrow `self` with `&mut self` in the method signature.
