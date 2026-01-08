# Screenshot Guide

This guide shows you how to create screenshots for the CLI tool articles.

## Setup

For best results:
- Use a terminal with a Nerd Font installed (for icons)
- Set terminal width to ~80-100 columns  
- Use a clean, readable color scheme
- Consider using a screenshot tool that captures with transparency

## Quick Option: Paste Your Own Output

If you prefer, you can also just run these commands in your actual project directories and paste the output here. I can then convert them to code blocks instead of screenshots. Let me know which approach you prefer!

## eza Screenshots

### Example Directory Setup

Create a test directory with git:

```bash
mkdir -p ~/screenshot-demo/src/components ~/screenshot-demo/tests
cd ~/screenshot-demo
git init

# Create some files
touch README.md
touch .gitignore
touch src/index.js
touch src/utils.js
touch src/components/Header.js
touch tests/index.test.js

# Make some git changes
git add README.md .gitignore src/utils.js
echo "console.log('modified')" >> src/index.js  # Modified but not staged
echo "export const New = () => {}" > src/components/Header.js  # New file
```

### Screenshot 1: Basic ls vs eza comparison
**File:** `public/screenshots/eza/basic-comparison.png`

```bash
cd ~/screenshot-demo
ls -la
```

Then:

```bash
eza -la --icons=always
```

Take a screenshot showing both outputs side by side or in sequence.

### Screenshot 2: Long format with icons
**File:** `public/screenshots/eza/long-format.png`

```bash
cd ~/screenshot-demo
eza -la --icons=always
```

### Screenshot 3: Git integration
**File:** `public/screenshots/eza/git-status.png`

```bash
cd ~/screenshot-demo
eza -la --icons=always --git
```

Should show the git status indicators (M, N, etc.)

### Screenshot 4: Tree view
**File:** `public/screenshots/eza/tree-basic.png`

```bash
cd ~/screenshot-demo
eza -T --icons=always
```

### Screenshot 5: Tree with git ignore
**File:** `public/screenshots/eza/tree-gitignore.png`

First add to .gitignore:
```bash
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
mkdir node_modules
touch node_modules/something.js
touch debug.log
```

Then:
```bash
# Without git-ignore
eza -T --icons=always

# With git-ignore
eza -T --icons=always --git-ignore
```

### Screenshot 6: Tree with long format and git
**File:** `public/screenshots/eza/tree-long-git.png`

```bash
cd ~/screenshot-demo
eza -lA -T --icons=always --git-ignore --git
```

## fd Screenshots

### Example Directory Setup

```bash
cd ~/screenshot-demo
mkdir -p src/api src/utils tests
touch src/index.js
touch src/api/routes.js
touch src/api/config.js
touch src/utils/helpers.js
touch tests/test-api.js
touch tests/test-utils.js
touch README.md
touch package.json
```

### Screenshot 1: find vs fd comparison
**File:** `public/screenshots/fd/basic-comparison.png`

```bash
cd ~/screenshot-demo
find . -name "*.js" -type f
```

Then:

```bash
fd .js
```

### Screenshot 2: fd with color output
**File:** `public/screenshots/fd/colored-output.png`

```bash
cd ~/screenshot-demo
fd config
```

Should show colored output with highlighted matches.

### Screenshot 3: fd respecting gitignore
**File:** `public/screenshots/fd/gitignore-demo.png`

```bash
# Add node_modules
mkdir -p node_modules/express/lib
touch node_modules/express/lib/express.js
touch node_modules/express/lib/router.js

# Show difference
echo "# Without -I flag (respects .gitignore)"
fd .js

echo "# With -I flag (shows everything)"
fd -I .js
```

### Screenshot 4: fd with type filtering
**File:** `public/screenshots/fd/type-filtering.png`

```bash
cd ~/screenshot-demo
fd -t d  # directories only
fd -t f config  # files only
```

## Alternative: Use Your Own Output

If you prefer, you can run these commands in your actual projects and paste the output. Let me know which approach you prefer and I can adjust the articles accordingly!

## Screenshot Tool Recommendations

- **macOS**: Use `CMD+Shift+4` for selection or tools like CleanShot X
- **Linux**: `gnome-screenshot`, `spectacle`, or `flameshot`
- **Windows**: `Snipping Tool` or `ShareX`

For terminal screenshots specifically, consider:
- [termshot](https://github.com/homeport/termshot)
- [carbon](https://carbon.now.sh/) - for code/terminal output as images
- [silicon](https://github.com/Aloxaf/silicon) - create nice terminal output images
