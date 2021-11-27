//export { validatorEditProfile, validatorBildCard };
import { validatorEditProfile, validatorBildCard } from "./index.js";

export class FormValidator {
  constructor(formName) {
    this._formName = formName;
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
  checkInputValidity(errorElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(errorElement, inputElement, inputElement.validationMessage);
      //console.log("input  => NOvalid");
    } else {
      this._hideInputError(errorElement, inputElement);
      //console.log("input  => valid");
    }
  }

  // Изменение стиля кнопки
  toggleButtonState(inputList, buttonElement) {
    // Если есть хотя бы один невалидный инпут
    //console.log("char of toggleButtonState");//отладка
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

  // инкапсуляция - каждому полю ввода добавим слушатель события input
  _addedEventListeners = (formElement) => {
    // полиморфизм
    if (this._formName === 'edit-profile') {
      // слушатель событий добавится всем полям ввода внутри элемента формы EditProfile
      // полю ввода Title добавим слушатель события input
      this.inputElementTitle = formElement.querySelector('.input_title');
      this.inputElementTitle.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.edit-profile');//'.edit-profile'
        const inputElement = formElement.querySelector('.input_title');//'.popup__text_input_name'
        const errorElement = formElement.querySelector(".input_title-error");
        validatorEditProfile.checkInputValidity(errorElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.popup__btn-save');//'.form__submit'
        validatorEditProfile.toggleButtonState(inputList, buttonElement);
        //console.log("char of title editProfile");//отладка
      });
      // полю ввода Content добавим слушатель события input
      this.inputElementContent = formElement.querySelector('.input_content');
      this.inputElementContent.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.edit-profile');
        const inputElement = formElement.querySelector('.input_content');//'.popup__text_input_job'
        const errorElement = formElement.querySelector(".input_content-error");
        validatorEditProfile.checkInputValidity(errorElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.popup__btn-save');//'.popup__btn-save'
        validatorEditProfile.toggleButtonState(inputList, buttonElement);
        //console.log("char of content editProfile");//отладка
      });
    } else { // 'bild-card'
      // слушатель событий добавится всем полям ввода внутри элемента формы BildCard
      // полю ввода Title добавим слушатель события input
      this.inputElementTitle = formElement.querySelector('.input_title');
      this.inputElementTitle.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.bild-card');//'.edit-profile'
        const inputElement = formElement.querySelector('.input_title');//'.popup__text_input_name'
        const errorElement = formElement.querySelector(".input_title-error");
        validatorBildCard.checkInputValidity(errorElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.bild-card__btn-save');//'.form__submit'
        validatorBildCard.toggleButtonState(inputList, buttonElement);
        //console.log("char of title bildCard");//отладка
      });
      // полю ввода Content добавим слушатель события input
      this.inputElementContent = formElement.querySelector('.input_content');
      this.inputElementContent.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.bild-card');
        const inputElement = formElement.querySelector('.input_content');//'.popup__text_input_job'
        const errorElement = formElement.querySelector(".input_content-error");
        validatorBildCard.checkInputValidity(errorElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.bild-card__btn-save');//'.popup__btn-save'
        validatorBildCard.toggleButtonState(inputList, buttonElement);
        //console.log("char of content bildCard");//отладка
      });
    }
  };

  enableValidation = () => {
    // Найдём форму с указанным классом в DOM,
    this._formElement = document.querySelector('.' + this._formName);// edit-profile / bild-card
    // форме добавим слушатель события submit
    this._formElement.addEventListener('submit', function (evt) {
      // У формы отменим стандартное поведение
      evt.preventDefault();
      //console.log("нажали  СОХРАНИТЬ");//отладка
    });
    // Kаждому полю ввода добавим слушатель события input
    this._addedEventListeners(this._formElement);

    //console.log("enableValidation()  вызов");
  };
}
