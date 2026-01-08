---
title: Installation
order: 1
---

Install `eza` using your package manager:

```bash
# macOS
brew install eza

# Ubuntu/Debian (22.10+)
sudo apt install eza

# Arch Linux
sudo pacman -S eza

# Fedora
sudo dnf install eza

# Windows
scoop install eza

# From source
cargo install eza
```

Verify it works:

```bash
eza --version
```

## Icons

To see icons instead of boxes, install a Nerd Font:

```bash
# macOS
brew tap homebrew/cask-fonts
brew install font-hack-nerd-font
```

Then configure your terminal to use it. Without a Nerd Font you'll see `�` instead of icons.
