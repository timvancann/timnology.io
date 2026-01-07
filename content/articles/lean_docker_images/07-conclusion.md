---
title: Conclusion
order: 7
---

Multi-stage Docker builds transform a bloated 2 GB image into specialized, purpose-built images:

| Image | Size | Purpose |
|-------|------|---------|
| Dev | ~385 MB | Local development with debug tools and live reload |
| Prod | ~198 MB | Minimal, secure production deployment |

## Summary

**Use Alpine instead of Debian** — The `python:3.13-alpine` base image is a fraction of the size of the default Debian-based image, without sacrificing functionality for most Python applications.

**Separate concerns with multi-stage builds** — Each stage has a single responsibility:
- Base stage: shared configuration
- Builder stage: dependency installation
- Dev stage: development environment
- Prod stage: production deployment

**Install only what's needed** — The builder uses `--no-dev` to exclude development dependencies from production. Debug tools are only installed in the dev stage.

**Compile bytecode at build time** — Setting `UV_COMPILE_BYTECODE=1` front-loads compilation, reducing container startup latency.

**Run as non-root in production** — Creating a dedicated user limits the impact of potential security vulnerabilities.

**Mount source in dev, copy in prod** — Development benefits from live reload via volume mounts, while production gets an immutable, self-contained image.

**Leverage Docker's build cache** — Unchanged stages are cached, making incremental builds fast. Building prod after dev is nearly instantaneous.

These practices reduce image size by 10x, improve security posture, and create a smoother development workflow.
