import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.postData.map(postData => <Post massage={postData.massage} likeCounter={postData.likesCounter} avatar={postData.avatar} key={postData.id}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }


    return (

        <div className={classes.postsBlock}>My Post
            <h2>New post</h2>
            <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={classes.item}>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts