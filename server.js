const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Handle client-side routing for single-page feel (optional, serves index for all non-file routes)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Tech Soluções Server rodando em http://localhost:${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
    console.log(`PowerShell: node server.js ; npm install express`);
});
