const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followActionCreator = (userId) => {
    return { type: 'FOLLOW', userId};
}

export const unfollowActionCreator = (userId) => {
    return { type: 'UNFOLLOW', userId};
}

export const setUsersActionCreator = (users) => {
    return {type: 'SET_USERS', users};
}

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://sun9-8.userapi.com/s0pRr5r3R-Ik1f_lBxKPvozUfg4Uh-oulPsS8g/ka51imgcISA.jpg', followed: true, fullName: 'Alena', status: 'Hi, I am a boss', location: {sity: 'Krupki', country: 'Belarus'} },
        {id: 2, photoUrl: 'https://i.pinimg.com/236x/73/d0/06/73d006eb726d9ac5954474101c2341e2.jpg', followed: false, fullName: 'Dzianis', status: 'Hi, I am a boss too', location: {sity: 'Minsk', country: 'Belarus'} },
        {id: 3, photoUrl: 'https://i.pinimg.com/originals/91/78/2a/91782ad78b4dfaf1c2076209a4d1315f.jpg', followed: true, fullName: 'Anna', status: 'Hi, I am a boss too', location: {sity: 'Krupki', country: 'Belarus'} },
        {id: 4, photoUrl: 'https://sun9-2.userapi.com/c850236/v850236646/c6772/d0B9HMKWPF4.jpg', followed: true, fullName: 'Raisa', status: 'Hi, I am a boss too', location: {sity: 'Krupki', country: 'Belarus'} },
        {id: 5, photoUrl: 'https://cp16.nevsepic.com.ua/275/27599/thumbs/1475180253-31.png', followed: true, fullName: 'Oleg', status: 'Hi, I am a boss too', location: {sity: 'Krupki', country: 'Belarus'} },
        ]
}

const usersReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {
                            ...u, followed: true
                        }
                    }
                })
            }
                
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {
                            ...u, followed: false
                        }
                    }
                })
            }
        case SET_USERS: 
        return {
            ...state, users: [...state.users,...action.users]
        }
        default:
            return state;
    }
}


export default usersReducer;