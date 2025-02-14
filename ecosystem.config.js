module.exports = {
    apps: [
        {
            name: "python-server",
            script: "python",
            args: "run.py",
            interpreter: "python",  // Ensure it uses Python interpreter
            watch: true,            // Optional: watch for changes in the Python app
            instances: 1,           // Run a single instance for Python
            autorestart: true,
            max_memory_restart: "1G"
        },
        {
            name: "node-server",
            script: "server.js",
            interpreter: "node",   // Ensure it uses Node.js interpreter
            watch: true,            // Optional: watch for changes in the Node.js app
            instances: 1,           // Run a single instance for Node.js
            autorestart: true,
            max_memory_restart: "1G"
        }
    ]
};
