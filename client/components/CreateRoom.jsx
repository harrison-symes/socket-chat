import React from 'react'
import {connect} from 'react-redux'

class CreateRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      room: ''
    }
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
  }
  render() {
    const {room} = this.state
    return <form onSubmit={this.submit.bind(this)} className="column is-offset-3 is-6">
      <h3 className="subtitle is-3">Creating a Room...</h3>
      <input className="input is-large is-success has-text-centered" onChange={this.updateDetails.bind(this)} type="text" name="room" value={room} placeholder="room name" />
      <input className="button is-large is-fullwidth" type="submit" />
    </form>
  }
}

export default connect()(CreateRoom)
