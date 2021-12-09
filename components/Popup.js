
export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    // Открытие попапа
    open() {
        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown",  this._handleEscClose.bind(this));
        // добавить слушатель Overlay
        document.addEventListener("click", this._handleOverlayClose.bind(this));//closePopupOnOverlay
    }

    // Закрытие попапа
    close() {
        //закрыть попап
        this._popupElement.classList.remove("popup_opened");
        // снять слушатель Esc
        document.removeEventListener("keydown", this._handleEscClose.bind(this));
        // снять слушатель Overlay
        document.removeEventListener("click", this._handleOverlayClose.bind(this));//closePopupOnOverlay
    }

    // Закрытие попапа клавишей Esc
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    
    // Закрытие по Overlay
    _handleOverlayClose(evt) {
        if (evt.target.className === "popup edit-profile popup_opened") {
            this.close();
        }
    }

    // Добавляет слушатель клика X-иконке закрытия попапа
    setEventListeners() {
        const xButton = this._popupElement.querySelector(".x-btn");//кн.закрытия формы
        xButton.addEventListener("click", () => { this.close() });//закрыть попап
    }
}