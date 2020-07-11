import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Posts/MyPostsContainer';
import classes from './Profile.module.css'

const Profile = (props) => {

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <hr className={classes.hr}/>
            <MyPostsContainer/>
        </div>)
};

export default Profile;
