import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; 

function Login(props) {
    return (
        <div className="log_in">

            <div className="log_in-header">
                <div className="log_in-logo"> </div>

                <Link to="/sign-up" className="log_in-link">Регистрация</Link>                
            </div>

            <h2>Вход</h2>

            <input type="url" placeholder="Email" id="url-input"
                className="log_in-text"
                name="urlInput" required />

            <input type="text" placeholder="Пароль" id="place-input"
                className="log_in-text"
                name="placeInput"
                required />

            <button className="log_in-btn" type="submit" onClick={props.onClick}>Войти</button>

        </div>
    )
}

export default Login; 