import { RECEIVE_PERSON, RECEIVE_PEOPLE, REMOVE_PERSON } from "../actions/people"
 
const peopleReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PERSON:
            return [...state, action.person]
        case RECEIVE_PEOPLE:
            return [...action.people]
        case REMOVE_PERSON:
            console.log({action})
            return [...state.filter(person => {
                console.log(person != action.person, person)
                return person != action.person, person
            })]
        default:
            return state
    }
}

export default peopleReducer