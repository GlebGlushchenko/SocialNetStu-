import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfile,
    getUsersStatus,
    savePhoto,
    saveProfile,
    updateUsersStatus
} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component{

    refreshProfile =()=>{
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.id
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUsersStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId  ){
            this.refreshProfile()
        }


    }

    render() {
        return (
            <div>
               <Profile {...this.props} saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status} profileStatusUpdate={this.props.profileStatusUpdate} updateUserStatus={this.props.updateUsersStatus} isOwner={!this.props.match.params.userId}/>
            </div>)
    }
};

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    id:state.auth.id,
    isAuth:state.auth.isAuth,
    status:state.profilePage.status,
    profileStatusUpdate:state.profilePage.profileStatusUpdate

})

export default compose(
    connect(mapStateToProps,{getUserProfile,getUsersStatus,updateUsersStatus,savePhoto,saveProfile}),
    withRouter
)(ProfileContainer)


