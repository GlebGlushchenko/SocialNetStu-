import React from 'react';
import classes from './Dialogs.module.css';
import DailogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import {Field, reduxForm} from 'redux-form';
import {Elements, Textarea} from '../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../utilite/validator';


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
const maxLength10 = maxLengthCreator(100)
const textarea = Elements('textarea')
const AddMassagmeForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength10]} name={'newMessageBody'} component={textarea} placeholder={'Enter you new message...'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessegeReduxForm = reduxForm({form:'addMessage'})(AddMassagmeForm)

export default Dialogs;