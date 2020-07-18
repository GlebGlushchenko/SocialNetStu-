import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import yes from '../../../assets/images/yes.png'
import no from '../../../assets/images/criss-cross.png'
import {NavLink} from 'react-router-dom';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props)=>{
    const [editMode,setEditMode] = useState(false)
    const defaultAvatar ='https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'
    const bg ='https://www.glimmernet.com/wp-content/uploads/2019/01/network-dark-bg-02.jpg'

    useEffect(()=>{
            if(props.profileStatusUpdate === 'success'){
                setEditMode(false)
            }

    },[props.profileStatusUpdate])

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


    const onSubmit = (formData) => {
        props.saveProfile(formData)

    }

    return(
        <div>
            <div className={classes.wrappers}>
                <img className={classes.img} src= {bg} alt=""/>
                 <div className={classes.about_wrapper}>
                     <div>
                         <NavLink to={`/profile/${props.profile.userId}`}><img className={!props.profile.photos.large || !props.profile.photos.small ? classes.avatar_img:null} src={props.profile.photos.large || defaultAvatar} alt=""/></NavLink>
                     </div>
                     <div className={classes.uploadPhotoInput}>{props.isOwner && <input className={classes.input} onChange={(e)=>{onMainPhotoSelected(e)}} type={'file'}/> }</div>
                     {editMode
                         ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
                         :<ProfileData status={props.status} updateUserStatus={props.updateUserStatus} profile={props.profile} isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}}/>}

                 </div>
            </div>
        </div>
    )

}

const Contacts =({contactsTitle,contactsValue})=>{
    return <div className={classes.contactsLink}><b>{contactsTitle} : </b><a target={'_blank'} href={contactsValue}>{contactsValue}</a></div>
}

const ProfileData =(props)=>{
    return(
        <div>
            <div>
                <h2>{props.profile.fullName}</h2>
            </div>

            <div>
                <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>

            <div>
                <p>{!props.profile.aboutMe?`Lorem Ipsum`:props.profile.aboutMe}</p>
            </div>

            <div className={classes.contacts_wrapper}>
                {}
                <div className={classes.contact_link}>
                    <div><b>Contacts</b></div>
                    {
                        Object.keys(props.profile.contacts).filter(key => props.profile.contacts[key] !== null).map(key=>{
                            return <Contacts key={key} contactsTitle={key} contactsValue={props.profile.contacts[key]} />
                        })
                    }
                </div>
                <div className={classes.job_Search}>
                    <b>Поиск работы:</b>
                    <img className={classes.jobIcon} src={props.profile.lookingForAJob ? yes:no} alt=""/>
                </div>
            </div>


            <div>
                {props.profile.lookingForAJob ?<span className={classes.JobDescription}>Комментарий к сатаусу поиска работы : </span>:null}
                <span>{!props.profile.lookingForAJobDescription || props.profile.lookingForAJobDescription}</span>
            </div>
                {props.isOwner&& <div><button onClick={props.goToEditMode}>edit</button></div>}
        </div>
    )
}





export default ProfileInfo