import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Posts/MyPostsContainer';
import classes from './Profile.module.css'

const Profile = ({profile,status,updateUserStatus,isOwner,savePhoto}) => {

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}/>
                <hr className={classes.hr}/>
            <MyPostsContainer/>
        </div>)
};

export default Profile;
