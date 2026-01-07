---
title: Filters
order: 6
--- 

The third concept is filters. They are similar to log levels in that they can discard unmatched log records, but are entirely custom.
A filter accepts a log record and returns a boolean. You can filter on any conceivable field of the `LogRecord`.

Filters can be made by extending the `logging.Filter` class and implementing the `filter` method.

```python
class CustomFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        return record.levelno >= logging.WARNING

logger.addFilter(CustomFilter())
```

Alternatively, you can simply create a function.

```python
def custom_filter(record: logging.LogRecord) -> bool:
    return record.levelno >= logging.WARNING
logger.addFilter(custom_filter)
```

