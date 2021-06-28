# NEAR Snippets

NEAR Snippets is a project to teach people Rust through an exploration of NEAR smart contracts. You can see it live at [near-snippets.com](https://near-snippets.com).

## Adding Snippets

To create a new snippet add a markdown file under the snippets directory. Each snippet must include yaml front matter:

```yaml
---
title: YOUR TITLE
tags: [tag1, tag2, tag3]
topics: [topic1, topic2]
repo: GITHUB REPO
sdk:
  language: rust
  version: near-sdk-rs@SDK_VERSION
difficulty:
  near: 1-3
  language: 1-3
---
```

Under the front matter write markdown blocks to explain snippets. Code snippets can be imported using a markdown code black followed by a github permalink url.

## Development

To get started:

* `yarn install`
* `yarn server`
* navigate to [localhost:8080](http://localhost:8080)
