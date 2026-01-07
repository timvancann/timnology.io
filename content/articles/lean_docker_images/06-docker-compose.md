---
title: Docker Compose Setup
order: 6
---

Docker Compose simplifies running the multi-stage images during development. The `target` option in the build configuration specifies which stage to build.

```yaml
services:
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=timnology_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  dev:
    build:
      context: .
      target: dev
    volumes:
      - ./src:/app/src  # Live reload support
    ports:
      - "8000:8000"
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=timnology_db
      - POSTGRES_HOST=db
    depends_on:
      - db

  prod:
    build:
      context: .
      target: prod
    ports:
      - "8000:8000"
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=timnology_db
      - POSTGRES_HOST=db
    depends_on:
      - db

volumes:
  postgres_data:
```

## Configuration Details

**Target stages** — The `target: dev` and `target: prod` options tell Docker Compose which Dockerfile stage to build for each service.

**Volume mount for live reload** — The dev service mounts `./src:/app/src`, mapping the local source directory into the container. Combined with FastAPI's dev mode, this enables automatic reloading when files change.

**Service dependencies** — Both application services declare `depends_on: db`, ensuring the database container starts first.

## Running the Development Environment

```bash
docker compose up dev
```

This starts both the database and the dev service. The API becomes available at `http://localhost:8000`, with OpenAPI documentation at `http://localhost:8000/docs`.

## Live Reload

With the source directory mounted, any changes to files in `src/` are immediately visible to the container. FastAPI detects the file change and restarts the server automatically—no container rebuild required.
