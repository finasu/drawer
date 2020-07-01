const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// function onConnection(socket) {
//   socket.on('init', (data) => {
//     socket.join(data.room_id);
//   });
//   socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
//   socket.on('erasing', (data) => socket.broadcast.emit('erasing', data));
//   socket.on('drawImage', (data) => socket.broadcast.emit('drawImage', data));
//   socket.join('some_room');
// }

// io.on('connection', onConnection);
  
io.on('connection', socket => {
  socket.on('join', (data) => {
    socket.room_id = data.room_id;
    // socket.name = data.name;
    socket.join(data.room_id);
    socket.to(data.room_id).emit('message', 'xxさんが参加しました');
  });

  // socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
  socket.on('drawing', (data) => socket.to(data.room_id).emit('drawing', data));
  // socket.on('erasing', (data) => socket.broadcast.emit('erasing', data));
  socket.on('erasing', (data) => socket.to(data.room_id).emit('erasing', data));
  // socket.on('drawImage', (data) => socket.broadcast.emit('drawImage', data));
  socket.on('drawImage', (data) => socket.to(data.room_id).emit('drawImage', data));

  socket.on('disconnect', () => {
    socket.leave(socket.room_id);
    socket.to(socket.room_id).emit('message', 'xxさんが退室しました');
  });
});


http.listen(port, () => console.log('listening on port ' + port));
