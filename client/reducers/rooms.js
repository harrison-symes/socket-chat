export default function rooms (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_ROOMS':
      return action.rooms
    case 'ADD_ROOM':
      return [...state, action.room]
    case 'CHANGE_ROOM_NAME':
      console.log({action});
      const newState = [...state]
      let room = newState.find(room => room.id == action.room.id)
      let idx = newState.indexOf(room)
      console.log({room, idx});
      room = {
        ...room,
        name: action.name
      }
      newState[idx] = room
      console.log({newState});
      return newState
    default: return state
  }
}
