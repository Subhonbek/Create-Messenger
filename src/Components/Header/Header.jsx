import React from "react";
import s from './Header.module.css';

const Header = (props) => {
    let path_logo = 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f3/%D0%AD%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0_%D0%9A%D0%A4%D0%A3_%D1%81_2015.svg/220px-%D0%AD%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0_%D0%9A%D0%A4%D0%A3_%D1%81_2015.svg.png';
    return(
        <header className={s.header}>
            <img
                alt = 'logo'
                src = {path_logo}
            />
            <div >
                Login
            </div>
            <div >
                Language
            </div>
        </header>
    );
}

export default Header;
