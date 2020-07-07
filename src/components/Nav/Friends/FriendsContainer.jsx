import React from 'react';
import FriendsItem from './FriendsItem/FriendsItem';
import Friends from './Friends';

import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(Friends)

const FriendsContainer = connect(mapStateToProps)(AuthRedirectComponent)



export default FriendsContainer;