---
title: LookupMap Insert
tags: [LookupMap]
topics: [Mutability]
repo: https://github.com/near-examples/rust-status-message
difficulty:
  near: 1
  language: 1
---

Persisting dictionary like data (key/value pairs) is done with a `LookupMap`.

To use a `LookupMap` create a field in the contract struct:

```https://github.com/near-examples/rust-status-message/blob/f47c092ca743071c5a5ea0b71de02517001cc3bc/src/lib.rs#L9-L11
```

Instantiate the `LookupMap` either in an `#[init]` method or as a `Default` implementation:

```https://github.com/near-examples/rust-status-message/blob/f47c092ca743071c5a5ea0b71de02517001cc3bc/src/lib.rs#L13-L19
```

Insert into the `LookupMap` and persist the data to the blockchain:

```https://github.com/near-examples/rust-status-message/blob/f47c092ca743071c5a5ea0b71de02517001cc3bc/src/lib.rs#L23-L26
```

**IMPORTANT** make sure to mutably borrow `self` with `&mut self` in the method signature.
