const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

// 1) SMTP kapcsolat létrehozása


let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'istvanhamvas68@gmail.com',
    pass: 'snjr arzv eomd wkip'
  },
  tls: {
    rejectUnauthorized: false
  }
})



// 2) Teszt e-mail küldése
app.get('/send', async (req, res) => {
  try {
    let info = await transporter.sendMail({
      from: 'istvanhamvas68@gmail.com',
      to: 'istvanhamvas68@gmail.com',
      subject: 'Teszt üzenet Node.js-ből',
      text: 'Szia István! Ez egy teszt e-mail, amit a Node.js küldött.'
    })

    res.send('E-mail elküldve!')
  } catch (err) {
    console.error(err)
    res.send('Hiba történt az e-mail küldésekor.')
  }
})

app.listen(3000, () => {
  console.log('Szerver fut: http://localhost:3000/send')
})
