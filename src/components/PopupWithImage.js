import { Popup } from "./Popup.js";
import { txtImg, srcImg } from '../scripts/index.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    //нужно вставлять в попап картинку 
    //с src изображения и подписью к картинке
    open(cardElement) {
        srcImg.src = cardElement.querySelector('.element__img').src;
        srcImg.alt = "На фотографии " + cardElement.querySelector('.element__txt').textContent;
        txtImg.textContent = cardElement.querySelector('.element__txt').textContent;

        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown",  this._handleEscClose.bind(this));
        // добавить слушатель Overlay
        document.addEventListener("click", this._handleOverlayClose.bind(this));
    }
    // Закрытие по Overlay
    _handleOverlayClose(evt) {
        if (evt.target.className === "popup look-img popup_opened") {
            this.close();
        }
    }
}