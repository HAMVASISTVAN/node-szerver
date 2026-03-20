const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/a.html'); // egyszerű kliens oldal
});

io.on('connection', (socket) => {
  console.log('Új felhasználó csatlakozott');

  socket.on('chat message', (msg) => {
    console.log('Üzenet: ' + msg);
    io.emit('chat message', msg); // minden kliensnek küldjük
  });

  socket.on('disconnect', () => {
    console.log('Felhasználó lecsatlakozott');
  });
});

server.listen(3000, () => {
  console.log('Szerver fut: http://localhost:3000');
});