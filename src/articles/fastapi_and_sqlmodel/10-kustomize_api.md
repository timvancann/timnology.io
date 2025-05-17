---
title: Kustomize YAML
order: 10
---

After setting up the Helm chart, we'll reference our four Kubernetes YAML files as resources.

--- filename: ./deploy/kustomization.yaml ---
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
metadata:
  name: blazing
resources:
  - namespace.yaml
  - secret.yaml
  - deployment.yaml
  - service.yaml

helmCharts:
  - name: postgresql
    namespace: blazing
    releaseName: postgresql
    repo: https://charts.bitnami.com/bitnami
    version: 16.1.2
    valuesFile: values.yaml
```

Deploy everything with:

```bash
cd deploy
kustomize build --enable-helm . | kubectl apply -f -
```

Verify the setup with:

```bash
k get pod -n blazing
```

To get access to the API we need to port forward the service to our localhost with

```bash
kubectl -n blazing port-forward services/api-service 8080:80
```

Visit [localhost:8080/docs](http://localhost:8080/docs) to test the API through its interactive documentation.
