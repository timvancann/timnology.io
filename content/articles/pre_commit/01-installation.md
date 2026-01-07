---
title: Installation
order: 1
---

To mimic the CI pipeline in from the github repo locally, we can install the amazing tool call [`pre-commit`](https://pre-commit.com/). Do this on your system python with 

```bash
pip install pre-commit
```

Next, we have to install the pre-commit hook into our git repo with 

```bash
pre-commit install
```

Lastly, create an empty `.pre-commig-config.yaml` file in the root of the repository.

