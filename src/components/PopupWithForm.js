import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitPopup, signOverlay) {
        super(popupSelector);
        this._handleSubmitPopup = handleSubmitPopup;
        this._signOverlay = signOverlay;
        this._formElement = this._popupElement.querySelector(".form");// Находим форму в DOM
    }


    // при закрытии попапа форма должна сбрасываться
    close() { super.close
        //закрыть попап
        this._popupElement.classList.remove("popup_opened");
        // снять слушатель Esc
        document.removeEventListener("keydown", this._handleEscClose);
        // снять слушатель Overlay
        document.removeEventListener("click", this._handleOverlayClose);
        // при закрытии, форма должна сбрасываться
        this._formElement.reset();
        //const inputList = this._getInputValues();
    }

    // Собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};
        const inputsArraySelector = '.form__input';
        this._inputList = Array.from(this._popupElement.querySelectorAll(inputsArraySelector));
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
        //return inputList;
    }

    // Добавляет обработчик клика по Х-иконке закрытия, и обработчик сабмита
    setEventListeners() {
        // Добавляет обработчик клика иконке закрытия
        const xButton = this._popupElement.querySelector(".x-btn");//кн.закрытия формы
        xButton.addEventListener("click", () => { this.close() });//закрыть попап
        // Добавляет обработчик сабмита
        this._formElement.addEventListener("submit", this._handleSubmitPopup);
    }
}