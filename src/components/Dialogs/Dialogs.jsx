import React from 'react';
import classes from './Dialogs.module.css';
import DailogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import {Redirect} from 'react-router-dom';


const Dialogs = (props) => {

    let dialogs = props.dialogPage.dialogData.map(dialogData => <DailogItem name={dialogData.name} id={dialogData.id} avatar={dialogData.avatar} key={dialogData.id}/>)
    let massages = props.dialogPage.massageData.map(massageData => <Massage massage={massageData.massage} id={massageData.id} avatar={massageData.avatar} key={massageData.id} />)


    let addMassage = ()=>{
        props.addMassage()
    }
    let onMassageChange=(e)=>{
        let text = e.target.value
        props.UpdateNewMassageText(text)

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.massages}>
                {massages}
                <div>
                    <textarea onChange={onMassageChange} value={props.dialogPage.newMassageText} placeholder={'Enter new Massage'}/>
                    <div>
                        <button onClick={addMassage}>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;