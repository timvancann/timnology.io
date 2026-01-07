---
title: LastResort Handler
order: 5
---

There's one special built-in handler that is unlike the rest. If, and only if, a logger has no handlers attached (that is, no handler on itself or any of its ancestors) then the `LogRecord` is sent to the [`LastResort`](https://docs.python.org/3/library/logging.html#logging.lastResort)  Handler.
This is a handler with output stderr, no formatting, and a log level of `WARNING`.

This is why, without any configuration, warning logs and up are printed to the console.

```python
import logging

logger = logging.getLogger("__name__")
logger.warning("This is a warning message")
```

