---
title: Dependencies
order: 2
---

Adding dependencies can be done with `uv add`.

```bash
uv add typer
````

Or development dependencies with

```bash
uv add --dev pytest
```

This resolves all dependencies, creates a `.lock` file and creates a local `.venv` folder containing the dependencies and python version.
