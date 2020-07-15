import classes from './Users.module.css';
import userPhoto from '../../assets/images/avatar-367-456319.webp';
import React from 'react';
import {NavLink} from 'react-router-dom';


const SingleUser = ({us,followingIsProgress,unFollow,follow})=>{

    return(
        <div>
            <span className={classes.wrapperItemUser}>
                <div className={classes.avatarWrapper}>
                    <NavLink  to={`./profile/${us.id}`}>
                        <img className={classes.avatar} src={us.photos.small != null ? us.photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>
                    <div>{us.followed
                        ? <button className={classes.btnUnfollow} disabled={followingIsProgress.some(id => id === us.id)} onClick={()=>{unFollow(us.id)}}>Unfollow</button>
                        : <button className={classes.btnFollow} disabled={followingIsProgress.some(id => id === us.id)} onClick={() => {follow(us.id)}}>Follow</button>}
                </div>
                </div>
                <span className={classes.nameWrapper}>
                    <h2>{us.name}</h2>
                    <div>{us.status}</div>
                </span>
            </span>
        </div>)

}

export default SingleUser

