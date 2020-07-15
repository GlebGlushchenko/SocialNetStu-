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
    getPageSize, getportionSize,
    getTotalUsersCount, getUser
} from '../../redux/users-selector';

class UsersContainer extends React.Component{
    componentDidMount() {
        const {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage,pageSize)
    }

    onChangeToPage = (pag)=>{
        const {pageSize} = this.props
        this.props.getUsers(pag,pageSize)
    }

    render() {
        return<>
            {this.props.isFetching ? <Preloader  /> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onChangeToPage={this.onChangeToPage}
              users={this.props.users}
               followingIsProgress={this.props.followingIsProgress}
               follow={this.props.follow}
               unFollow={this.props.unFollow}
               portionSize={[this.props.portionSize]}
        />
        </>
    };
}

let mapStateToProps = (state)=>{
    return {
        users:getUser(state),
        pageSize:getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followed:getFollowed(state),
        followingIsProgress:getFollowingIIsProgress(state),
        portionSize:getportionSize(state)
    }
}

export default compose(
    connect(mapStateToProps,{setCurrentPage,getUsers,follow,unFollow})


)(UsersContainer)