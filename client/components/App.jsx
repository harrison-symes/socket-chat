import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Lobby from './lobby/Lobby'
import InRoom from './game/InRoom'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {room} = this.props
    return <Router>
      <div className='section has-text-centered'>
        <h1 className="title is-1">Socket Voting</h1>
        {room
          ? <InRoom />
          : <Lobby />
        }
      </div>
    </Router>
  }
}

const mapStateToProps = ({socket, room}) => ({socket, room})

export default connect(mapStateToProps)(App)
