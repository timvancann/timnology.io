---
title: Prerequisites
order: 0
---

- [UV installation](https://docs.astral.sh/uv/getting-started/installation/) for python development. See my previous video on how to get started with that.
- Docker for containerisation. I use [Docker Desktop](https://www.docker.com/products/docker-desktop/) which is the easiest way to get docker up and running
- Optionally, if you don't have a Kubernetes cluster available, you can enable kubernetes in docker desktop. This gives you a local Kubernetes cluster which is absolutely perfect for development.
- A few cli tools
  - [kubectl](https://kubernetes.io/docs/tasks/tools/), which we will use to interact with the kubernetes cluster
  - [kustomize](https://kubectl.docs.kubernetes.io/installation/kustomize/), which we will use to template the deployment for our application
  - optionally, if you don't already have a postgres instance, [helm](https://helm.sh/docs/intro/install/), which we will use to get a postgres database up and running on our kubernetes cluster
