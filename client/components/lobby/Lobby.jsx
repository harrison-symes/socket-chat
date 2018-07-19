import React from 'react'
import {connect} from 'react-redux'

import CreateRoom from './CreateRoom'
import ShowRooms from './ShowRooms'
import {
  joinRoom,
  addRoom,
  getRooms
} from '../../actions/rooms'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.toggleCreateRoom = this.toggleCreateRoom.bind(this)

    const {socket, dispatch} = this.props
    socket.on('joinRoom', room => {
      dispatch(joinRoom(room))
    })
    socket.on('addRoom', room => {
      dispatch(addRoom(room))
    })
  }
  componentDidMount() {
    this.props.dispatch(getRooms())
  }
  toggleCreateRoom () {
    this.setState({showForm: !this.state.showForm})
  }
  render() {
    const {showForm} = this.state
    return <div>
      <h1 className="title">Lobby</h1>
      {showForm && <CreateRoom />}
      <button onClick={this.toggleCreateRoom} className="button is-info">{showForm ? 'Cancel' : 'Create New Room'}</button>
      <ShowRooms />
    </div>
  }
}

const mapStateToProps = ({socket}) => ({socket})

export default connect(mapStateToProps)(Lobby)
