import React from "react";
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';
import placeholderAvatar from '../../assets/images/1.png'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://static1.squarespace.com/static/5af39f2c2714e58851ccdf86/t/5b16a69f70a6ad59dcdc12f8/1528211106919/heart-logo.png?format=1500w" alt=""/>
            <div className={classes.loginBlock}>
                <img className={classes.loginAvata} src={!props.id?null:props.avatarLogin} alt=""/>
                {props.isAuth ? <p>{props.login}</p>:<NavLink className={classes.link} to='/login'>Login</NavLink>}
            </div>
        </header>)
};
export default Header;