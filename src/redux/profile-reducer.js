import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';


const ADD_POST = 'network/profile/ADD-POST';
const SET_USERS_PROFILE = 'network/profile/ADD-SET_USERS_PROFILE';
const GET_USER_STATUS ='network/profile/GET_USER_STATUS'
const DELET_POST ='network/profile/DELET_POST'
const SAVE_PHOTO_SUCCESS ='network/profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE ='network/profile/SAVE_PROFILE'



let initialState = {
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

const profileReducer = (state = initialState, action) => {

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
export const addPost = (newPostBody) => ({type: ADD_POST,newPostBody})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE,profile})
export const setUsersStatus = (status) => ({type: GET_USER_STATUS,status:status})
export const deletePost = (postId) =>({type:DELET_POST,postId})
export const savePhotoSuccess = (photo) =>({type:SAVE_PHOTO_SUCCESS,photo})
export const saveProfileSuccess = (statusUpdate) =>({type:SAVE_PROFILE,statusUpdate})

export const getUserProfile =(userId) => async(dispatch) =>{
   let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}

export const getUsersStatus =(userId) => async(dispatch)=>{
    let response = await profileAPI.getStatus(userId)
        dispatch(setUsersStatus(response.data))
}

export const updateUsersStatus =(status)=> async(dispatch)=>{
    let response = await profileAPI.updataStatus(status)
        if (response.data.resultCode===0){
            dispatch(setUsersStatus(status))
        }
}

export const savePhoto =(photo)=> async(dispatch)=>{
    let response = await profileAPI.savePhoto(photo)
        if (response.data.resultCode===0){
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
}

export const saveProfile =(formData)=> async(dispatch,getState)=>{
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
