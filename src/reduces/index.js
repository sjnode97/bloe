import {combineReducers} from "redux";
import list from "./list"
import detalis from "./detalis"
import user from "./user"
const Reduces = combineReducers({
    list,
    detalis,
    user
})
export default Reduces