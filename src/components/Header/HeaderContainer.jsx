import React from "react";
import Header from './Header';
import {connect} from 'react-redux';
import {getUserData, setUserAvatar, setUserData} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getUserData(this.props.id)

    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps =(state)=>{
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login,
        avatarLogin:state.auth.avatarLogin,
        id:state.auth.id

    }
}
export default connect (mapStateToProps,{setUserData,setUserAvatar,getUserData})(HeaderContainer);
