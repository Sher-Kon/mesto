import React from 'react';
import { Link } from 'react-router-dom'; 

//            <Link to="/sign-in" className="header__link" >Выйти</Link>

function Header(props) {
    return (
        <div className="header">
            <div className="header__logo"> </div>
            <div  className="header__email">
            <p>{props.email}</p>
            <button onClick={props.onExit} className="header__btn" type="button" >Выйти</button>
            </div>
        </div>
    );
}

export default Header;