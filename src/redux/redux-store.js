import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sideBarReducer from './side-bar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk'

let reducers = combineReducers({
    dialogPage:dialogReducer,
    profilePage:profileReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunk))
window.store = store

export default store