const express = require('express');
const app = express();
// alap végpont
app.get('/', (req, res) => {
  res.send('Hello szerver!');
});
// másik végpont
app.get('/hello', (req, res) => {
  res.send('Hello ez egy másik útvonal!');
});
// szerver indítás
app.listen(3000, () => {
  console.log('Szerver fut: http://localhost:3000');
});git