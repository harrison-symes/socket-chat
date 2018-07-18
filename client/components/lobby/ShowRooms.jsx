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
      <div className="columns is-multiline">
        {rooms.map(room => <button className="column is-6 button is-large is-info" onClick={() => this.joinRoom(room)}>{room.name}</button>)}
      </div>
    </div>
  }
}

const mapStateToProps = ({socket, rooms}) => ({socket, rooms})

export default connect(mapStateToProps)(ShowRooms)
