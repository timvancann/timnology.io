---
title: Kustomize and Helm
order: 9
---

If you're running locally without PostgreSQL, you'll need to deploy it. (If you already have a database, feel free to skip ahead – timestamps are in the description.)

Kustomize allows us to reference Helm charts, so instead of building our own PostgreSQL setup, we can use the well-maintained Bitnami chart. We'll only customize the PostgreSQL credentials through our values file.

--- filename: ./deploy/kustomization.yaml ---
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
metadata:
  name: blazing

helmCharts:
  - name: postgresql
    namespace: blazing
    releaseName: postgresql
    repo: https://charts.bitnami.com/bitnami
    version: 16.1.2
    valuesFile: values.yaml
```

--- filename: ./deploy/values.yaml ---
```yaml
auth:
  database: blazing
  password: admin
  username: admin
```
