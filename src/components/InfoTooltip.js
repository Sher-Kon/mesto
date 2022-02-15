import React from 'react';
import './InfoTooltip.css';

// x-btn
function InfoTooltip({ isOpen, onClose, isOk }) {

    return (
        <div className={`infotool ${isOpen && 'infotool_opened'}`}>
            <div className="infotool__container">
                <h3 className="infotool__title">{isOk === true
                    ? "Inform OK"
                    : "Inform ERR"}
                </h3>
                <button onClick={onClose} className="infotool__x-btn" type="button"></button>
            </div>
        </div>
    );
}

export default InfoTooltip;