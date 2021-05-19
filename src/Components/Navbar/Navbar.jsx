import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends.jsx";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <nav className={s.menu}>
                <div>
                    <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={'/message'} activeClassName={s.active}>Message</NavLink>
                </div>
                <div>
                    <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to={'/setting'} activeClassName={s.active}>Setting</NavLink>
                </div>
            </nav>
            <Friends state={props.state}/>
        </div>
);
}

export default Navbar;