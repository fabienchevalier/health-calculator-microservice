resource "azurerm_container_app_environment" "this" {
  name                = join("-", [var.project_name, "dev"])
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location
}

resource "azurerm_container_app" "frontend" {
  name                         = "frontend"
  container_app_environment_id = azurerm_container_app_environment.this.id
  resource_group_name          = azurerm_resource_group.this.name
  revision_mode                = "Single"

  template {
    container {
      name   = "frontend"
      image  = "${var.gcr}/health_frontend:latest"
      cpu    = "0.5"
      memory = "1Gi"
    }
  }
}

resource "azurerm_container_app" "backend" {
  name                         = "backend"
  container_app_environment_id = azurerm_container_app_environment.this.id
  resource_group_name          = azurerm_resource_group.this.name
  revision_mode                = "Single"

  template {
    container {
      name   = "backend"
      image  = "${var.gcr}/health_api:latest"
      cpu    = "0.5"
      memory = "1Gi"
    }
  }
}

