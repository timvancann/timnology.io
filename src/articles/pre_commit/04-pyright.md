---
title: Pyright
order: 4
---

For `pyright`, we have to setup a bit extra, the pre-commit hook is easily added. But without any extra information the hook runs in it's isolated environment. Normally this is great, but for pyright it means it cannot find any imported dependencies. We can solve this by making sure pyright runs in the right `.venv` by adding a pyright section in the `pyproject.toml` file.

--- filename: pyproject.toml ----
```toml
[tool.pyright]
exclude = [".venv"]
pythonVersion = "3.13"
venvPath = "."
venv = ".venv"
```

Then we can add the hook:

--- filename: .pre-commit-config.yaml ---
```yaml
repos:  
  - ...
  - ...
  - repo: https://github.com/RobertCraigie/pyright-python  
    rev: v1.1.387  
    hooks:  
      - id: pyright  	
```
