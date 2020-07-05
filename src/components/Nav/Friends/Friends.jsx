import React from 'react';
import classes from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props)=>{

    let friends = props.sideBar.friendsData.map(f => <FriendsItem avatar={f.avatar} name={f.name} />)

    return(
        <div className={classes.friends}>
            <h2 className={classes.title}>Friends</h2>
            <div>
                {friends}
            </div>
        </div>
    )
};

export default Friends;