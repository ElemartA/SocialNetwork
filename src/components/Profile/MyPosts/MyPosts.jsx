import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.myPost}>
      My Post
      <div>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        <button onClick={onAddPost} >Add post</button>
      </div>
      <div className={s.posts}>
        {props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)}
      </div>
    </div>

  )
}

export default MyPosts;