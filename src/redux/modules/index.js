import { combineReducers } from "redux";
import comment from "./comment";
import post from "./post";
import rank from "./rank";
import user from "./user";
import search from "./search";

const rootReducer = combineReducers({
    comment,
    post,
    rank,
    user,
    search
});

export default rootReducer;