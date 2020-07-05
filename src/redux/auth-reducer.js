import {authAPI, profileAPI} from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA'
const SET_USERS_AVATAR = 'SET_USERS_AVATAR'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    avatarLogin:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return{
                ...state,
                ...action.data,
                isAuth:true,
            }
        case SET_USERS_AVATAR:
            return {
                ...state,
                avatarLogin: action.avatar
            }


        default:
            return state
    }
}
export const setUserData = (login,email,id) =>({type:SET_USERS_DATA,data:{id,email,login}})
export const setUserAvatar = (avatar) =>({type:SET_USERS_AVATAR,avatar})

export const getUserData = (userId)=>{
    return (dispatch)=>{
        authAPI.requestAuth()
            .then(data=>{
                if(data.resultCode === 0){
                    let {id,login,email} = data.data
                    dispatch(setUserData(login,email,id))
                    profileAPI.getProfile(userId)
                        .then(data=>{
                            dispatch(setUserAvatar(data.photos.small))
                        })
                }
            })
    }
}

export default authReducer
