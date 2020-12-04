
import React from 'react';
import {updateNewMessageActionCreator, addMessageActionCreator} from '../../Redux/dialogReducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

        

    return (
        <StoreContext.Consumer> 
            {(store) => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
        
                let onMessageChange =(text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                }
           return <Dialogs addMessage={addMessage} 
                     updateNewMessage={onMessageChange}
                     dialogsPage={state.dialogsPage} />
                    }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;