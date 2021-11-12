// элементы DOM на странице
const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameInfo = content.querySelector(".profile__info-name");
const jobInfo = content.querySelector(".profile__info-job");
// popup
const editProfileElement = document.querySelector(".edit-profile");//popup
const nameInput = editProfileElement.querySelector(".popup__text_input_name");
const jobInput = editProfileElement.querySelector(".popup__text_input_job");
const closeButton = editProfileElement.querySelector(".popup__btn-close");//кн.закрытия формы
const saveButton = editProfileElement.querySelector(".popup__btn-save");//кн. SAVE
const formEditProfile = editProfileElement.querySelector(".form");// Находим форму в DOM
// для валидатора
const nameError = editProfileElement.querySelector(".input-error-name");
const jobError = editProfileElement.querySelector(".input-error-job");

// Универсальные функции
function openPopup(element) {
  element.classList.add("popup_opened");
}
function closePopup(element) {
  element.classList.remove("popup_opened");
}

// Обработчик открытия формы popup «Редактировать профиль»
function openEditProfile() {
    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;
    openPopup(editProfileElement);//открыть popup «Редактировать профиль»
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
    closePopup(editProfileElement);//закрыть popup «Редактировать профиль»
}
// Обработчик «отправки» формы «Редактировать профиль»
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Вставьте новые значения с помощью textContent
    nameInfo.textContent = nameInput.value;
    jobInfo.textContent = jobInput.value;    
    // Закроем форму
    closeEditProfile();//закрыть окно «Редактировать профиль»
}
// Прикрепляем обработчик к форме «Редактировать профиль»:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener("submit", formSubmitHandler);
// Кнопки попапа «Редактировать профиль»
editButton.addEventListener("click", openEditProfile);//открыть попап
closeButton.addEventListener("click", closeEditProfile);//закрыть попап
