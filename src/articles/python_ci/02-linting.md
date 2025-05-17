---
title: Linting
order: 2
---

Secondly, we can add a linter to make sure that everyone sticks to the same code standards. Linters can check if your code has docstrings, type hints, doesn't contain secrets, it can check cyclomatic complexity, and much much more. There are a quite a few linters but the most complete and fastest is ruff. 

To check if the project is up to standards we can run 
```bash
uvx ruff check .
```

his will report all lines that violate a rule. You can modify which rules ruff checks in the toml file.


--- filename: .github/workflows/code-quality.yml ---
```yml
name: Python Code Quality
on: [push]
jobs:
  lock_file: ...
  linting:
    runs-on: ubuntu-latest
    needs: [lock_file]
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup
      - run: uvx ruff check .
```
