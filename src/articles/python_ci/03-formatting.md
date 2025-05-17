---
title: Formatting
order: 3
---

Complementary to linting, we have formatting. This checks how your code is visually structured. Such as sorting of imports, double quotes or single quotes for strings, line length, backslashes or parentheses for multiline expressions etc.

The black and isort combination ruled for many years. They would make sure your code was deterministically formatted. Both are superseded by none other that ruff.

With 

```bash
uvx ruff format . 
```

we can completely reformat our code to by fully pep compliant. And like with linting, you can customise how it behaves. For me, I find a line length of `80` a bit short, so I'm going to set that to `100`

`.pyproject.toml`
```toml
[tool.ruff]
line-length = 100
```


--- filename: .github/workflows/code-quality.yml ---
```yml
name: Python Code Quality
on: [push]
jobs:
  lock_file: ...
  linting: ...
	formatting:
		runs-on: ubuntu-latest
		needs: [lock_file]
		steps:
			- uses: actions/checkout@v4
			- uses: ./.github/actions/setup
			- run: uvx ruff format --check .
```
