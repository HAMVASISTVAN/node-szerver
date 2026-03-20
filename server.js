const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/webshop')
  .then(() => console.log('MongoDB kapcsolódva'))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Szia István, működik a szerverrr!');
});
app.get('/hello', (req, res) => {
  res.send('Hello István, ez a második végpont!');
});
app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send('Sikeres regisztráció!');
  } catch (err) {
    res.status(500).send('Hiba történt a regisztráció során');
  }
});
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1) Megkeressük az emailt
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send('Nincs ilyen felhasználó!');
    }

    // 2) Ellenőrizzük a jelszót
    if (user.password !== password) {
      return res.status(400).send('Hibás jelszó!');
    }

    // 3) Ha minden jó
    res.send('Sikeres bejelentkezés!');
  } catch (err) {
    res.status(500).send('Hiba történt a bejelentkezés során');
  }
});


app.listen(3000, () => {
  console.log('A szerver fut a 3000-es porton');
});
