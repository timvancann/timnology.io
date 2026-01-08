---
title: Introduction
order: 0
---

You probably spend a lot of time typing directory paths:

```bash
cd ~/projects/work/client-sites/acme-corp/backend/api
# Later...
cd ~/projects/work/client-sites/acme-corp/backend/api  # Again
```

Or this:

```bash
cd ../../..
cd client-sites/acme-corp/backend/api
```

[zoxide](https://github.com/ajeetdsouza/zoxide) learns your directories and lets you jump with a few characters.

Traditional:
```bash
cd ~/projects/work/client-sites/acme-corp/backend/api
```

With zoxide:
```bash
z api
```

That's it.

## How It Works

zoxide tracks every directory you visit and ranks by frequency and recency.

```bash
# You have these directories:
# /home/user/projects/acme/backend/api (visited 20x)
# /home/user/projects/widgets/api (visited 2x)

z api
# → /home/user/projects/acme/backend/api
```

Most visited wins.

## Multiple Keywords

Match against the full path with spaces:

```bash
z work acme    # → ~/projects/work/client-sites/acme-corp
z blog articles # → ~/projects/personal/blog/content/articles
```

No slashes needed.
