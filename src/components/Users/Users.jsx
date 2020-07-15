import classes from './Users.module.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import SingleUser from './SingleUser';


const Users = (props)=>{

    return(
        <div className={classes.pageWrapper}>
            <Paginator portionSize={props.portionSize} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage}  onChangeToPage={props.onChangeToPage}/>
            <hr className={classes.hr}/>
            {props.users.map(us=><SingleUser key={us.id} us={us} followingIsProgress={props.followingIsProgress} unFollow={props.unFollow} follow={props.follow}/>)}
        </div>
    )
}

export default Users

