
import React from 'react';
import { connect } from 'react-redux';
import {updateNewMessageActionCreator, addMessageActionCreator} from '../../Redux/dialogReducer'
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer> 
//             {(store) => {
//                 let state = store.getState();

//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
        
//                 let onMessageChange =(text) => {
//                     store.dispatch(updateNewMessageActionCreator(text));
//                 }
//            return <Dialogs addMessage={addMessage} 
//                      updateNewMessage={onMessageChange}
//                      dialogsPage={state.dialogsPage} />
//                     }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateNewMessage: (text) => {dispatch(updateNewMessageActionCreator(text))}
    })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;