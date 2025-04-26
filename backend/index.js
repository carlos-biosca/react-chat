const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 8000;

const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
  })
});

server.listen(port, () => {
  console.log(`listening on port:${port}`);
});