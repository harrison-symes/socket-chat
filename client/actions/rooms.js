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
