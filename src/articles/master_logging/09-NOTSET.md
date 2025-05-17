---
title: NOTSET
order: 9
--- 

There's a special log level called `NOTSET`. A logger with `NOTSET` inherits the level of its first ancestor that has a level set explicitly.
This allows you to define a default behavior for child loggers without explicitly setting their levels.

The `LogRecord` eventually reaches the root logger. If the root logger has a level set (anything but `NOTSET`), it acts as the final gatekeeper, filtering messages based on its level.
If the root logger has a `NOTSET` level, all messages are propagated to its handlers."

We can get the root by not providing a name.

```python
import logging

root_logger = logging.getLogger()
```

By default, the root logger has `WARNING` as log level. So, warning logs will be printed, but anything below that won’t. We can downgrade the root logger to `DEBUG` to see all logs.

```python
root_logger.setLevel(logging.DEBUG)

logger = logging.getLogger("child")
logger.debug("This is a debug message")
```

This will output:

```bash
$ python my_app.py
This is a debug message
```

