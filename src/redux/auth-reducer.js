import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'network/auth/SET_USERS_DATA'
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
export const getAuthUserData=()=> async(dispatch)=>{
    let response = await authAPI.requestAuth()
        if(response.data.resultCode === 0){
            let {id,login,email} = response.data.data
            dispatch(setUserData(login,email,id,true))
        }
}
export const login = (email,password,rememberMe) => async(dispatch) => {
    let response = await authAPI.login(email,password,rememberMe)
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }else {
            let message =response.data.messages.length > 0 ? response.data.messages[0]:'Some error'
            dispatch(stopSubmit('login',{_error:message}))
        }
}

export const logout =()=> async(dispatch)=>{
    let response = await authAPI.logout()
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,null,null,false))
        }
}

export default authReducer
