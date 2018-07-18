import React from 'react'
import {connect} from 'react-redux'

import CreateRoom from './CreateRoom'
import ShowRooms from './ShowRooms'
import {joinRoom, addRoom, receiveRooms, getRooms} from '../actions/rooms'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createRoomToggle: false
    }
    this.toggleCreateRoom = this.toggleCreateRoom.bind(this)

    this.props.socket.on('joinRoom', room => {
      this.props.dispatch(joinRoom(room))
    })
    this.props.socket.on('addRoom', room => {
      this.props.dispatch(addRoom(room))
    })
  }
  componentDidMount() {
    this.props.dispatch(getRooms())
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
      <ShowRooms />
    </div>
  }
}

const mapStateToProps = ({socket}) => ({socket})

export default connect(mapStateToProps)(Lobby)
