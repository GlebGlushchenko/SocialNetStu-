import classes from './Users.module.css';
import userPhoto from '../../assets/images/avatar-367-456319.webp';
import React from 'react';
import {NavLink} from 'react-router-dom';



const Users = (props)=>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages =[]

    for(let i =1;i<=pagesCount;i++){
        pages.push(i)
    }

    return(
        <div className={classes.pageWrapper}>
            <div className={classes.page}>
                {pages.map(pag => {
                    return <span className={props.currentPage === pag && classes.selectedPage}
                             onClick={(e)=>{
                             props.onChangeToPage(pag)}}>{pag}</span>})}
            </div>

            {props.users.map(us=><div key={us.id}>
            <span>
                <div>
                    <NavLink to={`./profile/${us.id}`}>
                        <img className={classes.avatar} src={us.photos.small != null ? us.photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>
                </div>
                <div>{us.followed
                    ? <button disabled={props.followingIsProgress.some(id => id === us.id)} onClick={()=>{props.unFollow(us.id)}}>Unfollow</button>
                    : <button disabled={props.followingIsProgress.some(id => id === us.id)} onClick={() => {props.follow(us.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <h2>{us.name}</h2>
                    <div>{us.status}</div>
                </span>
                <span>
                    {/*<div>{us.location.country}</div>*/}
                    {/*<div>{us.location.city}</div>*/}
                </span>
            </span>
                </div>)}
        </div>
    )
}

export default Users




// props.toggleIsFollowingIsProgress(true,us.id)
// followAPI.postFollow(us.id)
//     .then(data=>{
//         if(data.resultCode === 0){
//             props.followSuccess(us.id)
//         }
//         props.toggleIsFollowingIsProgress(false,us.id)
//     })




// props.toggleIsFollowingIsProgress(true,us.id)
// followAPI.deleteFolllow(us.id)
//     .then(data=>{
//         if(data.resultCode === 0){
//             props.unfollowSuccess(us.id)
//         }
//         props.toggleIsFollowingIsProgress(false,us.id)
//     })

