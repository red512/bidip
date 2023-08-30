### BIDIP

### Prerequisites

Before getting started, make sure you have the following prerequisites set up:

1. **kubectl**: Install `kubectl`, the command-line tool for interacting with Kubernetes cluster.

2. **Helm**: Install Helm, a package manager for Kubernetes, to manage the deployment of Loki, Grafana, ArgoCD, and other components.

3. **Terraform**: Install Terraform, an infrastructure as code tool, for provisioning and managing infrastructure.
4. **Slack Webhook** Slack Webhook: Obtain a URL to send automated CI notifications to Slack.

### Repository Structure

bidip 
https://github.com/red512/bidip

```
.
├── README.md
├── argocd
├── be-flask
├── fe-react
└── terraform

```

bidip-gitops
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

Here I used EKS cluster that was created in Terraform but you can use any cloud provider or work with Minikube.

### Web App short description

The Flask code defines a web app that retrieves a user's IP address and responds with a JSON message containing the IP. The React code fetches and displays this IP from the Flask app.

### Deployments

The deployments for the backend and frontend were done with ArgoCD.

### Github actions

Github action was used to build CI including tests, build, and publish steps

### Monitoring

The cluster will be monitored in the Prometheus

### Notes about installation:

The installation of Prometheus stack, metrics server, and argocd are made from terraform code using helm provider.

### CI Details

### CI Tests Workflows

This GitHub Actions automates tests, whether it's frontend or backend, depending on the context. It responds to various events:

`Push`: Triggers when changes are pushed to the 'main' branch within the respective directories ('be-flask/' for backend and 'fe-react/' for frontend).
`Workflow Dispatch`: Allows manual triggering of the workflow.
`Pull Request`: Triggers on pull requests to the respective branches.
The workflow includes steps for setting up the environment, installing dependencies, running tests, and notifying the team of success or failure via Slack messages.

For Slack notifications, set up the Slack webhook URL as a secret in your repository.

### CI Publish Workflows

These GitHub Actions manage the publicationto docker registry of both frontend and backend images. Depending on the context, the workflows respond to various events:

`Push`: Triggers when changes are pushed to the 'main' branch within the respective directories ('be-flask/' for backend and 'fe-react/' for frontend).
`Workflow Dispatch`: Allows manual triggering of the workflow.
`Tags`: Triggers on tag creation with a version pattern ('v\*').
`Pull Request`: Triggers on pull requests to the respective branches.
The workflow includes steps for checking out the code, generating Docker metadata, logging in to DockerHub, building Docker images, and pushing them to the repository.

More info about metada-action that used here you can find here https://github.com/docker/metadata-action#basic

For Docker image publishing, ensure you have DockerHub credentials set up as secrets in your repository.
For Slack notifications, set up the Slack webhook URL as a secret in your repository.
