import { combineReducers } from "redux";
import comment from "./comment";
import post from "./post";
import rank from "./rank";
import user from "./user";

const rootReducer = combineReducers({
    comment,
    post,
    rank,
    user
});

export default rootReducer;