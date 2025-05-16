---
title: Running commands
order: 3
---

Running commands is as easy as calling `uv run`. For example, lets add a simple test case at `tests/test_main.py`

```python title="tests/main.py"
def test_main():
    assert True
```

Running pytest in your environment can be done with 

```bash
uv run pytest
```

UV is so quick that it resyncs and locks the environment on every `run` command.
If you manually edit the `pyproject.toml` file to add the `requests` library:

--- filename: pyproject.toml ---
```toml
[project]
name = "yt-uv"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.8"
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

import `requests` into the test file:

--- filename: tests/test_main.py ---
```python
import requests

def test_main():
    assert True
```

and run

```bash
uv run pytest
```

UV quickly resolve all dependencies, updates the lock file and runs the test, all blazingly fast.
