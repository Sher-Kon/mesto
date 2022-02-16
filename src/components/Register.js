import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom'; 


function Register(props) {

    return (


        <div className="register">

            <div className="register-header">
                <div className="register-logo"> </div>
                <Link to="/cards" className="register-link">Войти</Link>                
            </div>

            <h2>Регистрация</h2>

            <input type="url" placeholder="Email" id="url-input"
                className="register-text"
                name="urlInput" required />

            <input type="text" placeholder="Пароль" id="place-input"
                className="register-text"
                name="placeInput"
                required />

            <button className="register-btn" type="submit" onClick={props.onClick}>Зарегистрироваться</button>

            <p> Уже зарегистрированы? Войти </p>
        </div>
    )
}

export default Register; 