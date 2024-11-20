const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  // Sample data
  const data = {
    message: 'Hello, World!',
    timestamp: new Date().toISOString()
  };

  // Sending a JSON response
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
