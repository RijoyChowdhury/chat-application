const express = require('express');
const socket = require('socket.io');

//Server setup
const app = express();
var server = app.listen(3000, () => {
  console.log('Server is up and running.');
});

//Static files directory setup
app.use(express.static('public'));

//Socket connection setup
var io = socket(server);
io.on('connection', (socket) => {
  console.log(`New User. Connection established. ID: ${socket.id}`);
  socket.on('chat-message', (data) => {
    socket.broadcast.emit('chat-message',data);
  });
  socket.on('disconnect', () => {
    console.log(`User disconnected. ID: ${socket.id}`);
  });
});