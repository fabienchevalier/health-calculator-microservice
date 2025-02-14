# Stage 1: Build the Python environment
FROM python:3.13 AS python-build

# Set working directory for the Python app
WORKDIR /app

# Copy Python requirements and install dependencies
COPY requirements.txt .

# Copy the Python app files
COPY . .

RUN make venv

# Stage 2: Build the Node.js environment
FROM node:22.14.0 AS node-build

# Set working directory for the Node.js frontend
WORKDIR /app

# Copy the Node.js package files and install dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install --production

# Copy the frontend files
COPY ./frontend .

# Stage 3: Final image
FROM debian:bullseye-slim

# Install Python and Node.js in the final image
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    nodejs \
    npm \
    && apt-get clean

# Install PM2 globally
RUN npm install -g pm2

# Copy from Python build stage
COPY --from=python-build /app /app

# Copy from Node.js build stage
COPY --from=node-build /app /app

# Copy PM2 config file
COPY ecosystem.config.js /app/ecosystem.config.js

# Set the working directory to /app
WORKDIR /app

# Expose the necessary ports
EXPOSE 5000 80

# Start both Python and Node.js processes using pm2 and the ecosystem.config.js file
CMD ["pm2-runtime", "start", "start.sh"]
