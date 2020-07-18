import React from 'react';
import classes from './ProfileInfo.module.css';
import {creatorNewField} from '../../common/FormControls/FormControls';
import {Input} from '../../Login/Login';
import {reduxForm} from 'redux-form';
import {textarea} from '../Posts/MyPosts';


const ProfileDataForm =({handleSubmit,profile,error})=>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Full name : {creatorNewField("Full-name",'fullName', [],Input)}</h2>
            </div>

            <div>
                <b>About me :</b>
                {creatorNewField("About me",'aboutMe', [],textarea)}
            </div>

            <div className={classes.contacts_wrapper}>
                <div className={classes.job_Search}>
                    <b>Поиск работы:</b>
                    {creatorNewField("",'lookingForAJob', [],Input ,{type:'checkbox'})}
                </div>
            </div>

            <div>
                <span className={classes.JobDescription}>Комментарий к сатаусу поиска работы : </span>
                {creatorNewField("Комментарий",'lookingForAJobDescription', [],textarea)}
            </div>
            <div>

            <div className={classes.contact_link}>
                <div><b>Contacts :</b></div>
                {
                    Object.keys(profile.contacts).map(key=>{
                        return <div key={key.id}><b>{key}</b>{creatorNewField(key,'contacts.' + key,[],Input)}</div>
                    })
                }
            </div>

                <button>save</button>
            </div>
                {error && <div className={classes.error}>
                <div>{error}</div>
            </div>}
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form:'ProfileEditForm'})(ProfileDataForm)

export default ProfileDataFormReduxForm