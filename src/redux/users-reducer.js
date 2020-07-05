import {followAPI, userAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLOOWING_PROGRESS = 'TOGGLE_IS_FOLOOWING_PROGRESS';



let initialState = {
    users: [],
    user: 0,
    pageSize: 10 ,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:true,
    followingIsProgress:[]

}

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}

        case CURRENT_PAGE:
            return {...state,currentPage: action.currentPage}

        case TOTAL_USERS_COUNT:
            return {...state,totalUsersCount: action.totalUsersCount/100}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLOOWING_PROGRESS:

            return {...state,
                followingIsProgress:  action.isFetching
                    ? [state.followingIsProgress,action.id]
                    : state.followingIsProgress.filter(id => id != action.id)
            }

        default:
            return state
    }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE,currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT,totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching} )
export const toggleIsFollowingIsProgress = (isFetching,id) => ({type: TOGGLE_IS_FOLOOWING_PROGRESS,isFetching,id} )

export const getUsers =(currentPage,pageSize)=> {
    return (dispatch) =>{
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage,pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))
        })

    }
}

export const follow =(userId)=> {
    return (dispatch) => {
        dispatch(toggleIsFollowingIsProgress(true, userId))
        followAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingIsProgress(false, userId))
            })
    }
}

export const unFollow=(userId)=>{
    return (dispatch)=>{
        dispatch(toggleIsFollowingIsProgress(true,userId))
        followAPI.deleteFolllow(userId)
            .then(data=>{
                if(data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingIsProgress(false,userId))
            })
    }
}

export default usersReducer
