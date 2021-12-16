export class FormValidator {
  constructor(settings, formName, inputs) {
    this._settings = settings;
    this._formName = formName;
    this._inputs = inputs;
    this._formElement = document.querySelector('.' + this._formName);// edit-profile / bild-card
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputs[0].inputsArraySelector));
    this._buttonElement = this._formElement.querySelector(this._inputs[0].buttnSubmitSelector);
  }

  // Находит хотя бы один невалидный инпут
  _hasInvalidInput(inputList) {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
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

  // Функция, которая делает кнопку неактивной
  disableButtonState() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._settings.buttonInactive);
  }
  // Функция, которая делает кнопку активной
  enableButtonState() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._settings.buttonInactive);
  }

  // Изменение стиля кнопки
  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(this._inputList)) {
      // сделай кнопку неактивной
      this.disableButtonState();
    } else {
      // иначе сделай кнопку активной
      this.enableButtonState();
    }
  }

  // обработчик ввода символа в инпут
  _checkInputEndToggleBtn(inputSelector) {
    // Функция, которая проверяет валидность инпута
    const inputElement = this._formElement.querySelector(inputSelector);
    const errorElement = this._formElement.querySelector(inputSelector + "-error");
    this._checkInputValidity(errorElement, inputElement);
    // Изменение стиля кнопки при вводе символа
    this._toggleButtonState();
  }

  // полю ввода добавим слушатель события input
  _addInputEventListener = (inputSelector) => {
    this.inputElementTitle = this._formElement.querySelector(inputSelector);
    this.inputElementTitle.addEventListener('input', () => {
      this._checkInputEndToggleBtn(inputSelector);
    });
  };

  // Kаждому инпуту добавим слушатель
  _setEventListeners() {
    // форме добавим слушатель события submit
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();// У формы отменим стандартное поведение
    });
    // Kаждому полю ввода добавим слушатель события input    
    this._inputs.forEach((item) => {
      this._addInputEventListener(item.inputSelector);
    });
  };

  // Функция, которая проверяет валидность инпутов
  enableValidation = () => {
    this._setEventListeners()
  };
  
  // Cброс ошибок у инпутов
  resetValidation() {
    this._inputs.forEach((item) => {
      const inputElement = this._formElement.querySelector(item.inputSelector);
      const errorElement = this._formElement.querySelector(item.inputSelector + "-error");
      this._hideInputError(errorElement, inputElement); //<==очищаем ошибки ==
    });
  }

}

