---
title: Tree Views
order: 4
---

`eza` can replace `tree` with better defaults and git integration.

## Basic Tree

```bash
eza --tree --icons=always
```

![eza basic tree](/screenshots/eza/tree-basic.png)

Shows directory structure with icons.

## Respect .gitignore

```bash
eza -T --icons=always --git-ignore
```

Skips everything in `.gitignore` like `node_modules`, `__pycache__`, etc.

![eza tree with gitignore](/screenshots/eza/tree-gitignore.png)

Without `--git-ignore` you'd see thousands of lines. With it you see only your code.

## Control Depth

```bash
# 2 levels deep
eza -T --level=2

# Only immediate children
eza -T --level=1
```

Limits how deep the tree goes. Useful for large projects.

## Long Format

```bash
eza -lA -T --git-ignore
```

Combines tree view with file details (permissions, sizes, dates).

## With Git Status

```bash
eza -lA -T --git-ignore --git
```

Tree view with git status indicators. Shows your entire project structure with which files are modified, new, or unchanged.

## Tree Alias

```bash
alias tree='eza --icons=always -lA -T --git-ignore'
```

Now `tree` shows icons, details, and respects `.gitignore`.

```bash
# Limit depth
tree --level=2

# Specific directory
tree src/
```
