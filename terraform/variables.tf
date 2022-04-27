variable "environment" {
  type  = string
}

variable "project_id" {
  type  = string
}

variable "region" {
  type  = string
}


variable "lb_name" {
  description = "Name for the load balancer forwarding rule and prefix for supporting resources."
  type        = string
  default     = "lb-test"
}

variable "image" {
  type  = string
}

variable "cloud_run_min_replica" {
  type  = number
}

variable "cloud_run_max_replica" {
  type  = number
}

variable "external_blog_server_url" {
  type  = string
}

variable "container_concurrency" {
  type    = number
  default = 0
}

variable "cpu" {
  type  = string
  default = "1"
}

variable "memory" {
  type  = string
  default = "512Mi"
}

variable "cpu_allocation" {
  type  = string
  default = "request"
}

variable "backends" {
  description = "Map backend indices to list of backend maps."
  type = map(object({
    protocol  = string
    port      = number
    port_name = string

    description             = string
    enable_cdn              = bool
    security_policy         = string
    custom_request_headers  = list(string)
    custom_response_headers = list(string)

    timeout_sec                     = number
    connection_draining_timeout_sec = number
    session_affinity                = string
    affinity_cookie_ttl_sec         = number

    health_check = object({
      check_interval_sec  = number
      timeout_sec         = number
      healthy_threshold   = number
      unhealthy_threshold = number
      request_path        = string
      port                = number
      host                = string
      logging             = bool
    })

    log_config = object({
      enable      = bool
      sample_rate = number
    })

    groups = list(object({
      group = string

      balancing_mode               = string
      capacity_scaler              = number
      description                  = string
      max_connections              = number
      max_connections_per_instance = number
      max_connections_per_endpoint = number
      max_rate                     = number
      max_rate_per_instance        = number
      max_rate_per_endpoint        = number
      max_utilization              = number
    }))
    iap_config = object({
      enable               = bool
      oauth2_client_id     = string
      oauth2_client_secret = string
    })
  }))
  default = {
    "key" = {
      affinity_cookie_ttl_sec = 1
      connection_draining_timeout_sec = 1
      custom_request_headers = null
      custom_response_headers = null
      description = null
      enable_cdn = false
      groups = [ {
        balancing_mode = null
        capacity_scaler = 1
        description = null
        group = "blog-neg"
        max_connections = 1
        max_connections_per_endpoint = 1
        max_connections_per_instance = 1
        max_rate = 1
        max_rate_per_endpoint = 1
        max_rate_per_instance = 1
        max_utilization = 1
      } ]
      health_check = {
        check_interval_sec = 1
        healthy_threshold = 1
        host = "*"
        logging = false
        port = 1
        request_path = "/"
        timeout_sec = 1
        unhealthy_threshold = 1
      }
      iap_config = {
        enable = false
        oauth2_client_id = null
        oauth2_client_secret = null
      }
      log_config = {
        enable = false
        sample_rate = 1
      }
      port = 80
      port_name = "Http"
      protocol = "HTTP"
      security_policy = null
      session_affinity = null
      timeout_sec = 1
    }
  }
}
variable "security_policy" {
  description = "The resource URL for the security policy to associate with the backend service"
  type        = string
  default     = null
}
variable "cdn" {
  description = "Set to `true` to enable cdn on backend."
  type        = bool
  default     = false
}