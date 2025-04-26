const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log(`listening on port:${port}`);
});