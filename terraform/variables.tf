variable "environment" {
  type = string
}

variable "project_id" {
  type = string
}

variable "region" {
  type = string
}


variable "lb_name" {
  description = "Name for the load balancer forwarding rule and prefix for supporting resources."
  type        = string
  default     = "lb-test"
}

variable "image" {
  type = string
}

variable "cloud_run_min_replica" {
  type = number
}

variable "cloud_run_max_replica" {
  type = number
}

variable "external_blog_server_url" {
  type = string
}

variable "container_concurrency" {
  type    = number
  default = 0
}

variable "cpu" {
  type    = string
  default = "1"
}

variable "memory" {
  type    = string
  default = "512Mi"
}

variable "cpu_allocation" {
  type    = string
  default = "request"
}

variable "domain" {
  description = "Domain name to run the load balancer on. Used if `ssl` is `true`."
  type        = string
}

variable "hubspot_api_key" {
  type    = string
  default = ""
}

variable "neg_name" {
  type = string
}