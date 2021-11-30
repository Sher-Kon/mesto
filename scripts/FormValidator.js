export class FormValidator {
  constructor(formName, inputs) {
    this._formName = formName;
    this._inputs = inputs;
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
    inputElement.classList.add("form__input_type_error");//input_type_error
    errorElement.classList.add("form__input-error_active");//input_error_active
    errorElement.textContent = errorMessage;
  }
  // Функция, которая удаляет класс с ошибкой 
  _hideInputError(errorElement, inputElement) {
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
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
  // Изменение стиля кнопки
  _toggleButtonState(inputList, buttonElement) {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.disabled = true;
      buttonElement.classList.add('button_inactive');
    } else {
      // иначе сделай кнопку активной
      buttonElement.disabled = false;
      buttonElement.classList.remove('button_inactive');
    }
  }

  // Функция, которая делает кнопку неактивной
  disableButtonState(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.add('button_inactive');
  }

  // обработчик ввода символа в инпут
  _checkInputEndToggleBtn(formName, inputsArr, bttnSubmit, inputSelector) {
    // Функция, которая проверяет валидность инпута
    const formElement = document.querySelector('.' + formName);
    const inputElement = formElement.querySelector(inputSelector);
    const errorElement = formElement.querySelector(inputSelector + "-error");
    this._checkInputValidity(errorElement, inputElement);
    // Изменение стиля кнопки при вводе символа
    const inputList = Array.from(formElement.querySelectorAll(inputsArr));
    const buttonElement = formElement.querySelector(bttnSubmit);
    this._toggleButtonState(inputList, buttonElement);
  }

  // полю ввода добавим слушатель события input
  _addedEventListeners = (formName, formElement, inputsArr, bttnSubmit, inputSelector) => {
    this.inputElementTitle = formElement.querySelector(inputSelector);
    this.inputElementTitle.addEventListener('input', () => {
      this._checkInputEndToggleBtn(formName, inputsArr, bttnSubmit, inputSelector);
    });
  };

  // Всем элементам формы добавим слушатели
  enableValidation = () => {
    // Найдём форму с указанным классом в DOM,
    this._formElement = document.querySelector('.' + this._formName);// edit-profile / bild-card
    // форме добавим слушатель события submit
    this._formElement.addEventListener('submit', function (evt) {
      // У формы отменим стандартное поведение
      evt.preventDefault();
    });
    this._inputs.forEach((item) => {
      // Kаждому полю ввода добавим слушатель события input
      this._addedEventListeners(this._formName, this._formElement,
        item.inputsArraySelector, item.buttnSubmitSelector, item.inputSelector);
    });
  };
}
