const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_USERS_PAGE = 'CURRENT_USERS_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const follow = (userId) => {
    return { type: 'FOLLOW', userId};
}

export const unfollow = (userId) => {
    return { type: 'UNFOLLOW', userId};
}

export const setUsers = (users) => {
    return {type: 'SET_USERS', users};
}
export const setCurrentPage = (currentPage) => {
    return {type: 'CURRENT_USERS_PAGE', currentPage};
}
export const setTotalUsersCount = (totalCount) => {
    return {type: 'SET_TOTAL_COUNT', totalCount};
}
export const setIsFetching = (isFetching) => {
    return {type: 'SET_IS_FETCHING', isFetching};
}

let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 2,
    isFetching: false
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
                    return u;
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
                    return u;
                })
            }
        case SET_USERS: 
        return {
            ...state, users: action.users
        }
        case CURRENT_USERS_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}


export default usersReducer;