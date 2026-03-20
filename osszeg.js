const express = require('express');
const app = express();

// Dinamikus útvonal GET paraméterrel
app.get('/szam', (req, res) => {
  // req.query kulcsszóval lekérhetjük a ?valami=érték paramétert
  const a = parseInt(req.query.a) || 0;  // ha nincs megadva, 0 lesz
  const b = parseInt(req.query.b) || 0;
  const osszeg = a + b;

  res.json({ a, b, osszeg }); // JSON válasz
});

// Szerver indítása
app.listen(3000, () => {
  console.log('Szerver fut: http://localhost:3000');
});