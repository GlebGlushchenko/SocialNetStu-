import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sideBarReducer from './side-bar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
    dialogPage:dialogReducer,
    profilePage:profileReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

// let store = createStore(reducers,applyMiddleware(thunk))
window.__store__ = store

export default store