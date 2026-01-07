---
title: Conclusion
order: 7
---

Dagster's core concepts build on each other to create flexible data pipelines:

| Concept | Purpose |
|---------|---------|
| Asset | A materialized piece of data (table, file, etc.) |
| Resource | A connection to an external system |
| IO Manager | Abstraction for reading/writing data |
| Job | A selection of assets to run together |
| Schedule | Time-based trigger for jobs |
| Sensor | Event-based trigger for jobs |
| Partition | Independent subset of data |

## Composition

These concepts compose to address common data engineering requirements:

**Storage agnostic** — IO managers decouple business logic from persistence. Swap DuckDB for Snowflake by changing one line.

**Observable** — The Dagster UI shows asset lineage, partition status, and run history.

**Backfillable** — Partitioned assets can be reprocessed selectively. Failed partitions can be retried independently.

**Testable** — Assets are regular Python functions. Resources and IO managers can be mocked or replaced with in-memory implementations.

## Scaling

This architecture scales from exploratory scripts to production data platforms. The same asset definitions work in local development with DuckDB and in production with cloud data warehouses, with only configuration changes.
