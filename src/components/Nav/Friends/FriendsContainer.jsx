import React from 'react';
import FriendsItem from './FriendsItem/FriendsItem';
import Friends from './Friends';

import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

// const FriendsContainer = (props)=>{
//
//     return(
//         <StoreContext.Consumer>
//             {
//             (store)=>{
//                 let sideBar = store.getState().sideBar
//                 return <Friends  sideBar={sideBar}/>
//             }
//         }</StoreContext.Consumer>
//
//
//     )
// };

let mapStateToProps = (state)=>{
    return{
        sideBar:state.sideBar
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Friends);