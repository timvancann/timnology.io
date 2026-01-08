---
title: Useful Tips
order: 3
---

## See What's Tracked

```bash
zoxide query -l
```

Shows all directories with scores. Higher = visited more.

## Remove Directories

```bash
# Remove specific path
zoxide remove /old/project

# Interactive removal
zoxide remove -i
```

## Exclude Directories

Add to your shell config before `zoxide init`:

```bash
export _ZO_EXCLUDE_DIRS="/tmp:$HOME/Downloads"
eval "$(zoxide init bash)"
```

Now those directories won't be tracked.

## Use in Scripts

Get the path without jumping:

```bash
PROJECT_PATH=$(zoxide query proj)
cd "$PROJECT_PATH"
```
