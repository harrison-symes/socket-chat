import request from 'superagent'

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

export function getRooms () {
  return dispatch => {
    request
      .get('/api/games')
      .then(res => {
        dispatch(receiveRooms(res.body))
      })
  }
}

export function createRoom (name) {
  return request
    .post('/api/games')
    .send({name})
}

export function changeRoomName (room, name) {
  return request
    .put(`/api/games/${room.id}/name`)
    .send({name})
}

export function changeRoomNameAction(room, name) {
  return {
    type: 'CHANGE_ROOM_NAME',
    room,
    name
  }
}
