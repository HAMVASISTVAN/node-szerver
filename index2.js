const express = require('express');
const app = express();

// GET végpont JSON-nal
app.get('/json', (req, res) => {
  const adat = { A: 1, B: 2, C: 3 };
  res.json(adat); // JSON válasz
});

// szerver indítás
app.listen(3000, () => {
  console.log('Szerver fut: http://localhost:3000');
});