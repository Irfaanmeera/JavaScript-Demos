const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Your logic here

  // Change the HTTP status code
  res.status(404).json({ message: 'Example response' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});