import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Nav/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {
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
                    </div>
                </div>
            </div>
            )};

export default App;

