import React from 'react';
import './SIGN_UP.css';

function SIGN_UP() {
    return (
        <div className="sign_up">
            <h2>Регистрация</h2>

            <input type="url" placeholder="Email" id="url-input"
                className="sign-up-text"
                name="urlInput" required />

            <input type="text" placeholder="Пароль" id="place-input"
                className="sign-up-text"
                name="placeInput"
                required />

            <button className="sign-up-btn" type="submit">Зарегистрироваться</button>

            <p>
                Уже зарегистрированы? Войти
            </p>
        </div>
    )
}

export default SIGN_UP; 