---
title: Introduction
order: 0
---

The data orchestration space includes tools like Airflow, Luigi, Prefect, Argo, and Mage. Dagster distinguishes itself with an **asset-centric** approach to data pipelines.

This guide covers Dagster's core concepts: **assets**, **resources**, **IO managers**, **jobs**, **schedules**, and **partitions**. Together, these building blocks create composable and maintainable data pipelines.

## The Asset-Centric Approach

Traditional orchestrators focus on tasks and their dependencies. Dagster inverts this: the focus is on the data artifacts (assets) you want to produce, and the tasks are derived from those definitions.

This approach provides several advantages:

- **Observability** — The UI shows what data exists and when it was last updated
- **Debugging** — Assets are independently testable and re-runnable
- **Composability** — Storage backends can be swapped without changing business logic
- **Production-readiness** — Built-in support for partitioning, backfills, and event-driven triggers
