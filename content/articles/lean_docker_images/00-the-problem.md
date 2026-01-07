---
title: The Problem
order: 0
---

A typical Python Docker image built the "quick and easy" way often ends up at nearly **2 GB**. For a simple API with just a few dependencies, that's excessive. Large images mean slower builds, slower deployments, more storage costs, and a larger attack surface.

With the right approach, the same application can be packaged into an image under **200 MB**—10x smaller, more secure, and faster to build.

This guide covers three key optimizations:

- Replacing Debian with **Alpine** as the base image
- Using **UV** for fast, reproducible dependency management
- Leveraging **multi-stage builds** to separate concerns

## The Naive Approach

Here's a typical single-stage Dockerfile that results in a bloated image:

```dockerfile
FROM python:3.13

# Add common debug tools for local troubleshooting
RUN apt-get update
RUN apt-get install -y \
    curl \
    git \
    vim \
    wget \
    netcat-openbsd \
    procps

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

COPY src/ /app
WORKDIR /app

ENV PATH="/app/.venv/bin:$PATH"
ENV PYTHONPATH="/app/src"
CMD ["uvicorn", "blazing.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

This extends from `python:3.13` (which includes the full Debian distribution), installs debug tools, sets up UV, creates a virtual environment, and runs the app. The project only has three dependencies—FastAPI, psycopg2, and SQLModel—yet the final image weighs in at almost **2 GB**.

The following sections break down a multi-stage approach that dramatically reduces this.
