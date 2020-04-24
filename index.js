const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
