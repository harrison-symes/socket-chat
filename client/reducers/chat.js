import { RECEIVE_MESSAGE} from "../actions/chat"

const chatReducer = (state = ["This is the first message"], action) => {
    switch(action.type) {
        case RECEIVE_MESSAGE:
            return [...state, action.message]
        default:
            return state
    }
}

export default chatReducer