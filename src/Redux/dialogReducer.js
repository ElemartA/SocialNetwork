import { Switch } from "react-router-dom";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export  const addMessageActionCreator = () => {
    return {type:'ADD-MESSAGE'};
}

export  const updateNewMessageActionCreator = (text) => {
    return {type:'UPDATE-NEW-MESSAGE-TEXT', newText: text};
}

let initialState = {
    dialogs: [
        { name: 'Alena', id: 1 },
        { name: 'Anna', id: 2 },
        { name: 'Raisa', id: 3 },
        { name: 'Oleg', id: 4 },
        { name: 'Denis', id: 5 }
    ],
    messages: [
        { message: 'So, what are your plans for this weekend?' },
        { message: 'Do you want to get together or something?' },
        { message: 'How about going to see a movie?' },
        { message: 'That sounds like a good idea!' }
    ],
    newMessageText: 'hello'
}

const dialogReducer = (state = initialState, action) => {
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