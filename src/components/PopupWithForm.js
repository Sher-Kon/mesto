import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitPopup, signOverlay) {
        super(popupSelector);
        this._handleSubmitPopup = handleSubmitPopup;
        this._signOverlay = signOverlay;
    }

    // Открытие попапа
    open() {
        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown",  this._handleEscClose.bind(this));
        //document.addEventListener("keydown", closePopupOnEsc);
        // добавить слушатель Overlay
        document.addEventListener("click", this._handleOverlayClose.bind(this));
    }

    // при закрытии попапа форма должна сбрасываться
    close() {
        //закрыть попап
        this._popupElement.classList.remove("popup_opened");
        // снять слушатель Esc
        document.removeEventListener("keydown", this._handleEscClose.bind(this));
        // снять слушатель Overlay
        document.removeEventListener("click", this._handleOverlayClose.bind(this));
        // при закрытии, форма должна сбрасываться
        this._popupElement.reset;
        const inputList = this._getInputValues();
        inputList.forEach((item) => {
            // Kаждому полю ввода
            item.value = "" ;
            //console.log(item.value);//для отладки
          });
    }

    // Собирает данные всех полей формы
    _getInputValues() {
        const inputsArraySelector = '.form__input';
        const inputList = Array.from(this._popupElement.querySelectorAll(inputsArraySelector));
        //console.log(inputList);//для отладки
        return inputList;  
    }

    // Закрытие по Overlay this._signOverlay
    _handleOverlayClose(evt) {
        //console.log(this._signOverlay);
        if (evt.target.className === this._signOverlay) {//"popup bild-card popup_opened"
            this.close();
        }
    }

    // Добавляет обработчик клика по Х-иконке закрытия, и обработчик сабмита
    setEventListeners() {
        // Добавляет обработчик клика иконке закрытия
        const xButton = this._popupElement.querySelector(".x-btn");//кн.закрытия формы
        xButton.addEventListener("click", () => { this.close()});//закрыть попап
        // Добавляет обработчик сабмита
        const formElement = this._popupElement.querySelector(".form");// Находим форму в DOM
        formElement.addEventListener("submit", this._handleSubmitPopup);
    }
}