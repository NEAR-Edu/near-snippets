---
title: FungibleToken Metadata struct
tags: [struct, fungible token, standards]
topics: [Compound Types]
repo: https://github.com/near/near-sdk-rs
difficulty:
  near: 1
  language: 1
---

Fungible tokens can include metadata that is used to help display the token in the NEAR wallet. The `FungibleTokenMetadata` is defined as a struct (dictionary like data of key/value pairs):

```https://github.com/near/near-sdk-rs/blob/42f62384c3acd024829501ee86e480917da03896/near-contract-standards/src/fungible_token/metadata.rs#L7-L17
```

Include the `FungibleTokenMetadata` struct inside the contract struct using a `LazyOption` so the metadata is only loaded when it is needed (to save gas):

```https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token/ft/src/lib.rs#L33-L36
```

When the contract is initialized, create an instance of the `FungibleTokenMetadata` struct:

```https://github.com/near/near-sdk-rs/blob/master/examples/fungible-token/ft/src/lib.rs#L51-L65
```
