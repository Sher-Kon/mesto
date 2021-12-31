import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
    constructor(popupSelector, handleConfirm) {
        super(popupSelector);
        this._handleConfirm = handleConfirm;
    }

    // Открытие попапа
    open(card) {
        super.open();
        this._card = card;
        //console.log("открыли попап");
        //console.log("id: "+this._card._cardID);//проверка контекста
    }

    // Обработчик клика по Х-иконке закрытия, и добавляет обработчик клика кнопки подтверждения    
    setEventListeners() {
        super.setEventListeners();
        const btnConfirm = this._popupElement.querySelector(".confirm__btn");// Находим кнопку в DOM
        // Добавляем обработчик клика кнопки
        btnConfirm.addEventListener("click", () =>  { this._handleConfirm(this._card) });
    }
}