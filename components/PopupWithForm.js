export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitPopup) {
        super(popupSelector);
        this._handleSubmitPopup = handleSubmitPopup;
    }

    // при закрытии попапа форма должна сбрасываться
    close() {

    }

    // Собирает данные всех полей формы
    _getInputValues() {

    }

    // Добавляет обработчик клика иконке закрытия, 
    // и обработчик сабмита
    setEventListeners() {

    }
}