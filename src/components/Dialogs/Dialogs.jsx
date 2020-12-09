
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react';



const Dialogs = (props) => {

        let newMessageElement = React.createRef();

        let addMessage = () => {
            props.addMessage();
        }

        let onMessageChange =() => {
            let text = newMessageElement.current.value;
            props.updateNewMessage(text);
        }
        
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(message => <Message message={message.message} />)}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement}
                    value = {props.dialogsPage.newMessageText} />
                <button onClick={addMessage} >Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;