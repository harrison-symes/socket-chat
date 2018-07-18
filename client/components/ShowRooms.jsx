import React from 'react'
import {connect} from 'react-redux'

class ShowRooms extends React.Component {
  render() {
    const {rooms} = this.props
    return <div>
      <hr />
      <h3 className="title is-3">Rooms</h3>
      {rooms.map(room => <h1>{room}</h1>)}
    </div>
  }
}

const mapStateToProps = ({rooms}) => ({rooms})

export default connect(mapStateToProps)(ShowRooms)
