---
title: Initialization
order: 0
---

Create a new project and a default lock file using `uv` with:

```bash
uv init --project
uv lock
```

This sets up the `pyproject.toml` with a build backend.

To get github actions up and running we will reuse the installation of `uv` accross multiple jobs:

--- filename: .github/actions/setup/action.yml ---
```yaml
runs:
  using: composite
  steps:
    - name: Install uv
      uses: astral-sh/setup-uv@v3
      with:
        version: "0.4.19"

```

