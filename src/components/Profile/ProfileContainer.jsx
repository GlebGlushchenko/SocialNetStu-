import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUsersStatus, updateUsersStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component{
    componentDidMount() {
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

    render() {
        return (
            <div>
               <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUsersStatus}/>
            </div>)
    }
};


let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    id:state.auth.id,
    isAuth:state.auth.isAuth,
    status:state.profilePage.status
})


export default compose(
    connect(mapStateToProps,{getUserProfile,getUsersStatus,updateUsersStatus}),
    withRouter
)(ProfileContainer)


