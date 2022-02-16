import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

// РЕГИСТРАЦИЯ

function Register(props) {

    return (


        <div className="register">

            <div className="register-header">
                <div className="register-logo"> </div>
                <Link to="/cards" className="register-link">Войти</Link>
            </div>

            <h2>Регистрация</h2>

            <form onSubmit={props.onSubmit}  className="register__form">
                <input type="email" placeholder="Email" value={props.email}
                    className="register-text" required />
                <input type="password" placeholder="Пароль" value={props.password}
                    className="register-text" required />
                <button className="register-btn" type="submit" >Зарегистрироваться</button>
            </form>

            <p> Уже зарегистрированы? Войти </p>
        </div>
    )
}

export default Register; 