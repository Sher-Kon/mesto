import React from 'react';
import { Link } from 'react-router-dom'; 


function Header(props) {
    return (
        <div className="header">
            <div className="header__logo"> </div>
            <div  className="header__email">
            <p>{props.email}</p>
            <Link to="/sign-in" className="header__link" >Выйти</Link>                
            </div>
        </div>
    );
}

export default Header;