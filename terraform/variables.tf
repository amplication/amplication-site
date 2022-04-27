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
      custom_request_headers = null
      custom_response_headers = null
      description = null
      enable_cdn = false
      groups = [ {
        balancing_mode = null
        capacity_scaler = null
        description = null
        group = ""
        max_connections = null
        max_connections_per_endpoint = null
        max_connections_per_instance = null
        max_rate = null
        max_rate_per_endpoint = null
        max_rate_per_instance = null
        max_utilization = null
      } ]
      iap_config = {
        enable = false
        oauth2_client_id = ""
        oauth2_client_secret = ""
      }
      log_config = {
        enable = false
        sample_rate = null
      }
      port = 80
      port_name = "Http"
      protocol = "HTTP"
      security_policy = null
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