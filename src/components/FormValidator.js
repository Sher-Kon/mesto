export class FormValidator {
  constructor(settings) {
    this._settings = settings;
    this._formElement = document.querySelector(this._settings.formSelector);// edit-profile / bild-card
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  // Находит хотя бы один невалидный инпут
  _hasInvalidInput() {
    // проходим по этому массиву методом some
    return this._inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  }
  // Функция, которая добавляет класс с ошибкой
  _showInputError(errorElement, inputElement, errorMessage) {
    inputElement.classList.add(this._settings.inputTypeError);
    errorElement.classList.add(this._settings.inputActiveError);
    errorElement.textContent = errorMessage;
  }
  // Функция, которая удаляет класс с ошибкой 
  _hideInputError(errorElement, inputElement) {
    inputElement.classList.remove(this._settings.inputTypeError);
    errorElement.classList.remove(this._settings.inputActiveError);
    errorElement.textContent = "";
  }
  // Функция, которая проверяет валидность инпута
  _checkInputValidity = (errorElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(errorElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(errorElement, inputElement);
    }
  }

  // Cброс ошибок у инпутов
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      // По идентификатору элемента найдем элемент поля эррора
      const id = inputElement.id;
      const errorElement = this._formElement.querySelector("." + id + "-error");
      this._hideInputError(errorElement, inputElement); //<==очищаем ошибки ==
    });
  }

  // Функция, которая делает кнопку неактивной
  disableButtonState() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._settings.buttonInactive);
  }
  // Функция, которая делает кнопку активной
  enableButtonState() {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._settings.buttonInactive);
  }

  // Изменение стиля кнопки
  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this.disableButtonState();
    } else {
      // иначе сделай кнопку активной
      this.enableButtonState();
    }
  }

  // обработчик ввода символа в инпут (передаем элемент DOM)
  _findErrCheckInputAndToggleBtn(inputElement) {
    // По идентификатору элемента найдем элемент поля эррора
    const id = inputElement.id;
    const errorElement = this._formElement.querySelector("." + id + "-error");
    // Проверим валидность инпута
    this._checkInputValidity(errorElement, inputElement);
    // Изменение стиля кнопки при вводе символа
    this._toggleButtonState();
  }

  // полю ввода добавим слушатель события input 
  _addInputEventListener = (inputElement) => {
    inputElement.addEventListener('input', () => {
      this._findErrCheckInputAndToggleBtn(inputElement);
    });
  };

  // Kаждому инпуту и форме добавим слушатель
  _setEventListeners() {
    // форме добавим слушатель события submit
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();// У формы отменим стандартное поведение
    });    
    // Kаждому полю ввода добавим слушатель события input    
    this._inputList.forEach((inputElementItem) => {
      this._addInputEventListener(inputElementItem);
    });
  };

  // Функция, которая проверяет валидность инпутов
  enableValidation = () => {
    this._setEventListeners()
  };

}
