---
title: Basic Logging Setup
order: 1
---

## Basic Logging Setup

Let's start with Python's standard logging module and create a consistent logging setup for your FastAPI application.

First, create a custom formatter to ensure consistent log output:

```python
import logging
import sys

import uvicorn
from fastapi import FastAPI, Request

logger = logging.getLogger(__name__)
formatter = logging.Formatter(
    "%(asctime)s - %(name)s - %(levelname)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)
handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(formatter)
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logger.addHandler(handler)
```

## Uvicorn Integration

Uvicorn has its own logging that we need to coordinate with our custom setup:

```python
for name in logging.root.manager.loggerDict:
    if name in ("uvicorn"):
        uvicorn_logger = logging.getLogger(name)
        uvicorn_logger.handlers.clear()
        uvicorn_logger.addHandler(handler)
        uvicorn_logger.setLevel(logging.INFO)
```

Then we can create the fastapi app:

```python
app = FastAPI(title="01. Basic Logging")


@app.get("/")
async def root(request: Request):
    logger.info("Health check requested")
    return {"status": "healthy"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, log_config=None)
```

## Key Points

- **Custom Formatter**: Ensures consistent log format across your application
- **Handler Management**: Remove default handlers to avoid duplicate logs
- **log_config=None**: Disables Uvicorn's default logging configuration
- **Centralized Logger**: Use the same logger instance throughout your application

## Testing It Out

Run your application and visit the `/health` endpoint. You should see logs like:

```
2025-07-08 10:30:45 | fastapi_app | INFO | Health check endpoint called
2025-07-08 10:30:45 | uvicorn | INFO | 127.0.0.1:56789 - "GET /health HTTP/1.1" 200 OK
```

This basic setup gives you consistent formatting and proper integration with FastAPI's underlying server. In the next chapter, we'll upgrade to Loguru for a more modern approach.