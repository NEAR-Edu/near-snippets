---
title: match with PromiseResult
tags: [enum, cross contract calls, promises, nearcore, match]
topics: [Compound TypesControl Flow]
repo: https://github.com/ref-finance/ref-contracts
difficulty:
  near: 3
  language: 1
---

A `PromiseResult` is an enum that can take three values: `NotReady`, `Successful`, and `Failed`:

```https://github.com/near/nearcore/blob/354c7a5d24a2fc793573b690852359818860879d/runtime/near-vm-logic/src/types.rs#L34-L43
```

When making cross contract calls a smart contract method will often be registered as a callback, to be invoked after another smart contract method finishes. In these cases, the callback smart contract method will need to know if the previous method was `Successful` or `Failed`. This can be with `if/else` branching, but the idiomatic rust way is to use match (similar to a `switch/case`):

```https://github.com/ref-finance/ref-contracts/blob/2be596669c364265a0c0ec39b67e6c5cc1051fbb/ref-exchange/src/multi_fungible_token.rs#L191-L201
```
