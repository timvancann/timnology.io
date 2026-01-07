---
title: Production-Ready Setup
order: 3
---

# Production-Ready Setup

Production logging requires more than just console output. You need structured logs, external service integration, and environment-specific configurations.

## Environment Configuration

First, create environment-based configuration. This setup logs to stdout in development and logs `json` logs when in production.

```python
ENV = os.getenv("ENV", "dev")
logger.remove()
if ENV == "dev":
    logger.add(sys.stdout)
elif ENV == "prod":
    logger.add(sys.stdout, serialize=True)
```

### Sentry for Error Tracking

We can setup sentry for error tracking.

```bash
uv add sentry_sdk
```

```python
import sentry_sdk
SENTRY_TOKEN = os.getenv("SENTRY_TOKEN")

ENV = os.getenv("ENV", "dev")
logger.remove()
if ENV == "dev":
    logger.add(sys.stdout)
elif ENV == "prod":
    logger.add(sys.stdout, serialize=True)
    sentry_sdk.init(
        dsn=SENTRY_TOKEN,
        send_default_pii=True,
    )
    logger.add(async_sink, serialize=True)
```

### BetterStack for Log Aggregation

Betterstack exposes a rest api so we can simply add a POST call during a log call

```bash
uv add httpx
```

```python
BETTERSTACK_TOKEN = os.getenv("BETTERSTACK_TOKEN")
BETTERSTACK_URL = os.getenv("BETTERSTACK_URL")

async def async_sink(message):
    async with httpx.AsyncClient() as client:
        await client.post(
            BETTERSTACK_URL,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {BETTERSTACK_TOKEN}",
            },
            json=message,
            timeout=5.0,
        )

ENV = os.getenv("ENV", "dev")
logger.remove()
if ENV == "dev":
    logger.add(sys.stdout)
elif ENV == "prod":
    logger.add(sys.stdout, serialize=True)
    sentry_sdk.init(
        dsn=SENTRY_TOKEN,
        send_default_pii=True,
    )
    logger.add(async_sink, serialize=True)

```

## Key Features

- **Environment-based Configuration**: Different setups for dev vs production
- **Structured Logging**: JSON output in production for better parsing
- **Error Tracking**: Sentry integration for monitoring exceptions
- **Log Aggregation**: BetterStack for centralized log collection
- **Async Log Shipping**: Non-blocking external service calls
