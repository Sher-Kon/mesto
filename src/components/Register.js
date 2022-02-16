import React from 'react';
import './Register.css';

function SIGN_UP() {
    return (
        <div className="register">
            <h2>Регистрация</h2>

            <input type="url" placeholder="Email" id="url-input"
                className="register-text"
                name="urlInput" required />

            <input type="text" placeholder="Пароль" id="place-input"
                className="register-text"
                name="placeInput"
                required />

            <button className="register-btn" type="submit">Зарегистрироваться</button>

            <p>
                Уже зарегистрированы? Войти
            </p>
        </div>
    )
}

export default SIGN_UP; 