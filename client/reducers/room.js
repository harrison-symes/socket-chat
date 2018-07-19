export default function room (state = null, action) {
  switch(action.type) {
    case 'LEAVE_ROOM':
      return null
    case 'JOIN_ROOM':
      return action.room
    case 'CHANGE_ROOM_NAME':
      if (state && action.room.id == state.id) return {
        ...state,
        name: action.name
      }
      return state
    default: return state
  }
}
