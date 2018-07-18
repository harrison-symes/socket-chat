
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
        socket.join(room, () => console.log(socket._rooms))
        console.log(socket.rooms)
        console.log(io.rooms);
        io.emit('addRoom', room)
        io.to(room).emit('joinRoom', room)
      })

      socket.on('getRooms', () => {
        console.log("get rooms");
        io.emit('receiveRooms', Object.keys(socket.rooms) || [])
      })

      socket.on('vote', function (isYes) {
        console.log({isYes});
        console.log(socket.rooms);
        console.log(io.rooms);
        io.emit('vote', isYes);
      });

      socket.on('reset', function() {
        io.emit('reset')
      })
    // console.log({io})
    // console.log(socket);

  });

  return io
}
