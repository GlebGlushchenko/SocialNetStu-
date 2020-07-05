import React from 'react';
import classes from './Post.module.css'



const Post = (props)=>{



    return(
        <div className={classes.item}>
            <img src={props.avatar} alt=""/>
            {props.massage}
            <div>
                <span>
                    <button>like</button>
                </span>
                <span > {props.likeCounter}</span>
            </div>
        </div>
    )
};
export default Post;

// {props.likeCounter}