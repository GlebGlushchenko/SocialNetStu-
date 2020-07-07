import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.auth
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    auth:state.auth.id
})

export default connect(mapStateToProps,{getUserProfile})(withRouter(AuthRedirectComponent))


