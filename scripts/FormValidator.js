import { toggleButtonState, checkInputValidity } from "./utils.js";
export class FormValidator {
  constructor(formName, inputs) {
    this._formName = formName;
    this._inputs = inputs;
  }
  // Функция, которая делает кнопку неактивной
  disableButtonState(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.classList.add('button_inactive');
  }
  // полю ввода добавим слушатель события input
  _addedEventListeners = (formName, formElement, inputsArr, bttnSubmit, inputSelector) => {
    this.inputElementTitle = formElement.querySelector(inputSelector);
    this.inputElementTitle.addEventListener('input', function () {
      // Функция, которая проверяет валидность инпута
      const formElement = document.querySelector('.' + formName);
      const inputElement = formElement.querySelector(inputSelector);
      const errorElement = formElement.querySelector(inputSelector + "-error");
      checkInputValidity(errorElement, inputElement);
      // Изменение стиля кнопки при вводе символа
      const inputList = Array.from(formElement.querySelectorAll(inputsArr));
      const buttonElement = formElement.querySelector(bttnSubmit);
      toggleButtonState(inputList, buttonElement);
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
