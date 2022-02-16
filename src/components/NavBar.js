import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__link" activeClassName="menu__link_active">Карточки</NavLink>
      <NavLink to="/sign-up" activeClassName="menu__link_active" className="menu__link">Регистрация</NavLink>
      <NavLink to="/sign-in" activeClassName="menu__link_active" className="menu__link">Авторизация</NavLink>
    </nav>
  )
}

export default NavBar;