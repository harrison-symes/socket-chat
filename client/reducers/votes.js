import {get, set} from '../utils/localStorage'

const initalState = {
  yes: 0,
  no: 0,
  hasVoted: JSON.parse(get('hasVoted')) || false
}

export default function votes(state = initalState, action) {
  console.log({action});
  switch(action.type) {
    case 'RESET_VOTES':
      set('hasVoted', false)
      return {
        ...initalState,
        hasVoted: false
      }
    case 'JOIN_ROOM':
      set('hasVoted', false)
      return {
        ...initalState,
        hasVoted: false
      }
    case 'CAST_VOTE':
      set('hasVoted', true)
      return {
        ...state,
        hasVoted: true
      }
    case 'RECEIVE_YES_VOTE':
      return {
        ...state,
        yes: state.yes+1
      }
    case 'RECEIVE_NO_VOTE':
      return {
        ...state,
        no: state.no+1
      }
    default: return state
  }
}
