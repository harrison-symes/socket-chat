import React from 'react'
import {connect} from 'react-redux'

class VoteButtons extends React.Component {
  render() {
    return <div className="column is-offset-3 is-6">
      <button className="button is-large is-success is-fullwidth">Yes</button>
      <button className="button is-large is-danger is-fullwidth">No</button>
    </div>
  }
}

export default connect()(VoteButtons)
