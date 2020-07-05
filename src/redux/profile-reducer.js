import {authAPI, profileAPI} from '../api/api';
import {setUserData} from './auth-reducer';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'ADD-SET_USERS_PROFILE';

let initialState = {
    profile: null,

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
    ],
    newPostText: 'Hi, how are you?'
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText
            return {
                ...state,
                postData: [...state.postData, {massage: body, id: '0', likesCounter: 0, avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        case SET_USERS_PROFILE:
            return {...state,profile:action.profile}

        default:
            return state
    }
}
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE,profile})

export const getUserProfile =(usersId)=>{
    return (dispatch)=>{
        if(usersId === null){
            authAPI.requestAuth()
                .then(data=>{
                    let {id,login,email} = data.data
                    dispatch(setUserData(login,email,id))
                }).then(data=>{
                    let userId = usersId
                    if(!userId){
                        userId = 2
                    }
                    profileAPI.getProfile(userId)
                        .then(data =>{
                            return  dispatch(setUserProfile(data))
                        })
                }

            )
        }
    }
}

export default profileReducer
