import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';


const MyPosts = (props) => {

    let posts = props.postData.map(postData => <Post massage={postData.massage} likeCounter={postData.likesCounter} avatar={postData.avatar} key={postData.id}/>)


    const onSubmit = (formData) => {
        props.addPost(formData.newPostBady)
    }


    return (

        <div className={classes.postsBlock}>My Post
            <h2>New post</h2>
            <PostAddReduxForm onSubmit={onSubmit}/>
            <div className={classes.item}>
                {posts}
            </div>
        </div>
    )
};



const AddPostForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostBady'} component={'textarea'} placeholder={'Enter you new post...'}></Field>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )

}


const PostAddReduxForm = reduxForm({form:'addPost'} )(AddPostForm)

export default MyPosts