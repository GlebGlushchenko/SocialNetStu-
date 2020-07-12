import React from 'react';
import classes from './Preloader.module.css'

const Preloader = ()=>{
    return(
        <div className={classes.das}>
        <div className={classes.lds_roller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>

    )
}


export default Preloader