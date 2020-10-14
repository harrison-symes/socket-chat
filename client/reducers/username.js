import { SET_USERNAME } from "../actions/username"

const usernameReducer = (state = "", action) => {
    switch(action.type) {
        case SET_USERNAME:
            return action.username ?? ""
        default: 
            return state
    }
}

export default usernameReducer