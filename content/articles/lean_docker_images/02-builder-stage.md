---
title: Stage 2 - Builder
order: 2
---

The builder stage is responsible for creating the virtual environment with production dependencies. This stage won't be included in the final image—only the artifacts it produces (the `.venv` directory) will be copied to later stages.

```dockerfile
# --- Stage 2: Builder ---
FROM python_base AS builder

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/

COPY pyproject.toml uv.lock ./

RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-install-project --no-dev
```

## Key Elements

**Extending from `python_base`** — The builder inherits the Alpine base and environment variables defined in stage 1.

**Copying the UV binary** — UV is pulled directly from its official container image. This avoids installing it via pip or curl, keeping the image clean.

**The `--no-dev` flag** — This is critical. It tells UV to only install production dependencies, excluding development tools like linters, formatters, and test frameworks. The dev stage will add these separately.

**Cache mount** — The `--mount=type=cache` directive creates a persistent cache for UV's downloaded packages. On subsequent builds, UV can reuse cached wheels instead of re-downloading them, significantly speeding up builds.

## Why a Separate Builder?

The builder stage exists solely to create the virtual environment. By isolating this step:

1. The UV binary and build cache don't end up in the final image
2. Both dev and prod stages can copy the same pre-built virtual environment
3. Rebuilds are faster because Docker can cache the builder stage when dependencies haven't changed
