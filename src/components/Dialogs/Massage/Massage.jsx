import React from 'react';
import classes from './Massage.module.css';
const Massage = (props) => {
    return (<div className={classes.wrapper}>
            <img className={classes.img} src={props.avatar} alt=""/>
            <div className={classes.massage}> {props.massage}</div>
        </div>

    )
}

export default Massage