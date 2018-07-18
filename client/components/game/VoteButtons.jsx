import React from 'react'
import {connect} from 'react-redux'

import {castVote} from '../../actions/votes'

class VoteButtons extends React.Component {
  vote(isYes) {
    const {
      votes,
      room,
      dispatch,
      socket
    } = this.props
    if (votes.hasVoted) return

    dispatch(castVote())
    socket.emit('vote', room, isYes)
  }
  reset() {
    const {room, socket} = this.props
    socket.emit('reset', room)
  }
  render() {
    const {hasVoted} = this.props.votes
    return <div className="column is-offset-3 is-6">
      <button disabled={hasVoted} onClick={() => this.vote(true)} className="button is-large is-success is-fullwidth">Yes</button>
      <button disabled={hasVoted} onClick={() => this.vote(false)} className="button is-large is-danger is-fullwidth">No</button>
      <button onClick={() => this.reset()}className="button is-small is-info">Reset!</button>
    </div>
  }
}

const mapStateToProps = ({
  socket,
  votes,
  room
}) => ({
  socket,
  votes,
  room
})

export default connect(mapStateToProps)(VoteButtons)
