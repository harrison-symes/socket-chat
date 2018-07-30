
module.exports = http => {
  var io = require('socket.io')(http);

  io.on('connection', (socket) => {
      console.log(`A user connected at ${new Date()}`)
      // io.emit('connectedUsers', socket.Server.parser.CONNECT)
      socket.on('disconnect', function () {
        console.log(`A user disconnected at ${new Date()}`);
      });

  });

  return io
}
