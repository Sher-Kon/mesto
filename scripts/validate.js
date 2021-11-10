// поля ввода профиля из index.js
//const nameInput = editProfileElement.querySelector(".popup__text_input_name");
//const jobInput = editProfileElement.querySelector(".popup__text_input_job");
const nameError = editProfileElement.querySelector(".input-error-name");
const jobError = editProfileElement.querySelector(".input-error-job");
// поля ввода карточки из bild-cards.js
//const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
//const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
const placeError = bildCardElement.querySelector(".input-error-place");
const urlError = bildCardElement.querySelector(".input-error-url");


// Функция, которая добавляет класс с ошибкой Name
const showNameError = (element, errorMessage) => {
  element.classList.add("popup__text_type_error");
  // 2. Установите errorMessage в качестве значения textContent для nameError.  
  nameError.textContent = errorMessage;
  // 3. Добавьте nameError класс form__input-error_active.
  nameError.classList.add("form__input-error_active");
};
// Функция, которая добавляет класс с ошибкой Job
const showJobError = (element, errorMessage) => {
    element.classList.add("popup__text_type_error");
    // 2. Установите errorMessage в качестве значения textContent для jobError.  
    jobError.textContent = errorMessage;
    // 3. Добавьте jobError класс form__input-error_active.
    jobError.classList.add("form__input-error_active");
  };
    // Функция, которая удаляет класс с ошибкой popup
    const hideInputError = (element) => {
      element.classList.remove("popup__text_type_error");
    };
    
// Функция, которая добавляет класс с ошибкой Place
const showPlaceError = (element, errorMessage) => {
    element.classList.add("bild-card__text_type_error");
    // 2. Установите errorMessage в качестве значения textContent для placeError.  
    placeError.textContent = errorMessage;
    // 3. Добавьте placeError класс form__input-error_active.
    placeError.classList.add("form__input-error_active");
  };
  // Функция, которая добавляет класс с ошибкой Url
  const showUrlError = (element, errorMessage) => {
      element.classList.add("bild-card__text_type_error");
      // 2. Установите errorMessage в качестве значения textContent для urlError.  
      urlError.textContent = errorMessage;
      // 3. Добавьте urlError класс form__input-error_active.
      urlError.classList.add("form__input-error_active");
    };
    // Функция, которая удаляет класс с ошибкой bild-card
const hideBildCardError = (element) => {
  element.classList.remove("bild-card__text_type_error");
};

// Функция, которая проверяет валидность поля "nameInfo"
const isValidName = () => {
  if (!nameInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showNameError(nameInput, nameInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(nameInput);
    nameError.textContent = "";
  }
};
// Функция, которая проверяет валидность поля "jobInfo"
const isValidJob = () => {
  if (!jobInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showJobError(jobInput, jobInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(jobInput);
    jobError.textContent = "";
  }
};
 
// Функция, которая проверяет валидность поля "placeInfo"
const isValidPlace = () => {
    //console.log(placeInput.validationMessage);//отладка
    if (!placeInput.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showPlaceError(placeInput, placeInput.validationMessage);
    } else {
      // Если проходит, скроем
      hideBildCardError(placeInput);
      placeError.textContent = "";
    }
  };
  // Функция, которая проверяет валидность поля "urlInfo"
  const isValidUrl = () => {
    if (!urlInput.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showUrlError(urlInput, urlInput.validationMessage);
    } else {
      // Если проходит, скроем
      hideBildCardError(urlInput);
      urlError.textContent = "";
    }
  };
  
// Вызовем функцию isValid на каждый ввод символа popup
nameInput.addEventListener('input', isValidName); 
jobInput.addEventListener('input', isValidJob); 
// Вызовем функцию isValid на каждый ввод символа bild-card
placeInput.addEventListener('input', isValidPlace); 
urlInput.addEventListener('input', isValidUrl); 
//console.log(nameInput);//отладка
