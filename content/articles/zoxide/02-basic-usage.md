---
title: Basic Usage
order: 2
---

Just use your terminal normally. zoxide learns as you go.

## First Jump

Visit some directories with regular `cd`:

```bash
cd ~/projects/work/acme-corp
cd ~/projects/personal/blog
cd ~/Downloads
```

Now jump back with `z`:

```bash
z acme
# → ~/projects/work/acme-corp
```

## Multiple Keywords

Match multiple parts of the path:

```bash
z work acme    # → ~/projects/work/acme-corp
z proj blog    # → ~/projects/personal/blog
```

Order doesn't matter. Keywords match anywhere in the path.

## Ranking

More visits = higher rank. More recent = higher rank.

```bash
# You have both:
# ~/projects/work/api (visited 20x)
# ~/projects/personal/api (visited 2x)

z api  # → ~/projects/work/api
```

## Interactive Mode

If unsure, use `zi` to pick from a list:

```bash
zi api
```

Shows all matches, pick with arrow keys.

## Still Works Like cd

```bash
z ..        # Relative
z ~         # Home
z -         # Previous
```
