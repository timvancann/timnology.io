---
title: Lock File
order: 1
---

UV needs all your dependencies defined in the toml file. Every time you add a dependency using the UV CLI, the lock file is updated. This lock file makes sure that everyone installs the same dependencies and transitive dependencies with the same exact versions everywhere.

If you modify the toml file directly, the lock file is out of sync. We can verify if the lock file is in sync with the toml using

```bash
uv lock —-locked
```

This is the first job in our github actions.

--- filename: .github/workflows/code-quality.yml ---
```yml filename="index.js"
name: Python Code Quality
on: [push]
jobs:
  lock_file:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup
      - run: uv lock --locked
```
