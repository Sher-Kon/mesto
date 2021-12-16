import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector, textImgSelector, logImgSelector) {
        super(popupSelector);
        this._textImg = this._popupElement.querySelector(textImgSelector);
        this._logImg = this._popupElement.querySelector(logImgSelector);
    }

    open(cardElement) {
        super.open();
        //нужно вставлять в попап картинку с src изображения и подписью к картинке
        this._logImg.src = cardElement.querySelector('.element__img').src;
        this._logImg.alt = "На фотографии " + cardElement.querySelector('.element__txt').textContent;
        this._textImg.textContent = cardElement.querySelector('.element__txt').textContent;
    }
}