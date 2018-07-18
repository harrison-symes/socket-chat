export default function room (state = null, action) {
  switch(action.type) {
    case 'LEAVE_ROOM':
      return null
    case 'JOIN_ROOM':
      return action.room
    default: return state
  }
}
