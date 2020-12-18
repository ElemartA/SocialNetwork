const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

export const addPostActionCreator = () => {
    return { type: 'ADD-POST' };
}

export const updateNewPostActionCreator = (text) => {
    return { type: 'UPDATE-NEW-POST-TEXT', newText: text };
}

export const setUsersProfile = (profile) => {
    return {type: 'SET_USERS_PROFILE', profile}
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi! It`s very cool social network!', likesCount: '27' },
        {id: 2, message: 'Never give up on your drims!', likesCount: '28' }
    ],
    newPostText: ' ',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    let newMessage = {
        message: state.newPostText,
        likesCount: '27'
    };
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [...state.posts, newMessage],
                newPostText: ''
            }
        
        case UPDATE_NEW_POST_TEXT: 
            return {
            ...state,
            newPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }    
        
        default:
            return state;
    }
}


export default profileReducer;