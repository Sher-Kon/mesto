import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector, textImgSelector, logImgSelector) {
        super(popupSelector);
        this._textImg = this._popupElement.querySelector(textImgSelector);
        this._logImg = this._popupElement.querySelector(logImgSelector);
    }

    //нужно вставлять в попап картинку 
    //с src изображения и подписью к картинке
    open(cardElement) { super.open
        this._logImg.src = cardElement.querySelector('.element__img').src;
        this._logImg.alt = "На фотографии " + cardElement.querySelector('.element__txt').textContent;
        this._textImg.textContent = cardElement.querySelector('.element__txt').textContent;
        //
        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown",  this._handleEscClose);//.bind(this)
        // добавить слушатель Overlay
        document.addEventListener("click", this._handleOverlayClose);//.bind(this)
    }
}