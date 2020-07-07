import React from 'react';
import {addMassageActionCreator, addUpdateNewMassageTextActionCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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

let mapStateToProps = (state)=>{
    return{
        dialogPage:state.dialogPage,
    }
}




export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

