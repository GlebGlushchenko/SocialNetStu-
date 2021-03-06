import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    getUsers,
     follow, unFollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onChangeToPage = (pag)=>{
        this.props.getUsers(pag,this.props.pageSize)
    }

    render() {
        return<>
            {this.props.isFetching ? <Preloader  /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onChangeToPage={this.onChangeToPage}
              users={this.props.users}
               followingIsProgress={this.props.followingIsProgress}
               follow={this.props.follow}
               unFollow={this.props.unFollow}
        />
        </>
    };
}

let mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followed:state.usersPage.users.followed,
        followingIsProgress:state.usersPage.followingIsProgress
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer)

<<<<<<< HEAD
export default connect(mapStateToProps,{setCurrentPage,getUsers,follow,unFollow})(UsersContainer)
=======
export default connect(mapStateToProps,{setCurrentPage,getUsers,follow,unFollow})(AuthRedirectComponent)
>>>>>>> samurai
