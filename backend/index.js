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
  socket.emit('message', 'Welcome to the server!');
});

server.listen(port, () => {
  console.log(`listening on port:${port}`);
});