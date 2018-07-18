import React from 'react'
import {connect} from 'react-redux'

import {createRoom} from '../../actions/rooms'

class CreateRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      room: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    const {room} = this.state
    const {socket} = this.props
    e.preventDefault()
    createRoom(room)
      .then(res => {
        const room = res.body
        socket.emit('createRoom', room)
      })
  }
  render() {
    const {room} = this.state
    return <form onSubmit={this.submit} className="column is-offset-3 is-6">
      <h3 className="subtitle is-3">Creating a Room...</h3>
      <input className="input is-large is-success has-text-centered" onChange={this.updateDetails} type="text" name="room" value={room} placeholder="room name" />
      <input className="button is-large is-fullwidth" type="submit" />
    </form>
  }
}

const mapStateToProps = ({socket}) => ({socket})

export default connect(mapStateToProps)(CreateRoom)
