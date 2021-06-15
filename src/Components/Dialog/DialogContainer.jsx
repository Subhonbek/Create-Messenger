import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/message-reducer";
import Dialog from "./Dialog";


const DialogContainer = (props) => {

    let btnSendClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let messageTextChange = (text) => {
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Dialog sendMessage={btnSendClick} updateMessage={messageTextChange}
                dialogData={props.state.dialogData}
                messageData={props.state.messageData}/>
    );
}

export default DialogContainer;