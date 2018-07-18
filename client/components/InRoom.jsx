import React from 'react'
import {connect} from 'react-redux'

import VoteButtons from './VoteButtons'
import VoteDisplay from './VoteDisplay'

class InRoom extends React.Component {

  render() {
    return <div>
      <VoteDisplay />
      <VoteButtons />
    </div>
  }
}

export default connect()(InRoom)
