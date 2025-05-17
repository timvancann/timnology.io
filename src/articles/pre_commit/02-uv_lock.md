---
title: uv lock
order: 2
---

By googling for `uv pre-commit` we find the available [uv pre-commit repo](https://github.com/astral-sh/uv-pre-commit) and this contains the entry to check for lock file consistency.

A hook typically consists of a repo, which is the link to a git repo, in this case github. A revision, which points to a git tag.  And a a list of hooks, given by a unique id. Each of these runs the desired script.

--- filename: .pre-commit-config.yaml ---
```yaml
repos:  
  - repo: https://github.com/astral-sh/uv-pre-commit  
    rev: 0.4.28  
    hooks:  
      - id: uv-lock  
```
