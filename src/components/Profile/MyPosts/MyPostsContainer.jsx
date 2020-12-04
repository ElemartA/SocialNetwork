import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {


  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
      
        let onPostChange = (text) => {
          store.dispatch(updateNewPostActionCreator(text));
        }

      return <MyPosts updateNewPostText={onPostChange} 
                      addPost={addPost} 
                      posts={state.profilePage.posts} 
                      newPostText={state.profilePage.newPostText} />
              }     
                 }
      </StoreContext.Consumer>

  )
}

export default MyPostsContainer;