import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import yes from '../../../assets/images/yes.png'
import no from '../../../assets/images/criss-cross.png'
import logo from '../../../assets/images/1.png'
import {NavLink} from 'react-router-dom';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props)=>{

    if(!props.profile){
        return (
            <Preloader />
        )
    }
    return(
        <div>
            <div className={classes.wrappers}>
                <img className={classes.img}
                     src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_86887171.jpg?crop=0,176,3032,1667&wid=4000&hei=2200&scl=0.758"
                     alt=""/>
             <div className={classes.about_wrapper}>
                <div>
                    <NavLink to={`/profile/${props.profile.userId}`}><img className={classes.avatar_img} src={!props.profile.photos.small? logo:props.profile.photos.small} alt=""/></NavLink>
                </div>
                <div>
                    <h2>{props.profile.fullName}</h2>
                </div>
                 <div>
                     <ProfileStatus status={'Hi my friends'} />
                 </div>
                <div>
                    <p>{!props.profile.aboutMe?`Lorem Ipsum`:props.profile.aboutMe}</p>
                </div>
            </div>
            <div className={classes.contacts_wrapper}>
                <div className={classes.contact_link}>
                  <div><a href="#">{props.profile.contacts.vk}</a></div>
                  <div><a href="#">{props.profile.contacts.youtube}</a></div>
                  <div><a href="#">{props.profile.contacts.instagram}</a></div>
                  <div><a href="#">{props.profile.contacts.twitter}</a></div>
                  <div><a href="#">{props.profile.contacts.website}</a></div>
                  <div><a href="#">{props.profile.contacts.facebook}</a></div>
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