# Amplication Blog Deployment Guide
The deployments (staging/production) are managed by Github Actions - However if you want to deploy manually you can follow the steps below.

## Software Requirements
2. [Google Cloud (gcloud) CLI](https://cloud.google.com/sdk/docs/install)
3. [Terraform CLI](https://www.terraform.io/downloads)
4. [Docker CLI](https://docs.docker.com/get-docker/)

## Environment Requirements
```sh
# Reference for creating and downloading Google Service accounts can be found here...
# https://cloud.google.com/iam/docs/service-accounts

# Used for gcloud and terraform API access
export GOOGLE_CREDENTIALS=<path/to/service_account/key.json> # Found in Amplication LastPass Account
```

## Build Image

```sh
# Authenticate with Google Container Registry
gcloud auth configure-docker

# Root Dir
docker build -t gcr.io/amplication/blog:v1.0.0-example .

# Push Image to Google Container Registry
docker push gcr.io/amplication/blog:v1.0.0-example
```

## Terraform
### Staging

```sh
export TF_VAR_image=gcr.io/amplication/blog:v1.0.0-example
terraform init -backend-config="prefix=amplication-blog/staging"
terraform apply --var-file=environments/staging.tfvars
```

### Production

```sh
export TF_VAR_image=gcr.io/amplication/blog:v1.0.0-example
terraform init -backend-config="prefix=amplication-blog/production"
  terraform apply --var-file=environments/production.tfvars
```