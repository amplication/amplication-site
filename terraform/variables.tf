variable "environment" {
  type  = string
}

variable "project_id" {
  type  = string
}

variable "region" {
  type  = string
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