import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import sidebarReducer from "./sidebarReducer";
import { combineReducers, createStore } from "redux";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(redusers);

window.store = store;

export default store;

