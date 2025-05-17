---
title: Type Checking
order: 4
---

Next up is type checking. Since python is a dynamic language and type hints are, well, hints, it is entirely possible to write good type hints for a function but still ignore them. For example I can write a function that hints at a return type of a list[string], but in my code I can easily mix this with a list of integers and strings combined. Or, I can return a dictionary. It will still compile fine.

To make sure that the types are what you document it to be, we can use pyright.

```bash
uv add --dev pyright
```

To get pyright running we can run 

```bash
uv run pyright .
```

--- filename: .github/workflows/code-quality.yml ---
```yml
name: Python Code Quality
on: [push]
jobs:
  lock_file: ...
  linting: ...
	formatting: ...
	type_consistency:
		runs-on: ubuntu-latest
		needs: [lock_file]
		steps:
			- uses: actions/checkout@v4
			- uses: ./.github/actions/setup
			- run: uv run pyright .
```
