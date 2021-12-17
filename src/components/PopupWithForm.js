import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitPopup) {
        super(popupSelector);
        this._handleSubmitPopup = handleSubmitPopup;
        this._formElement = this._popupElement.querySelector(".form");// Находим форму в DOM
        this._inputList = Array.from(this._popupElement.querySelectorAll(".form__input"));
    }

    // при закрытии попапа форма должна сбрасываться
    close() {
        super.close();
        this._formElement.reset();
    }

    // Собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    retInputValues() {
        this._data = this._getInputValues();
        return this._data;
    }

    // Обработчик клика по Х-иконке закрытия, и добавляет обработчик сабмита
    setEventListeners() {
        super.setEventListeners();
        // Добавляет обработчик сабмита
        this._formElement.addEventListener("submit", this._handleSubmitPopup);
    }
}