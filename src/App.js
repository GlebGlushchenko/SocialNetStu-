import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Nav/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializedApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component{

    componentDidMount() {
        this.props.initializedApp()

    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className='container'>
                <div className='app__wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app__wrapper-content'>
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer  />}/>
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
        )};
    }

const mapStateToProps =(state)=>({
    initialized:state.app.initialized
})

export default compose(
    withRouter,
    connect (mapStateToProps,{initializedApp})

)(App)



