// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Log where Express is looking for static files
// const staticFolderPath = path.join(__dirname, 'dist/brighthub-frontend/browser');
// console.log("Serving static files from:", staticFolderPath);

// // Serve static files
// app.use(express.static(staticFolderPath));

// // Simple route to ensure static files work
// app.get('/', (req, res) => {
//   res.sendFile(path.join(staticFolderPath, 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const path = require('path');
const express = require('express');
const app = express();

// Serve static files from Angular
app.use(express.static(path.join(__dirname, 'dist/brighthub-frontend/browser')));

// Catch-all handler to serve index.html for all routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/brighthub-frontend/browser/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
