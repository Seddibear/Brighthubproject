const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Log where Express is looking for static files
const staticFolderPath = path.join(__dirname, 'dist/brighthub-frontend/browser');
console.log("Serving static files from:", staticFolderPath);

// Serve static files
app.use(express.static(staticFolderPath));

// Simple route to ensure static files work
app.get('/', (req, res) => {
  res.sendFile(path.join(staticFolderPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
