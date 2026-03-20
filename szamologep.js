const express = require('express')
const app = express()

// statikus fájlok (HTML kiszolgálása)
app.use(express.static(__dirname))

// GET számológép végpont
app.get('/calc', (req, res) => {
  const a = Number(req.query.a)
  const b = Number(req.query.b)
  const op = req.query.op

  let result

  if (op === 'add') result = a + b
  if (op === 'sub') result = a - b
  if (op === 'mul') result = a * b
  if (op === 'div') result = a / b

  res.send(`
    <h1>Eredmény: ${result}</h1>
    <a href="/">Vissza</a>
  `)
})

app.listen(3000, () => {
  console.log("Fut: http://localhost:3000")
})
