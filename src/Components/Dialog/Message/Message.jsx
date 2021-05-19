import React from "react";
import s from './Message.module.css'


const Message = (props) => {
    let isMe = props.me;
    if (isMe) {
        return (
            <div>
                <div className={s.messages}>
                    <div className={s.myMessage}>
                        <span>{props.message}</span>
                        <img src={props.messageImg} alt={''}/>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className={s.messages}>
                    <div className={s.message}>
                        <img src={props.messageImg} alt={''}/>
                        <span>{props.message}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;