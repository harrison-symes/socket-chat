import React from 'react'
import {connect} from 'react-redux'

import {changeRoomName, changeRoomNameAction} from '../../actions/rooms'

class ChangeName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.room.name
    }
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    const {socket, room} = this.props

    changeRoomName(room, this.state.name)
      .then(res => {
        socket.emit('changeRoomName', room, this.state.name)
      })

  }
  render() {
    const {name} = this.state
    return <form onSubmit={this.submit.bind(this)}>
      <input type="text" name="name" placeholder="new name" value={name} onChange={this.updateDetails}/>
      <input type="submit" />
    </form>
  }
}

const mapStateToProps = ({socket, room}) => ({socket, room})

export default connect(mapStateToProps)(ChangeName)
