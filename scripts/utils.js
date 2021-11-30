import { openPopup } from './index.js';
export {
    lookImgElement, txtImg, srcImg,
    openLookImg, toggleButtonState, checkInputValidity
};

//-------------------------------------------
// Функции для класса Card
//-------------------------------------------
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");

// Обработчик открытия формы look-img
function openLookImg() {
    openPopup(lookImgElement); //открыть lookImg
}
//-------------------------------------------
// Функции для класса FormValidator
//-------------------------------------------
// Находит хотя бы один невалидный инпут
function hasInvalidInput(inputList) {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
        // Обход массива прекратится и вся фунцкция
        // hasInvalidInput вернёт true
        return !inputElement.validity.valid;
    })
}
// Функция, которая добавляет класс с ошибкой
function showInputError(errorElement, inputElement, errorMessage) {
    inputElement.classList.add("form__input_type_error");//input_type_error
    errorElement.classList.add("form__input-error_active");//input_error_active
    errorElement.textContent = errorMessage;
}
// Функция, которая удаляет класс с ошибкой 
function hideInputError(errorElement, inputElement) {
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
}
// Функция, которая проверяет валидность инпута
function checkInputValidity(errorElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(errorElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(errorElement, inputElement);
    }
}
// Изменение стиля кнопки
function toggleButtonState(inputList, buttonElement) {
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
}
