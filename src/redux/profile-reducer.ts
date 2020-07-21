import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {photosType} from "../types/types";


const ADD_POST = 'network/profile/ADD-POST';
const SET_USERS_PROFILE = 'network/profile/ADD-SET_USERS_PROFILE';
const GET_USER_STATUS ='network/profile/GET_USER_STATUS'
const DELET_POST ='network/profile/DELET_POST'
const SAVE_PHOTO_SUCCESS ='network/profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE ='network/profile/SAVE_PROFILE'

export type initialStateType ={
    profile:profileType | any
    status:string
    profileStatusUpdate:string|null
    postData:Array<postDataType>
}

type postDataType={
    massage:string
    id:string
    likesCounter:number
    avatar:string
}

type profileType={
    userId:number
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    contacts:contactsType
    photos:photosType|null
}
type contactsType={
    github:string|null
    vk:string|null
    facebook:string|null
    instagram:string|null
    twitter:string|null
    website:string|null
    youtube:string|null
    mainLink:string|null
}



let initialState:initialStateType = {
    profile: null,
    status:'',
    profileStatusUpdate:null,

    postData: [
        {
            massage: 'Hi, how are you?',
            id: '1',
            likesCounter: 0,
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'
        },
        {
            massage: 'How is youre',
            id: '2',
            likesCounter: 0,
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'
        },
        {
            massage: "It's my fist post ",
            id: '3',
            likesCounter: 0 ,
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png'
        },
    ]
}

const profileReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {
        case ADD_POST:
            let body = action.newPostBody
            return {
                ...state,
                postData: [...state.postData, {massage: body, id: '1', likesCounter: 0, avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'}]
            }

        case SET_USERS_PROFILE:
            return {...state,profile:action.profile}

        case GET_USER_STATUS:
            return {...state,status: action.status}

        case DELET_POST:
            return {...state,postData: state.postData.filter(p=> p.id != action.postId)}

        case SAVE_PHOTO_SUCCESS:
            return {...state,profile:{...state.profile,photos:action.photo}}

        case SAVE_PROFILE:
            return {...state,profileStatusUpdate:action.statusUpdate}


        default:
            return state
    }
}

type addPostACType ={
    type:typeof ADD_POST
    newPostBody:string
}

type setUserProfileACType={
    type:typeof SET_USERS_PROFILE
    profile:profileType

}

type setUsersStatusACType={
    type:typeof GET_USER_STATUS
    status:string

}

type deletePostACType={
    type:typeof DELET_POST
    postId:string

}

type savePhotoSuccessACType={
    type:typeof SAVE_PHOTO_SUCCESS
    photo:any
}

type saveProfileSuccessACType={
    type:typeof SAVE_PROFILE
    statusUpdate:string|null
}
export const addPost = (newPostBody:string):addPostACType => ({type: ADD_POST,newPostBody})
export const setUserProfile = (profile:profileType):setUserProfileACType => ({type: SET_USERS_PROFILE,profile})
export const setUsersStatus = (status:string):setUsersStatusACType => ({type: GET_USER_STATUS,status})
export const deletePost = (postId:string):deletePostACType =>({type:DELET_POST,postId})
export const savePhotoSuccess = (photo:any):savePhotoSuccessACType =>({type:SAVE_PHOTO_SUCCESS,photo})
export const saveProfileSuccess = (statusUpdate:string|null):saveProfileSuccessACType =>({type:SAVE_PROFILE,statusUpdate})

export const getUserProfile =(userId:string) => async(dispatch:any) =>{
   let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}

export const getUsersStatus =(userId:string) => async(dispatch:any)=>{
    let response = await profileAPI.getStatus(userId)
        dispatch(setUsersStatus(response.data))
}

export const updateUsersStatus =(status:string)=> async(dispatch:any)=>{
    let response = await profileAPI.updataStatus(status)
        if (response.data.resultCode===0){
            dispatch(setUsersStatus(status))
        }
}

export const savePhoto =(photo:any)=> async(dispatch:any)=>{

    let response = await profileAPI.savePhoto(photo)
        if (response.data.resultCode===0){
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
}

export const saveProfile =(formData:any)=> async(dispatch:any,getState:any)=>{
    const userId = getState().auth.id
    let response = await profileAPI.saveProfile(formData)
        if (response.data.resultCode===0){

            dispatch(getUserProfile(userId))
            dispatch(saveProfileSuccess('success'))
            dispatch(saveProfileSuccess(null))
        }else {
            dispatch(stopSubmit('ProfileEditForm',{_error:response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
}


export default profileReducer
