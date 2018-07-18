import React from 'react'
import {connect} from 'react-redux'

class ShowRooms extends React.Component {
  joinRoom(room) {
    this.props.socket.emit('joinRoom', room)
  }
  render() {
    const {rooms} = this.props
    return <div>
      <hr />
      <h3 className="title is-3">Rooms</h3>
      {rooms.map(room => <h1 onClick={() => this.joinRoom(room)}>{room.name}</h1>)}
    </div>
  }
}

const mapStateToProps = ({socket, rooms}) => ({socket, rooms})

export default connect(mapStateToProps)(ShowRooms)
