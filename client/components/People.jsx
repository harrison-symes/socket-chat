import * as React from "react"
import socket from "../utils/socket"
import { useDispatch, useSelector} from "react-redux" 
import { receivePeople, receivePerson, removePerson } from "../actions/people"
import {getPeople} from "../selectors/people"

const People = () => {
    const dispatch = useDispatch()
    const people = useSelector(getPeople)

    const onReceivePeople = (people) => {
        dispatch(receivePeople(people))
    }

    const onReceivePerson = (person) => {
        dispatch(receivePerson(person))
    }
    
    const onRemovePerson = (person) => {
        console.log("remove", {person})
        dispatch(removePerson(person))
    }

    const onClickPerson = (person) => {
        socket.emit("ping-person", person)
    }

    const onPinged = (fromName) => {
        alert("you got pinged by " + fromName)
    }

    React.useEffect(() => {
        socket.emit("get-people")

        socket.on("receive-people", onReceivePeople)
        socket.on("receive-person", onReceivePerson)
        socket.on("remove-person", onRemovePerson)
        socket.on("got-pinged", onPinged)

        return () => {
            socket.removeEventListener("receive-people", onReceivePeople)
            socket.removeEventListener("receive-person", onReceivePerson)
            socket.removeEventListener("remove-person", onRemovePerson)
            socket.removeEventListener("remove-person", onRemovePerson)
            socket.removeEventListener("got-pinged", onPinged)
        }
    })

    return (
        <div className="people-list">
            {people.map(person => <button key={person} onClick={() => onClickPerson(person)} className="people-list__card">{person}</button>)}
        </div>
    )
}

export default People