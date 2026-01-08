---
title: Basic Usage
order: 2
---

## Simple Searches

```bash
# Find files with "config" in the name
fd config

# Find Python files
fd .py

# Search in specific directory
fd test src/
```

Output is colored - directories, files, and extensions are highlighted.

## Case Sensitivity

Smart case by default:
- Lowercase pattern = case insensitive (`fd readme` finds `README.md`)
- Uppercase pattern = case sensitive (`fd README` only finds `README.md`)

Override:

```bash
# Force case sensitive
fd -s readme

# Force case insensitive
fd -i README
```

## Filter by Type

```bash
# Files only
fd -t f pattern

# Directories only
fd -t d config

# Symlinks
fd -t l

# Executables
fd -t x
```
