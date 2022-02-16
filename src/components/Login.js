import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

// АВТОРИЗАЦИЯ

function Login(props) {
    return (
        <div className="log_in">

            <div className="log_in-header">
                <div className="log_in-logo"> </div>

                <Link to="/sign-up" className="log_in-link">Регистрация</Link>
            </div>

            <h2>Вход</h2>

            <form onSubmit={props.onSubmit} className="log_in__form">
                <input type="email" placeholder="Email" value={props.email}
                    className="log_in-text" required />
                <input type="password" placeholder="Пароль" value={props.password}
                    className="log_in-text" required />
                <button className="log_in-btn" type="submit" >Войти</button>
            </form >

        </div>
    )
}

export default Login; 