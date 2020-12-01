import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";



export let store = {
    _callSubscriber() {
        console.log ('it ka');
    },
    _state : {
        profilePage: {
            posts: [
                { message: 'Hi! It`s very cool social network!', likesCount: '27' },
                { message: 'Never give up on your drims!', likesCount: '28' }
            ],
            newPostText: ' '
        },
        dialogsPage: {
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
                { message: 'That sounds like a good idea.' }
            ],
            newMessageText: 'hello'
        },
        sidebar : {
            friends : [
                { name : 'Raisa'},
                { name : 'Anna'},
                { name : 'Oleg'}
            ]
        }    
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }
}

  
