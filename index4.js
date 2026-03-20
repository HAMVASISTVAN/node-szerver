const express = require('express');
const app = express();

// gyökér útvonal
app.get('/', (req, res) => {
  res.send('Ez a kezdőoldal!');
});

// /hello végpont paraméterrel
app.get('/hello', (req, res) => {
  const name = req.query.name || "Vendég";
  res.send(`Szia, ${name}!`);
});

app.listen(3000, () => {
  console.log('Fut: http://localhost:3000/hello?name=István');
});
