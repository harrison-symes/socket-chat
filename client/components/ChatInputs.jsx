import * as React from "react"

import socket from "../utils/socket"

const ChatInputs = () => {
    const [message, setMessage] = React.useState("")

    const onChange = (e) => {
        const value = e.target.value
        if (value > 25) {
            return
        }
        setMessage(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        socket.emit("send-message", message)

        setMessage("")
    }

    return (
        <form  onSubmit={onSubmit} className="chat__input__container">
            <input onChange={onChange} value={message} className="chat__input" />
            <input type="submit" />
        </form>
    )
}

export default ChatInputs