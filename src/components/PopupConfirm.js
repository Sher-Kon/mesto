import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
    constructor(popupSelector, handleSubmitPopup) {
        super(popupSelector);
        this._handleSubmitPopup = handleSubmitPopup;
        this._formElement = this._popupElement.querySelector(".form");// Находим форму в DOM
    }

    // Открытие попапа
    open(card) {
        super.open();
        this._card = card;
    }

    // Обработчик клика по Х-иконке закрытия, и добавляет обработчик сабмита    
    setEventListeners() {
        super.setEventListeners();
        // Добавляет обработчик сабмита
        this._formElement.addEventListener("submit", () => { this._handleSubmitPopup(this._card) });
    }
}