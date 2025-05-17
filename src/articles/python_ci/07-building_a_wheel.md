---
title: Building A Wheel
order: 7
---

To check if a project can actually be build into a wheel is a nice final step. As we speak, the latest version of uv comes with a build backend defined. This means we can simply run

```bash
uv build
```


--- filename: .github/workflows/code-quality.yml ---
```yml
name: Python Code Quality
on: [push]
jobs:
  lock_file: ...
  linting: ...
	formatting: ...
	type_consistency: ...
  tests: ...
  build:
    runs-on: [ubuntu-latest]
    needs: [linting, formatting, type_consistency, tests]
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup
      - run: uv build
```
