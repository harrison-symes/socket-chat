import * as React from "react"
import ChatInputs from "./ChatInputs"
import { useDispatch, useSelector } from "react-redux"
import socket from "../utils/socket"
import { receiveMessage } from "../actions/chat"
import { getMessages } from "../selectors/chat"

const Chat = () => {
    const messages = useSelector(getMessages)
    const dispatch = useDispatch()

    const onReceiveMessage = (message) => {
        dispatch(receiveMessage(message))
    }

    React.useEffect(() => {
        socket.on("receive-message", onReceiveMessage)

        return () => {
            socket.removeListener("receive-message", onReceiveMessage)
        }
    })

    return (
        <div className="chat">
            <div className="chat__inner">
                {messages.map(message => (
                    <div className="chat__message">{message}</div>
                ))}
            </div>
            <ChatInputs />
        </div>
    )
}

export default Chat