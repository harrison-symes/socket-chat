import React from 'react'
import {connect} from 'react-redux'

import CreateRoom from './CreateRoom'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createRoomToggle: false
    }
    this.toggleCreateRoom = this.toggleCreateRoom.bind(this)
  }
  toggleCreateRoom () {
    this.setState(({createRoomToggle}) => ({createRoomToggle: !createRoomToggle}))
  }
  render() {
    const {createRoomToggle} = this.state
    return <div>
      <h1 className="title">Lobby</h1>
      {createRoomToggle && <CreateRoom />}
      <button onClick={this.toggleCreateRoom} className="button is-info">{createRoomToggle ? 'Cancel' : 'Create New Room'}</button>
    </div>
  }
}

export default connect()(Lobby)
