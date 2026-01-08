---
title: Advanced Patterns
order: 4
---

`fd` uses regex by default.

## Regex

```bash
# Starting with "test"
fd ^test

# Ending with .js or .ts
fd '\.(js|ts)$'

# Numbers in name
fd '\d+'

# Config files
fd 'conf(ig)?'
```

## Extensions

```bash
# Single extension
fd -e py

# Multiple
fd -e js -e ts
fd -e jpg -e png -e gif
```

## Exclude

```bash
# Exclude test files
fd .py -E '*test*'

# Multiple excludes
fd .js -E node_modules -E dist -E build
```

## Search Full Path

By default `fd` only searches filenames. Use `-p` to search the full path:

```bash
# Files in any "src" directory
fd -p src/.*.js

# Config files in config directories
fd -p config/.*\.yml
```

## Execute Commands

Run commands on results with `-x`:

```bash
# Delete all .log files
fd -e log -x rm {}

# Convert images
fd -e jpg -x convert {} {.}.png

# Run tests
fd test_ -x pytest {}
```

`{}` is the file path, `{.}` is path without extension. Commands run in parallel by default.
