
module.exports = app => {
  const http = require('http').Server(app);
  var io = require('socket.io')(http);

  io.on('connection', (socket) => {
      console.log(`A user connected at ${new Date()}`)
      // io.emit('connectedUsers', socket.Server.parser.CONNECT)
      socket.on('disconnect', function () {
        console.log(`A user disconnected at ${new Date()}`);
      });


      socket.on('createRoom', room => {
        console.log("create room", room);
        socket.join(room.id)
        io.emit('addRoom', room)
        io.to(room.id).emit('joinRoom', room)
      })

      socket.on('joinRoom', room => {
        socket.join(room.id)
        io.to(room.id).emit('joinRoom', room)
      })

      socket.on('vote', function (room, isYes) {
        console.log({room, isYes});
        io.to(room.id).emit('vote', isYes);
      });

      socket.on('reset', function() {
        io.emit('reset')
      })
    // console.log({io})
    // console.log(socket);

  });

  return io
}
