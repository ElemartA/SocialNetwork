import { Switch } from "react-router-dom";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export  const addMessageActionCreator = () => {
    return {type:'ADD-MESSAGE'};
}

export  const updateNewMessageActionCreator = (text) => {
    return {type:'UPDATE-NEW-MESSAGE-TEXT', newText: text};
}

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            break
        default:
            break;
    }
    return state;
}


export default dialogReducer;