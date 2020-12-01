import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';



const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className={s.myPost}>
      My Post
      <div>
        <textarea onChange = {onPostChange} 
                  ref = {newPostElement} 
                  value = {props.newPostText} />
        <button onClick = {addPost} >Add post</button>
      </div>
      <div className={s.posts}>
        {props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)}
      </div>
    </div>

  )
}

export default MyPosts;