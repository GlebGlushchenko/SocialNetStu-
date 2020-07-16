import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import yes from '../../../assets/images/yes.png'
import no from '../../../assets/images/criss-cross.png'
import {NavLink} from 'react-router-dom';

import ProfileStatusWithHook from './ProfileStatusWithHook';

const ProfileInfo = (props)=>{
    const defaultAvatar ='https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'
    const bg ='https://www.glimmernet.com/wp-content/uploads/2019/01/network-dark-bg-02.jpg'

    if(!props.profile){
        return (
            <Preloader />
        )
    }
    const onMainPhotoSelected =(e)=>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    let x = props.profile.contacts

    return(
        <div>
            <div className={classes.wrappers}>
                <img className={classes.img}
                     src= {bg}
                     alt=""/>
             <div className={classes.about_wrapper}>
                <div>
                    <NavLink to={`/profile/${props.profile.userId}`}><img className={classes.avatar_img} src={props.profile.photos.large || defaultAvatar} alt=""/></NavLink>
                </div>
                 <div>{props.isOwner && <input onChange={(e)=>{
                     onMainPhotoSelected(e)
                 }} type={'file'}/> }</div>
                <div>
                    <h2>{props.profile.fullName}</h2>
                </div>
                 <div>
                     <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
                 </div>
                <div>
                    <p>{!props.profile.aboutMe?`Lorem Ipsum`:props.profile.aboutMe}</p>
                </div>
            </div>
            <div className={classes.contacts_wrapper}>
                {}
                <div className={classes.contact_link}>
                  <div><a href={props.profile.contacts.vk}></a>VK</div>
                  <div><a href={props.profile.contacts.youtube}>You-Tube</a></div>
                  <div><a href={props.profile.contacts.instagram}>Instagram</a></div>
                  <div><a href={props.profile.contacts.twitter}>Twitter</a></div>
                  <div><a href={props.profile.contacts.website}>Website</a></div>
                  <div><a href={props.profile.contacts.facebook}>Facebook</a></div>
                </div>
                <div className={classes.job_Search}>
                    <span>Поиск работы:</span>
                    <img className={classes.jobIcon} src={props.profile.lookingForAJob ? yes:no} alt=""/>
                </div>
                <div>
                    {props.profile.lookingForAJob ?<span className={classes.JobDescription}>Комментарий к сатаусу поиска работы : </span>:null}

                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProfileInfo