let people = []

const connections = {

}

module.exports = http => {
  var io = require('socket.io')(http);

  io.on('connection', (socket) => {
      console.log(`A user connected at ${new Date()}`)
      connections[socket.id] = ""
      console.log(connections)
      socket.on('disconnect', function () {
        console.log(`A user disconnected at ${new Date()}`);
        const personToRemove = connections[socket.id]
        io.emit("remove-person", personToRemove)
        people = people.filter(person => person !== personToRemove)
        delete connections[socket.id]
      });

      socket.on("submit-username", username => {
        connections[socket.id] = username
        people.push(username)
        io.emit("receive-person", username)
      })

      socket.on("get-people", () => {
        socket.emit("receive-people", people)
      })

      socket.on("send-message", (message) => {
        console.log(message)
        const username = connections[socket.id]
        socket.emit("receive-message", `${username}: ${message}`)
      })
  });

  return io
}
