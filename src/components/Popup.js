export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    // Закрытие попапа клавишей Esc
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    // Закрытие по Overlay
    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    // Открытие попапа
    open() {
        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown", this._handleEscClose);
    }

    // Закрытие попапа
    close() {
        //закрыть попап
        this._popupElement.classList.remove("popup_opened");
        // снять слушатель Esc
        document.removeEventListener("keydown", this._handleEscClose);
    }

    // Добавляет слушатель клика X-иконке закрытия попапа
    setEventListeners() {
        const xButton = this._popupElement.querySelector(".x-btn");//кн-X
        // добавить слушатель X-btn
        xButton.addEventListener("click", () => { this.close() });
        // добавить слушатель Overlay
        this._popupElement.addEventListener("click", this._handleOverlayClose);
    }
}
