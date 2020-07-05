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






// authAPI.requestAuth()
//     .then(data=>{
//         if(data.resultCode === 0){
//             let {id,login,email} = data.data
//             this.props.setUserData(login,email,id)
//             profileAPI.getProfile(this.props.id)
//                 .then(data=>{
//                     return this.props.setUserAvatar(data.photos.small)
//                 })
//         }
//     })