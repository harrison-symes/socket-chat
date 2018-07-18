const server = require('./server')
const socket = require('./sockets')(server)

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Listening on port', port)
})

socket.listen(8000)
