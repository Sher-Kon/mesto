
// Функция, которая добавляет класс с ошибкой
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.classList.add("form__input-error_active");
  errorElement.textContent = errorMessage;
};
// Функция, которая удаляет класс с ошибкой 
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность инпута
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
// Находит хотя бы один невалидный инпут
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
};
// Изменение стиля кнопки
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.disabled = true;
    buttonElement.classList.add('button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.disabled = false;
    buttonElement.classList.remove('button_inactive');
  }
};
// слушатель событий добавится всем полям ввода внутри элемента формы
const setEventListeners = (formElement) => {
  // Находим все поля ввода внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  // Изменение стиля начальное
  toggleButtonState(inputList, buttonElement);
  // Обойдём все элементы массива inputList (поля ввода)
  inputList.forEach((inputElement) => {
    //console.log("input: "+inputElement);
    // каждому полю ввода добавим слушатель события input
    inputElement.addEventListener('input', function () {
      // Функция, которая проверяет валидность инпута
      checkInputValidity(formElement, inputElement);
      // Изменение стиля кнопки при вводе символа
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formElement) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем обработчики отдельных филдсетов
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    // У каждого филдсета каждому полю ввода добавим слушатель события input
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};

// Вызовем функцию
enableValidation();
