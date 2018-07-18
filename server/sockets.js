
module.exports = app => {
  const http = require('http').Server(app);
  var io = require('socket.io')(http);

  io.on('connection', (socket) => {
    socket.join('game one', () => {
      console.log(`A user connected at ${new Date()}`)
      // io.emit('connectedUsers', socket.Server.parser.CONNECT)
      socket.on('disconnect', function () {
        console.log(`A user disconnected at ${new Date()}`);
      });

      socket.on('vote', function (isYes) {
        console.log({isYes});
        io.emit('vote', isYes);
      });

      socket.on('reset', function() {
        io.emit('reset')
      })
    })
    // console.log({io})
    // console.log(socket);

  });

  return io
}
