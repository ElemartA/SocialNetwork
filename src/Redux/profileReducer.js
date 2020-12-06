const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export  const addPostActionCreator = () => {
    return {type:'ADD-POST'};
}

export  const updateNewPostActionCreator = (text) => {
    return {type:'UPDATE-NEW-POST-TEXT', newText: text};
}

let initialState = {
    posts: [
        { message: 'Hi! It`s very cool social network!', likesCount: '27' },
        { message: 'Never give up on your drims!', likesCount: '28' }
    ],
    newPostText: ' '
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newMessage = {
                message: state.newPostText,
                likesCount: '27'
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newMessage);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case  UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText; 
            return stateCopy;  
        }
        default:
            return state;
    }
}


export default profileReducer;