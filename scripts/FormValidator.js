

class FormValidator {
  constructor(formName, inputNameTitle, inputNameContent, btnName) {
    this._formName = formName;
    this._inputNameTitle = inputNameTitle;
    this._inputNameContent = inputNameContent;
    this._btnName = btnName;
  }

  // инкапсуляция - каждому полю ввода добавим слушатель события input
  _setEventListeners = (formElement) => {
    // полиморфизм
    if (this._formName === 'edit-profile') {
      // слушатель событий добавится всем полям ввода внутри элемента формы EditProfile
      // полю ввода Title добавим слушатель события input
      this.inputElementTitle = formElement.querySelector('.input_title');
      this.inputElementTitle.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.edit-profile');//'.edit-profile'
        const inputElement = formElement.querySelector('.input_title');//'.popup__text_input_name'
        checkInputValidity(formElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.popup__btn-save');//'.form__submit'
        toggleButtonState(inputList, buttonElement);
        //console.log("char of title editProfile");//отладка
      });
      // полю ввода Content добавим слушатель события input
      this.inputElementContent = formElement.querySelector('.input_content');
      this.inputElementContent.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.edit-profile');
        const inputElement = formElement.querySelector('.input_content');//'.popup__text_input_job'
        checkInputValidity(formElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.popup__btn-save');//'.popup__btn-save'
        toggleButtonState(inputList, buttonElement);
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
        checkInputValidity(formElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.bild-card__btn-save');//'.form__submit'
        toggleButtonState(inputList, buttonElement);
        //console.log("char of title bildCard");//отладка
      });
      // полю ввода Content добавим слушатель события input
      this.inputElementContent = formElement.querySelector('.input_content');
      this.inputElementContent.addEventListener('input', function () {
        // Функция, которая проверяет валидность инпута
        const formElement = document.querySelector('.bild-card');
        const inputElement = formElement.querySelector('.input_content');//'.popup__text_input_job'
        checkInputValidity(formElement, inputElement);
        // Изменение стиля кнопки при вводе символа
        const inputList = Array.from(formElement.querySelectorAll('.form__input'));
        const buttonElement = formElement.querySelector('.bild-card__btn-save');//'.popup__btn-save'
        toggleButtonState(inputList, buttonElement);
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
      this._setEventListeners(this._formElement);

    //console.log("enableValidation()  вызов");
  };
}

// Создадим экземпляр 
const validatorEditProfile = new FormValidator(
  'edit-profile', 'popup__text_input_name', 'popup__text_input_job', 'popup__btn-save');
// Вызовем функцию
validatorEditProfile.enableValidation();

// Создадим экземпляр 
const validatorBildCard = new FormValidator(
  'bild-card', 'bild-card__text_input_place', 'bild-card__text_input_url', 'bild-card__btn-save');
// Вызовем функцию
validatorBildCard.enableValidation();
