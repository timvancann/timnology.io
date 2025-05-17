---
title: Building a Docker image
order: 7
---

Getting our app into Kubernetes requires a Docker image. Thanks to uv and FastAPI, this process is straightforward.

```docker filename="./Dockerfile"
FROM python:3.12-alpine
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

WORKDIR /app

COPY pyproject.toml /app
COPY uv.lock /app
COPY README.md /app
COPY src/ /app/

RUN uv sync --no-dev --compile-bytecode

CMD ["uv", "run", "--no-dev", "fastapi", "run", "blazing/main.py", "--port", "80"]
```

Building is as simple as

``` bash
docker build -t api .
```
