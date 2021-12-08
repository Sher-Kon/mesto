import { closePopupOnEsc, closePopupOnOverlay } from '../scripts/utils.js';
export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    // Открытие попапа
    open() {
        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown", closePopupOnEsc);
        // добавить слушатель Overlay
        document.addEventListener("click", closePopupOnOverlay);
    }

    // Закрытие попапа
    close() {
        //закрыть попап
        this._popupElement.classList.remove("popup_opened");
        // снять слушатель Esc
        document.removeEventListener("keydown", closePopupOnEsc);
        // снять слушатель Overlay
        document.removeEventListener("click", closePopupOnOverlay);
    }

    // Закрытие попапа клавишей Esc
    _handleEscClose() {

    }

    // Добавляет слушатель клика X-иконке закрытия попапа
    setEventListeners() {
        const xButton = this._popupElement.querySelector(".x-btn");//кн.закрытия формы
        xButton.addEventListener("click", () => { this.close()});//закрыть попап
    }
}