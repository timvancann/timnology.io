---
title: Kubernetes
order: 8
---

We'll use Kustomize for our Kubernetes setup – a powerful tool for declarative and modular configuration. While we'll only scratch the surface of its capabilities, it's perfect for our needs.

Our application needs four key components:

--- filename: ./deploy/namespace.yaml ---
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: blazing
```

--- filename: ./deploy/secret.yaml ---
```yaml
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

--- filename: ./deploy/deployment.yaml ---
```yaml
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

--- filename: ./deploy/service.yaml ---
```yaml
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
