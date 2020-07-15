import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utilite/validator';
import {Elements} from '../../common/FormControls/FormControls';


const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props) => {

    let posts = props.postData.map(postData => <Post massage={postData.massage} likeCounter={postData.likesCounter} avatar={postData.avatar} key={postData.id}/>)
    const onSubmit = (formData) => {
        props.addPost(formData.newPostBady)
    }

    return (

        <div className={classes.postsBlock}>
            <h1>My Posts</h1>
            <h2>New post</h2>
            <PostAddReduxForm onSubmit={onSubmit}/>
            <div className={classes.item}>
                {posts}
            </div>
        </div>
    )
});

const textarea = Elements('textarea')

const AddPostForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength10]} name={'newPostBady'} component={textarea} placeholder={'Enter you new post...'}></Field>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )

}


const PostAddReduxForm = reduxForm({form:'addPost'} )(AddPostForm)

export default MyPosts