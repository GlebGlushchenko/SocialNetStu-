import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {setUserData} from '../../redux/auth-reducer';

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getUserProfile(this.props.id)

    }

    render() {
        return (
            <div>
               <Profile {...this.props} profile={this.props.profile}/>
            </div>)
    }
};

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    id:state.auth.id
})



export default connect(mapStateToProps,{setUserProfile,setUserData,getUserProfile})(withRouter(ProfileContainer)) ;




// if(this.props.id === null){
//     authAPI.requestAuth()
//         .then(data=>{
//             let {id,login,email} = data.data
//             this.props.setUserData(login,email,id)
//         }).then(data=>{
//             let userId = this.props.id
//             if(!userId){
//                 userId = 2
//             }
//             profileAPI.getProfile(userId)
//                 .then(data =>{
//                     return  this.props.setUserProfile(data)
//                 })
//         }
//
//     )
// }


