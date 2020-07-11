import {authAPI, profileAPI} from '../api/api';
import {setUserData} from './auth-reducer';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'ADD-SET_USERS_PROFILE';
const GET_USER_STATUS ='GET_USER_STATUS'
const DELET_POST ='DELET_POST'



let initialState = {
    profile: null,
    status:'',

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


        default:
            return state
    }
}
export const addPost = (newPostBody) => ({type: ADD_POST,newPostBody})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE,profile})
export const setUsersStatus = (status) => ({type: GET_USER_STATUS,status:status})
export const deletePost = (postId) =>({type:DELET_POST,postId})

export const getUserProfile =(userId) => (dispatch) =>{
    profileAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response.data))
    })
}
export const getUsersStatus =(userId) =>(dispatch)=>{
    profileAPI.getStatus(userId).then(response =>{
        dispatch(setUsersStatus(response.data))
    })
}
export const updateUsersStatus =(status)=>(dispatch)=>{
    profileAPI.updataStatus(status).then(response =>{
        if (response.data.resultCode===0){
            dispatch(setUsersStatus(status))
        }
    })
}


export default profileReducer
