---
title: Dependencies
order: 1
---

For this project, we'll need just a few dependencies:

```bash
uv add sqlmodel "fastapi[standard]" psycopg2-binary
```

The `standard` extra includes the FastAPI CLI and Uvicorn for our async HTTP server, while psycopg2-binary handles PostgreSQL connections through SQLModel.
