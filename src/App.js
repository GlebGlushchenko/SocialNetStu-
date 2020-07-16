import React, {Suspense} from 'react';
import './App.css';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Nav/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializedApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import {LoaderComponent} from './components/common/Preloader/LoaderComponent';

const DialogsContainer =React.lazy(()=>import('./components/Dialogs/DialogsContainer'))
const ProfileContainer =React.lazy(()=>import('./components/Profile/ProfileContainer'))
const UsersContainer =React.lazy(()=>import('./components/Users/UsersContainer'))


class App extends React.Component{
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <Suspense fallback={<LoaderComponent />}>
                <div className='container'>
                    <div className='app__wrapper'>
                        <HeaderContainer/>
                        <Nav/>
                        <div className='app__wrapper-content'>
                            <Route path='/profile/:userId?' render={ () => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                            <Route path='/users' render={ () => <UsersContainer />}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/fridends' render={ () => <FriendsContainer />}/>
                            <Route path='/login' render={ () => <Login />}/>
                        </div>
                    </div>
                </div>
            </Suspense>
        )};
    }

const mapStateToProps =(state)=>({
    initialized:state.app.initialized
})

const AppContainer =compose(
    withRouter,
    connect (mapStateToProps,{initializedApp})

)(App)

const SamuraiJSApp =(props)=>{
    return(
        <HashRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </React.StrictMode>
        </HashRouter>
    )
}

export default SamuraiJSApp