export function joinRoom (room) {
  return {
    type: 'JOIN_ROOM',
    room
  }
}

export function addRoom(room) {
  return {
    type: 'ADD_ROOM',
    room
  }
}

export function receiveRooms(rooms) {
  return {
    type: 'RECEIVE_ROOMS',
    rooms
  }
}
