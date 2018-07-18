import React from 'react'
import {connect} from 'react-redux'

import VoteButtons from './VoteButtons'
import VoteDisplay from './VoteDisplay'

class InRoom extends React.Component {

  render() {
    return <div>
      <h3 className="subtitle is-2">Room: {this.props.room.name}</h3>
      <VoteDisplay />
      <VoteButtons />
    </div>
  }
}

const mapStateToProps = ({room}) => ({room})

export default connect(mapStateToProps)(InRoom)
