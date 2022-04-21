
provider "google" {
  project     = var.project_id
  region      = var.region
}

# Cloud Run
resource "google_cloud_run_service" "service" {
  name = "amplication-blog-${var.environment}"
  location = var.region

  template {
    spec {
      containers {
        image = var.image
        env {
          name  = "NEXT_PUBLIC_API_URL"
          value = var.external_blog_server_url
        }
        container_concurrency  = var.container_concurrency
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = var.cloud_run_min_replica
        "autoscaling.knative.dev/maxScale" = var.cloud_run_max_replica
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "run_all_users" {
  service  = google_cloud_run_service.service.name
  location = google_cloud_run_service.service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}