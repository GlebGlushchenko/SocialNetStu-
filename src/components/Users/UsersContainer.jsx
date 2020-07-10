import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    follow, unFollow, getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowed,
    getFollowingIIsProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUser
} from '../../redux/users-selector';

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
        users:getUser(state),
        pageSize:getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followed:getFollowed(state),
        followingIsProgress:getFollowingIIsProgress(state)
    }
}



export default compose(
    connect(mapStateToProps,{setCurrentPage,getUsers,follow,unFollow})


)(UsersContainer)