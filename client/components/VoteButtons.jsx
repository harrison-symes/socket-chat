import React from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'
const socket = io('http://localhost:8000')

import {castVote} from '../actions/votes'

class VoteButtons extends React.Component {
  vote(isYes) {
    const {hasVoted} = this.props.votes
    if (hasVoted) return
    this.props.dispatch(castVote())
    this.props.socket.emit('vote', isYes)
  }
  reset() {
    this.props.socket.emit('reset')
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

const mapStateToProps = ({socket, votes}) => ({socket, votes})

export default connect(mapStateToProps)(VoteButtons)
