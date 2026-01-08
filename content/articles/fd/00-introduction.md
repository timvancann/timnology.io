---
title: Introduction
order: 0
---

`find` is powerful but the syntax is painful. You end up Googling it every time.

Compare this:

```bash
# find
find . -name "*.js" -type f -not -path "*/node_modules/*"

# fd
fd .js
```

That's [fd](https://github.com/sharkdp/fd) - simpler syntax, faster, and respects `.gitignore` by default.

## Why it's useful

**Respects .gitignore**: When searching a project, `fd` automatically skips `node_modules`, `.git`, `__pycache__`, etc. No need to manually exclude them.

**Fast**: Built in Rust, often 2-3x faster than `find` on large codebases.

**Simple syntax**: Patterns are just regex. No more remembering `-name` vs `-iname` vs `-path`.

**Colored output**: Different file types get different colors, easier to scan.

## Example

Finding config files:

```bash
# With find
find . -type f -name "*config*.js" -not -path "*/node_modules/*" -not -path "*/.git/*"

# With fd
fd config.js
```

If `node_modules` is in `.gitignore`, `fd` already knows to skip it.
