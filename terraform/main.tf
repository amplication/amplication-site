
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
      container_concurrency  = var.container_concurrency
      containers {
        image = var.image
        env {
          name  = "NEXT_PUBLIC_API_URL"
          value = var.external_blog_server_url
        }
        resources {
          limits   = {
            cpu    = var.cpu
            memory = var.memory
          }
          requests = {
            cpu    = var.cpu
            memory = var.memory
          }
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale"  = var.cloud_run_min_replica
        "autoscaling.knative.dev/maxScale"  = var.cloud_run_max_replica
        "run.googleapis.com/cpu-throttling" =  var.cpu_allocation == "request" ? "true" : "false"
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