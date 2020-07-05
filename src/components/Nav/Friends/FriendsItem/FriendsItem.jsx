import React from 'react';
import classes from './FriendsItem.module.css'

const FriendsItem =(props)=>{

    return(
        <div>
            <img className={classes.img} src={props.avatar} alt=""/>
            <div className={classes.name}>{props.name}</div>
        </div>
    )

}

export default FriendsItem;