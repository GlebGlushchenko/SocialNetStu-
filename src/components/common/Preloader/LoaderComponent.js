import React from 'react';
import classes from './LoaderComponent.module.css'

export const LoaderComponent = ()=>{
    return(
        <div className={classes.loaderWrapper}>
        <div className={classes.lds_facebook}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}