let people = []

const connections = {

}

const getSocketIdByName = (name) => {
  return Object.keys(connections).find(id => connections[id] === name)
}

module.exports = http => {
  var io = require('socket.io')(http);

  io.on('connection', (socket) => {
      console.log(`A user connected at ${new Date()}`)
      connections[socket.id] = ""
      console.log(connections)
      // io.emit('connectedUsers', socket.Server.parser.CONNECT)
      socket.on('disconnect', function () {
        console.log(`A user disconnected at ${new Date()}`);
        const personToRemove = connections[socket.id]
        console.log("disconnect", personToRemove)
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
        const username = connections[socket.id]
        if (message === "SECRET") {
          socket.join("secret")
          socket.to(socket.id).emit("receive-message", "You have joined the secret chat ;)")
        } else {
          io.emit("receive-message", `${username}: ${message}`)
        }
      })

      socket.on("ping-person", (target) => {
        const targetId = getSocketIdByName(target)
        console.log("ping", target, targetId)
        if (targetId === undefined) {
          return
        }
        socket.to(targetId).emit("got-pinged", connections[socket.id])
      })
  });

  setInterval(() => {
    io.to("secret").emit("receive-message", "SECRET ROOM SPAMMMMM. DON'T WEAR SOCKS TO BED YOU SILLIES")
  }, 500)

  return io
}
