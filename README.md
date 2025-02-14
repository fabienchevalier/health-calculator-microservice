# Health Microservice

A simple Python-based API with a basic frontend that calculates BMI (Body Mass Index) and BMR (Basal Metabolic Rate). This application is built using Flask and provides a web interface for users to interact with.

> [!NOTE]  
> This is a student project and should be considered as such

![screenshot](./screenshot.png)

## Features
- Calculate BMI and BMR using a simple web interface.
- Flask-based backend API.
- Lightweight frontend served via nginx.
- Containerized with Docker for easy deployment.
- CI/CD pipeline set up for automatic deployment to Azure Web Apps.

## Prerequisites
Before running the application, ensure you have the following installed:
- Python 3
- Docker (if using containerization)
- Azure account (for deployment)

## Setup and Running the Application Locally (Docker)

The `Dockerfile` provided consist of a multi-stage build that builds the frontend and backend separately. The final image is a lightweight image that serves the frontend using nginx and the backend using [supervisord](https://supervisord.org/).

### 1. Clone the Repository
```sh
git clone https://github.com/fabienchevalier/health-calculator-microservice
cd health-calculator-microservice
```

### 2. Build the Docker Image
```sh
make docker-build
```

### 3. Run the Docker Container
```sh
make docker-run
```
The application will be available on `http://localhost:80` (mapped to port 8080 inside the container).

## Deployment
The application is configured for continuous deployment on **Azure Web Apps**. The CI/CD pipeline automatically triggers deployment whenever changes are pushed to the repository.

### Deployment Steps
1. Push code to the repository.
2. The CI/CD pipeline automatically builds and deploys the application to Azure.
3. The application is accessible via the Azure Web App URL.

## Contributing

You can install a local development environment by following the steps below:

### 1. Clone the Repository
```sh
git clone https://github.com/fabienchevalier/health-calculator-microservice
```

### 2. Set Up Virtual Environment
```sh
make venv
```
This will create a virtual environment and install all necessary dependencies from `requirements.txt`.

### 3. Running the API
```sh
make run
```

### 4. Running the Frontend
To serve the frontend on `http://localhost:8000`, run:
```sh
make frontend
```

### 5. Cleanup
To remove the virtual environment and other generated files, run:
```sh
make clean
# If you wish to cleanup docker images and containers as well
make docker-clean
```
> [!WARNING]  
> This will literally clear all images and containers on your system. Use with caution.


## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.

