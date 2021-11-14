// поля ввода профиля из edit-profile.js
// const saveButton = editProfileElement.querySelector(".popup__btn-save");//кн. SAVE
// const nameInput = editProfileElement.querySelector(".popup__text_input_name");
// const jobInput = editProfileElement.querySelector(".popup__text_input_job");
// const nameError = editProfileElement.querySelector(".name-input-error");
// const jobError = editProfileElement.querySelector(".job-input-error");

// поля ввода карточки из bild-cards.js
// const bildBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн. bild-card
// const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
// const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
// const placeError = bildCardElement.querySelector(".place-input-error");
// const urlError = bildCardElement.querySelector(".url-input-error");

// Функция, которая добавляет класс с ошибкой
function  showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.classList.add("form__input-error_active");
  errorElement.textContent = errorMessage;
};
// Функция, которая удаляет класс с ошибкой 
function  hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность инпута
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  //console.log("inputList : "+inputList);//отладка
  inputList.forEach((inputElement) => {
    //console.log("inputElement : "+inputElement);//отладка
    inputElement.addEventListener('input', function () {
      //console.log("formElement : "+formElement);//отладка
      //console.log("inputElement : "+inputElement);//отладка
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));
  //console.log("formList : "+formList);//отладка

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
    //console.log("formElement : "+formElement);//отладка
  });
};

// Вызовем функцию
enableValidation();

/*//========================================================
// жесткая конструкция

// Функция, которая проверяет валидность попапа EditProfile
function isValidEditProfile() {
  let nameValid = false;
  let jobValid = false;
  //проверяет валидность поля "nameInput"
  if (!nameInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(editProfileElement, nameInput, nameInput.validationMessage);
    nameValid = false;
  } else {
    // Если проходит, скроем
    hideError(editProfileElement, nameInput);//, "popup__text_type_error"
    nameValid = true;
  }
  //проверяет валидность поля "jobInput"
  if (!jobInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(editProfileElement, jobInput,jobInput.validationMessage);
    jobValid = false;
  } else {
    // Если проходит, скроем
    hideError(editProfileElement, jobInput);
    jobValid = true;
  }
  // проверяем активность кнопки
  if (nameValid && jobValid) {
    //console.log("кнопка активна");//отладка
    saveButton.classList.remove("popup__btn-save_no-active");
    // запустить обработчик
    formEditProfile.addEventListener("submit", formSubmitHandler);
  } else {
    //console.log("кнопка неактивна");//отладка
    saveButton.classList.add("popup__btn-save_no-active");
    // отменить обработчик
    formEditProfile.removeEventListener("submit", formSubmitHandler);
  }
};

// Функция, которая проверяет валидность попапа "BildCard"
function isValidBildCard() {
  let placeValid = false;
  let urlValid = false;
  // проверяет валидность поля "placeInput"
  if (!placeInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(bildCardElement, placeInput, placeInput.validationMessage);
    placeValid = false;
  } else {
    // Если проходит, скроем
    hideError(bildCardElement, placeInput);//, "bild-card__text_type_error"
    placeValid = true;
  }
  // проверяет валидность поля "urlInput"
  if (!urlInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(bildCardElement, urlInput, urlInput.validationMessage);
    urlValid = false;
  } else {
    // Если проходит, скроем
    hideError(bildCardElement, urlInput);
    urlValid = true;
  }
  // проверяем активность кнопки
  if (placeValid && urlValid) {
    //console.log("кнопка активна");//отладка
    bildBttn.classList.remove("bild-card__btn-save_no-active");
    bildBttn.classList.add("bild-card__btn-save_active");
    // запустить обработчик
    formbildCard.addEventListener("submit", bildCardSubmitHandler);
  } else {
    //console.log("кнопка неактивна");//отладка
    bildBttn.classList.add("bild-card__btn-save_no-active");
    bildBttn.classList.remove("bild-card__btn-save_active");
    // отменить обработчик
    formbildCard.removeEventListener("submit", bildCardSubmitHandler);
  }
};

// Вызовем функцию isValidPopup на каждый ввод символа EditProfile
nameInput.addEventListener("input", isValidEditProfile);
jobInput.addEventListener("input", isValidEditProfile);
// Вызовем функцию isValidBildCard на каждый ввод символа BildCard
placeInput.addEventListener("input", isValidBildCard);
urlInput.addEventListener("input", isValidBildCard);
*/