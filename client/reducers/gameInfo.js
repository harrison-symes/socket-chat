const initalState = {
  connectedUsers: 0
}

export default function gameInfo (state = initalState, action) {
  switch(action.type) {
    case 'UPDATE_CONNECTED_USERS':
      return {
        ...state,
        connectedUsers: actions.connectedUsers
      }
    default: return state
  }
}
