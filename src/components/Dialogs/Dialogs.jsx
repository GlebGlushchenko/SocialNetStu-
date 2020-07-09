import React from 'react';
import classes from './Dialogs.module.css';
import DailogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';


const Dialogs = (props) => {

    let dialogs = props.dialogPage.dialogData.map(dialogData => <DailogItem name={dialogData.name} id={dialogData.id} avatar={dialogData.avatar} key={dialogData.id}/>)
    let massages = props.dialogPage.massageData.map(massageData => <Massage massage={massageData.massage} id={massageData.id} avatar={massageData.avatar} key={massageData.id} />)


    const onSubmit =(formData)=>{
        props.addMassage(formData.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.massages}>
                {massages}
                <AddMessegeReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
};

const AddMassagmeForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component={'textarea'} placeholder={'Enter you new message...'}></Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

// const afterSubmit =(result)=>
//     reset('AddMessegeReduxForm')
// onSubmitSuccess: afterSubmit

const AddMessegeReduxForm = reduxForm({form:'addMessage'})(AddMassagmeForm)

export default Dialogs;