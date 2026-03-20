const express = require('express');
const app = express();

let ledOn = false;

app.get('/led', (req, res) => {
  const action = req.query.action;
  if(action === 'on') ledOn = true;
  if(action === 'off') ledOn = false;
  console.log('LED állapot:', ledOn);
  res.json({ led: ledOn });
});

app.listen(3000, () => {
  console.log('Szerver fut: http://192.168.1.100:3000');
});