export default function rooms (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_ROOMS':
      return action.rooms
    case 'ADD_ROOM':
      return [...state, action.room]
    default: return state
  }
}
