import React from "react";
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friendImgElement = props.state.friendData.map(f => <img src={f.friendImg} alt={'ico'}/>);
    let friendNameElement = props.state.friendData.map(n => (
            <div>
                <NavLink to={'/message/' + n.id}> {n.name} </NavLink>
            </div>
        )
    );

    return (
        <div>
            <div className={s.friends}>
                <span> Friend </span>
            </div>
            <div className={s.imgFriend}>
                {friendImgElement}
                {friendNameElement}
            </div>
        </div>
    );
}

export default Friends;