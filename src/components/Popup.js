
export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    // Открытие попапа
    open() {
        //открыть попап
        this._popupElement.classList.add("popup_opened");
        // добавить слушатель ESC
        document.addEventListener("keydown", this._handleEscClose);
        // добавить слушатель Overlay
        document.addEventListener("click", this._handleOverlayClose);
    }

    // Закрытие попапа
    close() {
        //закрыть попап
        this._popupElement.classList.remove("popup_opened");
        // снять слушатель Esc
        document.removeEventListener("keydown", this._handleEscClose);
        // добавить слушатель Overlay
        document.addEventListener("click", this._handleOverlayClose);
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

    // Добавляет слушатель клика X-иконке закрытия попапа
    setEventListeners() {
        const xButton = this._popupElement.querySelector(".x-btn");//кн.закрытия формы
        xButton.addEventListener("click", () => { this.close() });//закрыть попап
    }
}