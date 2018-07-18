import request from 'superagent'

export function receiveVote(vote) {
  return {
    type: `RECEIVE_${vote ? 'YES' : 'NO'}_VOTE`,
  }
}

export function castVote() {
  return {
    type: 'CAST_VOTE'
  }
}

export function resetVotes() {
  return {
    type: 'RESET_VOTES'
  }
}
