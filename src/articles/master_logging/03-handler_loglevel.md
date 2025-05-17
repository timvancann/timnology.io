---
title: Handler LogLevel
order: 3
---

Handlers also accept a `level` parameter, which is the minimum level of the log messages that the handler will process.

```python
stream_handler = logging.StreamHandler()
stream_handler.setLevel(logging.WARNING)
logger.addHandler(stream_handler)
logger.setLevel(logging.INFO)

logger.info("This message will not be processed by the handler")
logger.warning("This message will be processed by the handler")
```

This is useful when you want to log messages of a certain level to a specific handler.
