import React from "react";
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom';
// import Friends from './Friends/Friends';
// import FriendsItem from './Friends/FriendsItem/Friends';



const Nav = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/users">Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/settings">Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} className={classes.link} to="/fridends">Friends</NavLink>
            </div>
        </nav>
    )
};

export default Nav;