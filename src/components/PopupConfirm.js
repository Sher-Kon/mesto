import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
    constructor(popupSelector, handleConfirm) {
        super(popupSelector);
        this._handleConfirm = handleConfirm;
        this._btnElement = this._popupElement.querySelector(".confirm__btn-save");// Находим кнопку в DOM
    }

    // Открытие попапа
    open(card) {
        super.open();
        this._card = card;
    }

    // Обработчик клика по Х-иконке закрытия, и добавляет обработчик клика кнопки подтверждения    
    setEventListeners() {
        super.setEventListeners();
        // Добавляет обработчик клика кнопки
        this._btnElement.addEventListener("click", () =>  { this._handleConfirm(this._card) });//this._card.bind(this)
    }
}