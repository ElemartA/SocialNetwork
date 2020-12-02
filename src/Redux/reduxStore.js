const { createStore, combineReducers } = require("redux");
const { default: dialogReducer } = require("./dialogReducer");
const { default: sidebarReducer } = require("./sidebarReducer");
const { default: profileReducer } = require("./profileReducer");



let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(redusers);

export default store;

