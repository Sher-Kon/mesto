import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__link" activeClassName="menu__link_active">Домой</NavLink>
      <NavLink to="/next" activeClassName="menu__link_active" className="menu__link">Первая страница</NavLink>
      <NavLink to="/about-me" activeClassName="menu__link_active" className="menu__link">Обо мне</NavLink>
      <NavLink to="/about-us" activeClassName="menu__link_active" className="menu__link">О нас</NavLink>
    </nav>
  )
}

export default NavBar;