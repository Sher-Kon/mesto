import React from 'react';
import './LOG_IN.css';

function LOG_IN() {
    return (
        <div className="log_in">
            <h2>Вход</h2>

                <input type="url" placeholder="Email" id="url-input"
                    className="log-in-text"
                    name="urlInput" required />
                
                <input type="text" placeholder="Пароль" id="place-input"
                    className="log-in-text"
                    name="placeInput"
                    required />

            <button className="log-in-btn" type="submit">Войти</button>

        </div>
    )
}

export default LOG_IN; 