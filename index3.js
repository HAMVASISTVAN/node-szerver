const express = require('express');
const app = express();

// Gyökér útvonal
app.get('/', (req, res) => {
  res.send('Ez a gyökérútvonal: /');
});

// JSON adat visszaadása
app.get('/json', (req, res) => {
  const adat = { A: 1, B: 2, C: 3 };
  res.json(adat);
});

// Egyszerű üzenet a /hello útvonalon
app.get('/hello', (req, res) => {
  res.send('Hello, ez a /hello útvonal!');
});

// Dinamikus útvonal paraméterrel
app.get('/nev/:nev', (req, res) => {
  const nev = req.params.nev; // pl. /nev/Istvan
  res.send(`Szia ${nev}, ez a dinamikus útvonal!`);
});

// Szerver indítása
app.listen(3000, '0.0.0.0', () => {
  console.log('Szerver fut: http://localhost:3000');
});