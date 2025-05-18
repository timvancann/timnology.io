---
title: Kubernetes
order: 8
---

We'll use Kustomize for our Kubernetes setup – a powerful tool for declarative and modular configuration. While we'll only scratch the surface of its capabilities, it's perfect for our needs.

Our application needs four key components:

```yaml title="./deploy/namespace.yaml"
apiVersion: v1
kind: Namespace
metadata:
  name: blazing
```

```yaml title="./deploy/secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: api-secret
  namespace: blazing
stringData:
  POSTGRES_USER: "admin"
  POSTGRES_PASSWORD: "admin"
  POSTGRES_HOST: "postgresql"
  POSTGRES_DB: "blazing"
```

```yaml title="./deploy/deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-deployment
  namespace: blazing
  labels:
    app: api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: api:latest
          imagePullPolicy: Never
          ports:
            - containerPort: 80
          envFrom:
            - secretRef:
                name: api-secret
```

```yaml title="./deploy/service.yaml"
apiVersion: v1
kind: Service
metadata:
  name: api-service
  namespace: blazing
spec:
  selector:
    app: api
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```
