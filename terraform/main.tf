
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
  autogenerate_revision_name = true
}

resource "google_compute_region_network_endpoint_group" "cloudrun_neg" {
  name                  = "blog-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.region
  cloud_run {
    service = google_cloud_run_service.service.name
  }
}

resource "google_cloud_run_service_iam_member" "run_all_users" {
  service  = google_cloud_run_service.service.name
  location = google_cloud_run_service.service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

module "lb-http" {
  source            = "GoogleCloudPlatform/lb-http/google//modules/serverless_negs"
  version           = "~> 6.2.0"

  project           = var.project_id
  name              = var.lb_name

  https_redirect                  = false
  backends = {
    default = {
      description                     = null
      groups = [
        {
          group = google_compute_region_network_endpoint_group.cloudrun_neg.id
        }
      ]
      enable_cdn                      = false
      custom_request_headers          = null
      custom_response_headers         = null
      security_policy                 = null

      iap_config = {
        enable               = false
        oauth2_client_id     = ""
        oauth2_client_secret = ""
      }
      log_config = {
        enable = false
        sample_rate = null
      }
      create_url_map = false
      url_map = [google_compute_url_map.urlmap.name]
    }
  }
}

resource "google_compute_url_map" "urlmap" {
  name        = "urlmap-${var.lb_name}"
  default_url_redirect {
    host_redirect = "*"
    strip_query = false
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
  }
  host_rule {
    hosts        = ["*"]
    path_matcher = "allpaths"
  }
  path_matcher {
    name = "allpaths"
    default_url_redirect {
      host_redirect = "*"
      strip_query = false
    }
    path_rule {
      paths   = ["/"]
      url_redirect {
        host_redirect = "*"
        strip_query = false
      }
    }
    path_rule {
      paths   = ["/jobs"]
      url_redirect {
        host_redirect = "amplication.breezy.hr"
        https_redirect = true
        redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
        strip_query = true
      }
    }
    path_rule {
      paths   = ["/discord"]
      url_redirect {
        host_redirect = "discord.gg/KSJCZ24vj2"
        https_redirect = true
        redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
        strip_query = true
      }
    }
  }
}