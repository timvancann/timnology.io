---
title: LogLevels
order: 1
---

Next, we should understand the concept of log levels. Every logger instance can be assigned a log level. Python knows 5 levels:

- `DEBUG`
- `INFO`
- `WARNING`
- `ERROR`
- `CRITICAL`

If you don’t assign a level, python will use a special level called `NOTSET`. We will talk more about `NOTSET` later.

A logger with a loglevel set, will only process logs of the set importance level and above, and will discard lesser important levels.

A [LogRecord](https://docs.python.org/3/library/logging.html#logging.LogRecord) can be created given a log level and a message.

```python
logger.setLevel(logging.INFO)
logger.info("This is an info message")
```

Running this code will still output nothing.
