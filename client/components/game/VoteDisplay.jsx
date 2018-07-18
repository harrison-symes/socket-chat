import React from 'react'
import {connect} from 'react-redux'

import {
  receiveVote,
  resetVotes
} from '../../actions/votes'

class VoteDisplay extends React.Component {
  constructor(props) {
    super(props)
    const {socket, dispatch} = this.props

    socket.on('vote', vote => {
      dispatch(receiveVote(vote))
    })

    socket.on('reset', () => {
      dispatch(resetVotes())
    })
  }
  render() {
    const {yes, no} = this.props.votes
    return <div className="column is-offset-3 is-6">
      <span className="columns">
        <span className="column is-6">
          <h1 className="subtitle is-2">Yes: {yes}</h1>
        </span>
        <span className="column is-6">
          <h1 className="subtitle is-2">No: {no}</h1>
        </span>
      </span>
    </div>
  }
}

const mapStateToProps = ({
  socket,
  votes
}) => ({
  socket,
  votes
})


export default connect(mapStateToProps)(VoteDisplay)
