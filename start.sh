#!/bin/bash

# Start the Python app (Flask or Django, whatever you are using)
pm2 start python --name "python-server" -- "python" "run.py"

# Start the Node.js app
pm2 start server.js --name "node-server" -- "node" "server.js"

# Keep the container running
pm2 logs
