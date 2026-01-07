---
title: Running Hooks
order: 6
---

There are roughly three ways to run pre-commit hooks:

We can stage files and commit our code such that it runs the hooks. 

Or we can run the hooks manually with  

```bash
pre-commit run
```

If you find it skipping a lot of steps, this is because you do not have any staged files that match the hook. 

We can circumvent this by simply running the hook against all files with 

```bash
pre-commit run --all-files
```
