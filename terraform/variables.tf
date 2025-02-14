variable "project_name" {
  description = "The name of the project"
  type        = string
  default     = "health-calculator-microservice"
}

variable "location" {
  description = "The location of the project"
  type        = string
  default     = "France Central"
}

variable "gcr" {
  description = "The name of the GCR"
  type        = string
  default     = "gcr.io/fabienchevalier"
}

