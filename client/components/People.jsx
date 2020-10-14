import * as React from "react"
import socket from "../utils/socket"
import { useDispatch, useSelector} from "react-redux" 
import { receivePeople, receivePerson, removePerson } from "../actions/people"
import { getPeople } from "../selectors/people"

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

    React.useEffect(() => {
        socket.emit("get-people")

        socket.on("receive-people", onReceivePeople)
        socket.on("receive-person", onReceivePerson)
        socket.on("remove-person", onRemovePerson)

        return () => {
            socket.removeEventListener("receive-people", onReceivePeople)
            socket.removeEventListener("receive-person", onReceivePerson)
            socket.removeEventListener("remove-person", onRemovePerson)
        }
    })

    return (
        <div className="people-list">
            {people.map(person => <div className="people-list__card">{person}</div>)}
        </div>
    )
}

export default People