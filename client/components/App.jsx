import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { getUserName } from "../selectors/username"
import { useSelector } from "react-redux"
import Header from './Header'
import EnterName from "./EnterName"
import Chat from "./Chat"
import People from "./People"

const App = () => {
  const username = useSelector(getUserName)

  return (
    <Router>
      <>
        <Header />
        <div className="page-container">
          <People />
          {username.length === 0 
            ? <Route path="/" component={EnterName} />
            : <Route path="/" component={Chat} />
          }
        </div>
      </>
    </Router>
  )
}

export default App
