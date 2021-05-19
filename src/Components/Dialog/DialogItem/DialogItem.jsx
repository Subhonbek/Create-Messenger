import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) =>{
    let path = '/message/' + props.id;
    return(
        <div className={s.dialogItems}>
            <img src={props.dialogImg} alt="@"/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;