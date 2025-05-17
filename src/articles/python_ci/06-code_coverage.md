---
title: Code Coverage
order: 6
---

Additionally to just running unit tests, we can also track the code coverage. You can use [codecov.io/](https://codecov.io/) as a target for your report.

```bash
uv add --dev pytest-cov
```

--- filename: .github/workflows/code-quality.yml ---
```yml
name: Python Code Quality
on: [push]
jobs:
  lock_file: ...
  linting: ...
	formatting: ...
	type_consistency: ...
  tests:
    runs-on: ubuntu-latest
    needs: [lock_file]
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup
      - run: uv run pytest -v --durations=0 --cov --cov-report=xml
      - name: Upload Coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```
