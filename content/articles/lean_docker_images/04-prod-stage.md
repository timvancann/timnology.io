---
title: Stage 4 - Production
order: 4
---

The production stage creates the final, minimal image that will be deployed. It contains only what's necessary to run the application.

```dockerfile
# --- Stage 4: Production (The Tiny Image) ---
FROM python_base AS prod

RUN addgroup -S appuser && adduser -S appuser -G appuser -h /app
USER appuser

WORKDIR /app

COPY --from=builder /app/.venv /app/.venv
COPY src ./src

ENV PATH="/app/.venv/bin:$PATH"
ENV PYTHONPATH="/app/src"

CMD ["uvicorn", "blazing.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Security: Non-Root User

The first two lines create a dedicated user and switch to it:

```dockerfile
RUN addgroup -S appuser && adduser -S appuser -G appuser -h /app
USER appuser
```

Running containers as root is a security risk. If an attacker exploits a vulnerability in the application, they gain root access to the container—and potentially the host system if other misconfigurations exist. A non-root user limits the blast radius of any compromise.

## Minimal Contents

Compared to the dev stage, the production image:

- **Does not include UV** — Dependencies are already installed; there's no need for the package manager
- **Does not include debug tools** — No curl, git, vim, or other utilities
- **Does not include dev dependencies** — Only production packages from the builder stage
- **Includes the source code** — Unlike dev (which mounts code), production bakes the code into the image for immutability

## Production Server

The `CMD` uses `uvicorn` directly rather than `fastapi dev`. This runs the ASGI server without development features like auto-reload, which would be unnecessary overhead in production.
