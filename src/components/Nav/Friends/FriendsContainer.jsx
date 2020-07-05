import React from 'react';
import FriendsItem from './FriendsItem/FriendsItem';
import Friends from './Friends';

import {connect} from 'react-redux';

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

const FriendsContainer = connect(mapStateToProps)(Friends)



export default FriendsContainer;