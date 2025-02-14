# Use Python as the base image
FROM python:3.13

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip3 install -r requirements.txt


# Copy backend files
COPY . .

# Install Nginx
RUN apt-get update && apt-get install -y nginx supervisor && rm -rf /var/lib/apt/lists/*

# Copy frontend files to Nginx default directory
COPY frontend/ /usr/share/nginx/html

# Remove default Nginx configuration and add a new one
RUN rm /etc/nginx/sites-enabled/default
COPY nginx.conf /etc/nginx/sites-available/default
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/

# Copy Supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 80 5001

# Start Supervisor to run both services
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
