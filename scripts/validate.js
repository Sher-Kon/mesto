// поля ввода профиля из edit-profile.js
// const saveButton = editProfileElement.querySelector(".popup__btn-save");//кн. SAVE
// const nameInput = editProfileElement.querySelector(".popup__text_input_name");
// const jobInput = editProfileElement.querySelector(".popup__text_input_job");
// const nameError = editProfileElement.querySelector(".input-error-name");
// const jobError = editProfileElement.querySelector(".input-error-job");

// поля ввода карточки из bild-cards.js
// const bildBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн. bild-card
// const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
// const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
// const placeError = bildCardElement.querySelector(".input-error-place");
// const urlError = bildCardElement.querySelector(".input-error-url");

// Функция, которая добавляет класс с ошибкой
function  showError(element, errElement, errorMessage, modifier) {
  element.classList.add(modifier);
  errElement.textContent = errorMessage;
  errElement.classList.add("form__input-error_active");
};
// Функция, которая удаляет класс с ошибкой 
function  hideError(element, errElement, modifier) {
  element.classList.remove(modifier);
  errElement.classList.remove("form__input-error_active");
  errElement.textContent = "";
};

// Функция, которая проверяет валидность попапа EditProfile
function isValidEditProfile() {
  let nameValid = false;
  let jobValid = false;
  //проверяет валидность поля "nameInput"
  if (!nameInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(nameInput, nameError, nameInput.validationMessage, "popup__text_type_error");
    nameValid = false;
  } else {
    // Если проходит, скроем
    hideError(nameInput, nameError, "popup__text_type_error");
    nameValid = true;
  }
  //проверяет валидность поля "jobInput"
  if (!jobInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(jobInput, jobError, jobInput.validationMessage, "popup__text_type_error");
    jobValid = false;
  } else {
    // Если проходит, скроем
    hideError(jobInput, jobError, "popup__text_type_error");
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
    showError(placeInput, placeError, placeInput.validationMessage, "bild-card__text_type_error");
    placeValid = false;
  } else {
    // Если проходит, скроем
    hideError(placeInput, placeError, "bild-card__text_type_error");
    placeValid = true;
  }
  // проверяет валидность поля "urlInput"
  if (!urlInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showError(urlInput, urlError, urlInput.validationMessage, "bild-card__text_type_error");
    urlValid = false;
  } else {
    // Если проходит, скроем
    hideError(urlInput, urlError, "bild-card__text_type_error");
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
