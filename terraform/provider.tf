terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.18.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "terraform-backends"
    storage_account_name = "terraformstorage15645"
    container_name       = "tfstate-container"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  subscription_id = "8f62edd5-eb6b-40a6-9f31-61ef0364af5e"
  features {}
}

resource "azurerm_resource_group" "this" {
  name     = var.project_name
  location = var.location
}
