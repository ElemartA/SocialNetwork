const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export  const addPostActionCreator = () => {
    return {type:'ADD-POST'};
}

export  const updateNewPostActionCreator = (text) => {
    return {type:'UPDATE-NEW-POST-TEXT', newText: text};
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newMessage = {
                message: state.newPostText,
                likesCount: '27'
            };
            state.posts.push(newMessage);
            state.newPostText = '';
            break;
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText; 
            break;  
        default:
            break;
    }
    return state;
}


export default profileReducer;