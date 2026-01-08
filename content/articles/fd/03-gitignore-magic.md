---
title: Gitignore Magic
order: 3
---

`fd` respects `.gitignore` by default. This makes searches in projects actually useful.

## The Difference

With `find`, searching for JavaScript files gives you thousands of results including all of `node_modules`. With `fd`, you only get your code.

![fd respecting gitignore](/screenshots/fd/gitignore-demo.png)

`fd` skips `node_modules` automatically because it's in `.gitignore`.

## Override Ignore

Sometimes you need to see ignored files:

```bash
# Include ignored files
fd -I .js

# Include hidden files
fd -H config

# Both
fd -I -H .env
```

## Ignore Sources

`fd` respects:
- `.gitignore`
- `.git/info/exclude`
- Global gitignore
- `.fdignore` (fd-specific)

Create `.fdignore` for fd-specific exclusions:

```
*.log
temp/
cache/
```

## Example

Finding Python files:

```bash
# With find - manually exclude everything
find . -name "*.py" -not -path "*/.venv/*" -not -path "*/__pycache__/*"

# With fd - automatic
fd .py
```

If `.gitignore` has `venv/` and `__pycache__/`, `fd` already knows to skip them.
