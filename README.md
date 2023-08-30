### BIDIP

### Prerequisites

Before getting started, make sure you have the following prerequisites set up:

1. **kubectl**: Install `kubectl`, the command-line tool for interacting with Kubernetes cluster.

2. **Helm**: Install Helm, a package manager for Kubernetes, to manage the deployment of Grafana Prometheus, ArgoCD, and Metrics server.

3. **Terraform**: Install Terraform for provisioning and managing infrastructure.
4. **Slack Webhook** Slack Webhook: Obtain a URL to send automated CI notifications to Slack.

### Repository Structure

**bidip** 
https://github.com/red512/bidip

```
.
├── README.md
├── argocd
├── be-flask
├── fe-react
└── terraform

```

**bidip-gitops**
https://github.com/red512/bidip-gitops

```
.
├── README.md
└── environments
    └── staging
        ├── apps
        ├── backend
        └── frontend
```

### k8s cluster

> Here I used EKS cluster that was created in Terraform but you can use any cloud provider or work with Minikube.

### Deployments

> The deployments for the backend and frontend were done with ArgoCD.

### Github actions

> Github action was used to build CI including tests, build, and publish steps

### Monitoring

> The cluster will be monitored in the Prometheus

### Notes about installation:

> The installation of Prometheus stack, metrics server, and argocd are made from terraform code using helm provider.

### CI Details

### CI Tests Workflows

This GitHub Action automates testing for your project, whether it's frontend or backend, depending on the context. It responds to various events:

- `Push`: Triggers when changes are pushed to the 'main' branch within the respective directories ('be-flask/' for backend and 'fe-react/' for frontend).
- `Workflow Dispatch`: Allows manual triggering of the workflow.
- `Pull Request`: Triggers on pull requests to the respective branches.
  The workflow includes steps for setting up the environment, installing dependencies, running tests, and notifying the team of success or failure via Slack messages.

For Slack notifications, set up the Slack webhook URL as a secret in your repository.

### Publish Workflows

These GitHub Actions manage the publication of both frontend and backend components of your project. Depending on the context, the workflows respond to various events:

- `Push`: Triggers when changes are pushed to the 'main' branch within the respective directories ('be-flask/' for backend and 'fe-react/' for frontend).
- `Workflow Dispatch`: Allows manual triggering of the workflow.
- `Tags`: Triggers on tag creation with a version pattern ('v\*').
- `Pull Request`: Triggers on pull requests to the respective branches.
  The workflow includes steps for checking out the code, generating Docker metadata, logging in to DockerHub, building Docker images, and pushing them to the repository.

For Docker image publishing, ensure you have DockerHub credentials set up as secrets in your repository.
For Slack notifications, set up the Slack webhook URL as a secret in your repository.
