---
title: Pytest
order: 5
---

To run `pytest` we can setup a custom hook by providing the `local` repo. This allows us to basically define whatever we want. The setup needs a few keys. 

`id`, `name` and `language` are self explanatory

`entry` defines the scrip that needs to be run. In our case pytest located in the virtual environment. A caveat is that this assumes that everyone working on the project has the same venv location.

`pass_filenames` is set to true since we don't want pre-commit to pass any filenames to the hook, that'd make pytest crash

`always_run` is set to true to ensure the tests always run, even when there are no files staged

--- filename: .pre-commit-config.yaml ---
```yaml
repos:  
  - ...
  - ...
  - ...
  - repo: local  
    hooks:  
      - id: pytest  
        name: pytest  
        entry: ./.venv/bin/pytest tests  
        language: python  
        pass_filenames: false  
        always_run: true
```
