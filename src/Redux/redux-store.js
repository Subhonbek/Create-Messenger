import {combineReducers, createStore} from "redux";
import {postReducer} from "./post-reducer";
import {messageReducer} from "./message-reducer";
import {friendReducer} from "./friend-reducer";

let reducers = combineReducers({
        post: postReducer,
        message: messageReducer,
        friend: friendReducer
    }
);

let store = createStore(reducers);

export default store;