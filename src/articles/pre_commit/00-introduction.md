---
title: Introduction
order: 0
---

Pre-commit hooks are scripts that analyze or modify your code snapshot before a Git commit. Unlike custom local scripts, pre-commit hooks are ideally community-managed and don't depend on bash or other ad hoc tools.

You might wonder, "Why bother with a CI pipeline then?" The answer is simple: hooks can be skipped with a flag during commits, and since they run locally, there's no guarantee they were executed consistently. Hooks streamline your workflow, but CI enforces standards across the entire team
