---
title: Ruff
order: 3
---

Analogue to how we found the pre commit hook for uv's lock file. We can find the hooks for ruff. 

```yaml title=".pre-commit-config.yaml"
repos:  
  - ...
  - repo: https://github.com/astral-sh/ruff-pre-commit  
    rev: v0.7.1  
    hooks:  
      - id: ruff  
        args: [ --fix ]  
      - id: ruff-format 
```
