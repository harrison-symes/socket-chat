import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import {getUserName} from "../selectors/username"
import { getPeople} from "../selectors/people"
import { setUsername } from "../actions/username"
import socket from "../utils/socket"

const EnterName = () => {
    const usernameState = useSelector(getUserName)
    const people = useSelector(getPeople)

    const dispatch = useDispatch()
    const [username, setUserName] = React.useState(usernameState)

    const submitUsername = (e) => {
        e.preventDefault()

        if(people.includes(username)) {
            return
        }
        
        socket.emit("submit-username", username)

        dispatch(setUsername(username))
    }

    const onChange = (e) => {
        const value = e.target.value
        if (value > 20) {
            return
        }

        setUserName(value)
    }

    return (
        <form className="enter-name" onSubmit={submitUsername}>
            <input onChange={onChange} value={username} className="enter-name__input" placeholder="Enter your username" />
            <input className="enter-name__submit" type="submit" />
        </form>
    )
}

export default EnterName