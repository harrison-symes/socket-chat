import React from 'react'
import {connect} from 'react-redux'

class VoteDisplay extends React.Component {
  render() {
    return <div className="column is-offset-3 is-6">
      <span className="columns">
        <span className="column is-6">
          <h1 className="subtitle is-2" >Yes: 0</h1>
        </span>
        <span className="column is-6">
          <h1 className="subtitle is-2" >No: 0</h1>
        </span>
      </span>
    </div>
  }
}


export default connect()(VoteDisplay)
