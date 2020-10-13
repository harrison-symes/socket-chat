import {combineReducers} from 'redux'
import username from "./username"
import people from "./people"
import chat from "./chat"

export default combineReducers({
    username,
    people,
    chat
})
