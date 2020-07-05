import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DailogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (<div className={classes.dialog}>
        <img className={classes.img} src={props.avatar} alt=""/>
        <NavLink className={classes.link} to={path} activeClassName={classes.active}>{props.name}</NavLink>

    </div>)
};
export default DailogItem;