import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId && this.props.isAuth) {
            userId = this.props.auth
        } else if (!this.props.isAuth){
            userId = 2
        }
        this.props.getUserProfile(userId)

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
    auth:state.auth.id,
    isAuth:state.auth.isAuth
})


export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter
)(ProfileContainer)


