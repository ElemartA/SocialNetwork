import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';



// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }
      
//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostActionCreator(text));
//         }

//       return <MyPosts updateNewPostText={onPostChange} 
//                       addPost={addPost} 
//                       posts={state.profilePage.posts} 
//                       newPostText={state.profilePage.newPostText} />
//               }     
//                  }
//       </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (state) => {
  return ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {dispatch(updateNewPostActionCreator(text))}
  })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;