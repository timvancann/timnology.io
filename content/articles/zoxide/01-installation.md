---
title: Installation
order: 1
---

Two steps: install the binary and hook into your shell.

## Install

```bash
# macOS
brew install zoxide

# Ubuntu/Debian
apt install zoxide

# Arch
pacman -S zoxide

# Fedora
dnf install zoxide

# Windows
scoop install zoxide

# From source
cargo install zoxide
```

## Shell Integration

Add to your shell config:

```bash
# Bash
echo 'eval "$(zoxide init bash)"' >> ~/.bashrc

# Zsh
echo 'eval "$(zoxide init zsh)"' >> ~/.zshrc

# Fish
echo 'zoxide init fish | source' >> ~/.config/fish/config.fish
```

Restart your shell or source the config:

```bash
source ~/.bashrc  # or ~/.zshrc
```

Verify:

```bash
zoxide --version
which z
```

The `zoxide init` command creates the `z` command and hooks into `cd` to track your movements. Every directory you visit gets tracked automatically.
