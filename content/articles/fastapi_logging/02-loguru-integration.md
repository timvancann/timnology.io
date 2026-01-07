---
title: Loguru Integration
order: 2
---

# Loguru Integration

[Loguru](https://loguru.readthedocs.io/) is a modern logging library that simplifies logging configuration and provides better features out of the box.

## Why Loguru?

Compared to Python's standard logging:

- **Simpler Configuration**: No more handlers, formatters, or complex setup
- **Better Syntax**: More intuitive API with method chaining
- **Rich Features**: Built-in rotation, compression, and filtering
- **Exception Handling**: Better stack traces and error information

## Installation

```bash
uv add loguru
```

loguru's default logger is fantastic out of the box and can be used simply by importing it:

```python
from loguru import logger
```

## InterceptHandler

To configure uvicorn with loguru, we need to inctercept Uvicorns logs with an `InterceptHandler`:

```python
class InterceptHandler(logging.Handler):
    def emit(self, record: logging.LogRecord) -> None:
        # Get corresponding Loguru level if it exists
        level: str | int
        try:
            level = logger.level(record.levelname).name
        except ValueError:
            level = record.levelno

        # Find caller from where originated the logged message
        frame, depth = logging.currentframe(), 2
        while frame and frame.f_code.co_filename == logging.__file__:
            frame = frame.f_back
            depth += 1

        logger.opt(depth=depth, exception=record.exc_info).log(
            level, record.getMessage()
        )
```

Then we can use the handler the same way we did before:
```python
for name in logging.root.manager.loggerDict:
    if name in ("uvicorn"):
        uvicorn_logger = logging.getLogger(name)
        uvicorn_logger.handlers.clear()
        uvicorn_logger.setLevel(logging.INFO)
        uvicorn_logger.addHandler(InterceptHandler())
```

## Testing

Run your application and you'll see the same consistent output, but now powered by Loguru's more robust logging system.

The `InterceptHandler` ensures that all standard logging calls (including those from FastAPI and Uvicorn) are routed through Loguru, giving you unified control over your application's logging behavior.
