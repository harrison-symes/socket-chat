import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {connectedUsers} from '../actions/gameInfo'
import Lobby from './Lobby'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props.socket.on('connectedUsers', connectedUsers => {
      this.props.dispatch(updateConnectedUsers(connectedUsers))
    })
  }
  render() {
    return <Router>
      <div className='section has-text-centered'>
        <h1 className="title is-1">Socket Voting</h1>
        {this.props.room
          ? <InRoom />
          : <Lobby />
        }
      </div>
    </Router>
  }
}

const mapStateToProps = ({socket, room}) => ({socket, room})

export default connect(mapStateToProps)(App)
