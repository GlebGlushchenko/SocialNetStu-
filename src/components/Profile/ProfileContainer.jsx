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


