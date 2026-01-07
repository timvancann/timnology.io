---
title: uvx
order: 6
---

Instead of adding every dev dependency, uv lets you run standalone commands in a completely isolated environment with `uv tool run`, or simply `uvx`. It’s perfect for quick tasks like formatting or linting your project with [ruff](https://github.com/astral-sh/ruff).

```bash
uvx ruff check .
uvx ruff format .
```
