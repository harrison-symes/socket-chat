import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import VoteButtons from './VoteButtons'
import VoteDisplay from './VoteDisplay'

const App = () => (
  <Router>
    <div className='section has-text-centered'>
      <h1 className="title is-1">Socket Voting</h1>
      <VoteDisplay />
      <VoteButtons />
    </div>
  </Router>
)

export default App
