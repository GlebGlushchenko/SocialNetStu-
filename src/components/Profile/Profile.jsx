import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Posts/MyPostsContainer';
import classes from './Profile.module.css'

const Profile = ({profile,status,updateUserStatus}) => {

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
                <hr className={classes.hr}/>
            <MyPostsContainer/>
        </div>)
};

export default Profile;
