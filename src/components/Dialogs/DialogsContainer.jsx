import React from 'react';
import {addMassageActionCreator, addUpdateNewMassageTextActionCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state)=>{
    return{
        dialogPage:state.dialogPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addMassage:()=>{
            dispatch(addMassageActionCreator())
        } ,
        UpdateNewMassageText:(text)=>{
            dispatch(addUpdateNewMassageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;

