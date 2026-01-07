---
title: Testing
order: 5
---

So far, we’ve only checked the validity and structure of syntax. Next up is actual implementation.  As you are probably aware, unit tests is the first and easiest way to check the validity of your implementation.

We’ll create a test folder, add a test file and create a unit test for our function. Nowadays, github co-pilot can really help with that, but always make sure that the resulting code tests what you want to test. Sometimes, I found copilot to be rather quick to mock certain functions, which is not always the desired process.

```bash
uv add --dev pytest
```

```bash
uv run pytest tests -v --durations=5
```

Neatly runs the tests. I like using the `-v` flag to have a bit more detailed output. I also like to pass in `--durations=5` which prints the duration of the `5` longest running tests. 
