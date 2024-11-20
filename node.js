const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
  console.log('This middleware runs for every request.');
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



