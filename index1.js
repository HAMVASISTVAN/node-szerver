const express = require('express');
const app = express();

// alap végpont → HTML visszaadás
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Mini Weboldal</title>
      </head>
      <body>
        <h1>Üdv a kis weboldalon!</h1>
        <p>Ez csak egy egyszerű GET kérésből jött.</p>
        <a href="/info">Tovább az info oldalra</a>
      </body>
    </html>
  `);
});

// másik végpont
app.get('/info', (req, res) => {
  res.send(`
    <html>
      <head><title>Info</title></head>
      <body>
        <h1>Ez az info oldal</h1>
        <p>Itt is csak GET kérést használtunk.</p>
        <a href="/">Vissza a főoldalra</a>
      </body>
    </html>
  `);
});

// szerver indítás
app.listen(3000, () => {
  console.log('Szerver fut: http://localhost:3000');
});