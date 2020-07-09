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
                ...action.data

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
export const setUserData = (login,email,id,isAuth) =>({type:SET_USERS_DATA,data:{id,email,login,isAuth}})
export const setUserAvatar = (avatar) =>({type:SET_USERS_AVATAR,avatar})
export const getAuthUserData=()=>(dispathch)=>{
    authAPI.requestAuth()
        .then(response=>{
            if(response.data.resultCode === 0){
                let {id,login,email} = response.data.data
                dispathch(setUserData(login,email,id,true))
            }
        })
}
export const login = (email,password,rememberMe) => (dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(getAuthUserData())
            }
        })
}

export const logout =()=>(dispatch)=>{
    authAPI.logout()
        .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setUserData(null,null,null,false))
            }
        })
}



export default authReducer
