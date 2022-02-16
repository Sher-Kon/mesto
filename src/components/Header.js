import React from 'react';
import { Link } from 'react-router-dom'; 


function Header() {
    return (
        <div className="header">
            <div className="header__logo"> </div>
            <Link to="/sign-in" className="header__link">Выйти</Link>                
        </div>
    );
}

export default Header;