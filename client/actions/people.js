export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE"
export const RECEIVE_PERSON = "RECEIVE_PERSON"
export const REMOVE_PERSON = "REMOVE_PERSON"

export const receivePeople = (people) => ({
    type: RECEIVE_PEOPLE,
    people
})

export const receivePerson = (person) => ({
    type: RECEIVE_PERSON,
    person
})

export const removePerson = (person) => ({
    type: REMOVE_PERSON,
    person
})