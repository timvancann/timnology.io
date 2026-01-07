---
title: Building the Stages
order: 5
---

With the multi-stage Dockerfile complete, building specific stages is done using the `--target` flag.

## Building the Dev Image

```bash
docker build -f Dockerfile --target dev -t lean-dev .
```

This builds all stages up to and including `dev`. The resulting image is approximately **385 MB**—significantly smaller than the 2 GB naive approach, despite including debug tools and dev dependencies.

## Building the Production Image

```bash
docker build -f Dockerfile --target prod -t lean-prod .
```

If the dev image was built first, Docker reuses cached layers from `python_base` and `builder`. The production build completes almost instantly, only needing to:

1. Create the non-root user
2. Copy the virtual environment from the builder
3. Copy the source code

The production image weighs in at approximately **198 MB**.

## Stage Hierarchy

| Stage | Purpose | Included In Final Image |
|-------|---------|-------------------------|
| `python_base` | Alpine base, Python optimizations | Configuration only |
| `builder` | Create virtual environment | `.venv` copied to dev/prod |
| `dev` | Local development with debug tools | ~385 MB |
| `prod` | Minimal production image | ~198 MB |

## Build Caching

Docker's layer caching makes subsequent builds fast. As long as `pyproject.toml` and `uv.lock` haven't changed, the builder stage is cached. Only changes to source code trigger a rebuild of the final `COPY` layer—typically completing in seconds.
