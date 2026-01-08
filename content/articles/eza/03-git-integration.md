---
title: Git Integration
order: 3
---

Add `--git` to see file status in your listing.

## Git Status

```bash
eza -la --icons=always --git
```

![eza with git status](/screenshots/eza/eza-la-git.png)

The git status column shows:
- `M` - Modified (not staged)
- `N` - New (untracked)
- `-` - Unchanged
- `MM` - Modified in index and working tree
- `--` - Directory

Shows which files have changes without running `git status`.

## All Status Codes

```
N  - New (untracked)
M  - Modified
D  - Deleted
R  - Renamed
T  - Type changed
I  - Ignored
U  - Unmerged
```

## Combine with Sorting

```bash
eza -la --git --sort=modified
```

See which modified files you touched most recently.

## Skip Ignored Files

```bash
eza -la --git-ignore
```

Hides files in `.gitignore` like `__pycache__/`, `venv/`, `node_modules/`, or `dist/`.

## Useful Alias

Combine it all:

```bash
alias ll='eza --icons=always -la --git'
```

Now `ll` shows icons, permissions, git status, and human-readable sizes in one command.
