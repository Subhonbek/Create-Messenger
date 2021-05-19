import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/message-reducer";




const Dialog = (props) => {

    let dialogElement = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} dialogImg={d.dialogImg}/>);
    let messageElement = props.state.messageData.map(m => <Message messageImg={m.messageImg} message={m.message} me={m.me}/>);

    let newMessageElement = React.createRef();

    let btnSendClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let messageTextChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogElement}
                </div>
                <div>
                    {messageElement}
                </div>
                <div>

                </div>
                <div className={s.message}>
                    <textarea onChange={ messageTextChange } ref={ newMessageElement } value={props.state.messageText}/>
                </div>
                <div>

                </div>
                <div className={s.btnSend}>
                    <button onClick={ btnSendClick }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;