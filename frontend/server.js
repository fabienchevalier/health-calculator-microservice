const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors());

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API to expose environment variables dynamically
app.get('/api/config', (req, res) => {
    res.json({
        API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:5001/api',
        HOSTNAME: os.hostname(),
    });
});

// Catch-all route to serve index.html (for SPA apps)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Frontend server running on http://localhost:${PORT}`);
});
