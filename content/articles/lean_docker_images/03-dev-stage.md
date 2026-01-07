---
title: Stage 3 - Dev Environment
order: 3
---

The development stage is designed for local development. It includes debug tools, dev dependencies, and is configured for live code reloading.

```dockerfile
# --- Stage 3: Dev Environment ---
FROM python_base AS dev

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Add common debug tools for local troubleshooting
RUN apk add --no-cache \
    curl \
    git \
    vim \
    wget \
    bind-tools \
    netcat-openbsd \
    procps

WORKDIR /app

COPY --from=builder /app/.venv /app/.venv
ENV PATH="/app/.venv/bin:$PATH"
ENV PYTHONPATH="/app/src"

COPY pyproject.toml uv.lock ./

RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-install-project

CMD ["fastapi", "dev", "src/blazing/main.py", "--host", "0.0.0.0", "--port", "8000"]
```

## Breaking It Down

**Debug tools** — Utilities like `curl`, `git`, and `vim` are installed for troubleshooting inside the running container. These would never be included in a production image.

**Copying the virtual environment from builder** — The line `COPY --from=builder /app/.venv /app/.venv` pulls the pre-built virtual environment from the builder stage. This already contains all production dependencies.

**Installing dev dependencies** — Running `uv sync` again (without `--no-dev`) adds development dependencies on top of the existing virtual environment. Since production deps are already installed, this only adds what's missing.

**FastAPI dev mode** — The `fastapi dev` command starts the application with auto-reload enabled. When source files change, the server automatically restarts.

## No Source Code

Notice that the source code is not copied into this image. Instead, the source directory will be mounted as a volume at runtime. This enables live reloading—changes made on the host are immediately reflected in the container without rebuilding.
