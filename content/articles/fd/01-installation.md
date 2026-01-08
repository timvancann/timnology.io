---
title: Installation
order: 1
---

Install using your package manager:

```bash
# macOS
brew install fd

# Ubuntu/Debian
sudo apt install fd-find

# Arch
sudo pacman -S fd

# Fedora
sudo dnf install fd-find

# Windows
scoop install fd

# From source
cargo install fd-find
```

On Debian/Ubuntu, the binary is called `fdfind` (naming conflict). Create an alias:

```bash
echo "alias fd='fdfind'" >> ~/.bashrc
```

Verify:

```bash
fd --version
```
