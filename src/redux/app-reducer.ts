
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS'


export type initialStateType ={
    initialized: boolean
}


const initialState:initialStateType = {
    initialized: false

}



const appReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            }

        default:
            return state
    }
}



type initializedSuccessType={
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess= ():initializedSuccessType =>({type:INITIALIZED_SUCCESS})


export const initializedApp=()=> async (dispatch:any)=>{
            await dispatch(getAuthUserData())
             dispatch(initializedSuccess())
}


export default appReducer
