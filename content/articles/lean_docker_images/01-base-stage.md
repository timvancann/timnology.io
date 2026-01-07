---
title: Stage 1 - Base Setup
order: 1
---

Multi-stage builds allow a Dockerfile to define multiple intermediate images, each with a specific purpose. The final image only includes what's needed, leaving behind build tools and intermediate artifacts.

The first stage establishes a minimal base that other stages will extend.

```dockerfile
# --- Stage 1: Base Setup (Alpine) ---
FROM python:3.13-alpine AS python_base

# Python optimizations
ENV PYTHONUNBUFFERED=1
ENV UV_COMPILE_BYTECODE=1

WORKDIR /app
```

## Why Alpine?

The default `python:3.13` image is based on Debian and includes a full Linux distribution. Alpine Linux is a security-oriented, lightweight distribution that results in significantly smaller images.

## Environment Variables

Two optimizations are configured here:

- **`PYTHONUNBUFFERED=1`** — Ensures Python output is sent directly to the terminal without buffering, which is important for logging in containerized environments.

- **`UV_COMPILE_BYTECODE=1`** — Instructs UV to compile Python bytecode (`.pyc` files) during installation. This adds a small amount of build time but reduces container startup time since Python doesn't need to compile modules on first import.

## Naming the Stage

The `AS python_base` syntax gives this stage a name. Other stages can reference it with `FROM python_base`, creating a hierarchy where shared configuration is defined once and reused.
