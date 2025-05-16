---
title: Installing Python
order: 4
---

UV also replaces [pyenv](https://github.com/pyenv/pyenv) as python version manager.

We can check the python version by running:

```bash
$ uv run python --version

Python 3.8.4
```

Now, we like to use cutting edge technology so settings the python version is as easy as modifying the `pyproject.toml` file

--- filename: pyproject.toml ---
```toml {1-3,4}
[project]
name = "yt-uv"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
    "typer>=0.12.4",
    "requests",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.uv]
dev-dependencies = [
    "pytest>=8.3.2",
]
```

Then running 

```bash
uv sync
```

installs python `3.12`, re-resolves all dedependencies and links the python version to our `.venv`

```bash
uv run python --version

Python 3.12.5
```

You can also manually install and uninstall python versions with

```bash
uv python install <version>
uv python uninstall <version>
```
