class FormValidator {
  constructor(input_type_error, input_error_active) {
    this._input_type_error = input_type_error;
    this._input_error_active = input_error_active;
    //alert('создание  FormValidator');
    console.log("constructor  FormValidator");
  }

  // Функция, которая добавляет класс с ошибкой
  _showInputError(formElement, inputElement, errorMessage) {
    this.errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");//input_type_error
    this.errorElement.classList.add("form__input-error_active");//input_error_active
    this.errorElement.textContent = errorMessage;
  }
  // Функция, которая удаляет класс с ошибкой 
  _hideInputError(formElement, inputElement) {
    this.errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    this.errorElement.classList.remove("form__input-error_active");
    this.errorElement.textContent = "";
  }

  // Функция, которая проверяет валидность инпута
  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  // Находит хотя бы один невалидный инпут
  _hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  }

  // Изменение стиля кнопки
  _toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(this.inputList)) {
      // сделай кнопку неактивной
      this.buttonElement.disabled = true;
      this.buttonElement.classList.add('button_inactive');
    } else {
      // иначе сделай кнопку активной
      this.buttonElement.disabled = false;
      this.buttonElement.classList.remove('button_inactive');
    }
  }

  // слушатель событий добавится всем полям ввода внутри элемента формы
  _setEventListeners = (formElement) => {
    // Находим все поля ввода внутри формы,
    // сделаем из них массив методом Array.from
    this.inputList = Array.from(formElement.querySelectorAll('.form__input'));
    this.buttonElement = formElement.querySelector('.form__submit');

    // Изменение стиля начальное
    this._toggleButtonState(this.inputList, this.buttonElement);

    // Обойдём все элементы массива inputList (поля ввода)
    inputList.forEach((inputElement) => {
      // каждому полю ввода добавим слушатель события input
      inputElement.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        this._checkInputValidity(formElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        this._toggleButtonState(this.inputList, this.buttonElement);
      });
    });
  };

  enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form'));

    // Переберём полученную коллекцию
    this.formList.forEach((formElement) => {
      // каждой форме добавим слушатель события submit
      this.formElement.addEventListener('submit', function (evt) {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });

      // Для каждой формы вызовем
      // обработчики отдельных филдсетов
      fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
      // У каждого филдсета каждому полю ввода добавим слушатель события input
      this.fieldsetList.forEach((fieldSet) => {
        this._setEventListeners(fieldSet);
      });
    });
  };

}

    // Создадим экземпляр 
const validator = new FormValidator();
    // Вызовем функцию
validator.enableValidation();

