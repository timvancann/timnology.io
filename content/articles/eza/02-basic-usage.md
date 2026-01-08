---
title: Basic Usage
order: 2
---

`eza` works as a drop-in replacement for `ls`. Everything you know still works.

## Simple Listings

```bash
eza --icons=always
```

Files get icons (📄), directories get folders (📁), different file types get different colors. Easier to scan than plain text.

## Long Format

```bash
eza -la --icons=always
```

![eza long format](/screenshots/eza/eza-la-icons.png)

Shows permissions, sizes (human-readable like `2.0k` instead of `2048`), dates, and icons for each file type.

## Alias

Set an alias to always use icons:

```bash
alias eza='eza --icons=always'
```

## Sorting

```bash
# By modification time
eza -la --sort=modified

# By size
eza -la --sort=size

# By extension
eza -la --sort=extension

# Reverse
eza -la --sort=size --reverse
```

Useful for finding large files or seeing what you recently worked on.

## Grid View

```bash
eza -l --grid
```

Compact but still shows details. Good for directories with lots of files.

## One Per Line

```bash
eza -1
```

One entry per line. Works like `ls -1`, useful for piping to other commands.
