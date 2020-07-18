import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'network/auth/SET_USERS_DATA'
const SET_USERS_AVATAR = 'SET_USERS_AVATAR'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    avatarLogin:null,
    captcha_url:null
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
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captcha_url:action.url

            }

        default:
            return state
    }
}
export const setUserData = (login,email,id,isAuth) =>({type:SET_USERS_DATA,data:{id,email,login,isAuth}})
export const setUserAvatar = (avatar) =>({type:SET_USERS_AVATAR,avatar})
export const getCaptchaUrlSuccess = (url) =>({type:GET_CAPTCHA_URL,url})
export const getAuthUserData=()=> async(dispatch)=>{
    let response = await authAPI.requestAuth()
        if(response.data.resultCode === 0){
            let {id,login,email} = response.data.data
            dispatch(setUserData(login,email,id,true))
        }
}
export const login = (email,password,rememberMe,captcha) => async(dispatch) => {
    let response = await authAPI.login(email,password,rememberMe,captcha)
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }else {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let message =response.data.messages.length > 0 ? response.data.messages[0]:'Some error'
            dispatch(stopSubmit('login',{_error:message}))
        }
}
export const getCaptchaUrl = () => async(dispatch) => {
    let response = await securityAPI.getCaptchaURl()
    const captchaUrl = response.data.url
       dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout =()=> async(dispatch)=>{
    let response = await authAPI.logout()
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,null,null,false))
        }
}

export default authReducer
