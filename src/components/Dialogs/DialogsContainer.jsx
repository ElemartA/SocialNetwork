
import React from 'react';
import { connect } from 'react-redux';
import {updateNewMessageActionCreator, addMessageActionCreator} from '../../Redux/dialogReducer'
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text))
    })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;