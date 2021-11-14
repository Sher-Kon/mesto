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
const nameError = editProfileElement.querySelector(".name-input-error");
const jobError = editProfileElement.querySelector(".job-input-error");

// Универсальные функции
function openPopup(element) {
  element.classList.add("popup_opened");
}
function closePopup(element) {
  //закрыть bild-card
  element.classList.remove("popup_opened");
}

// Закроем попап «Редактировать профиль» по кнопке ESC
function closeEditProfileOnEsc(evt) {
  if (evt.key === "Escape") {
    //console.log("Нажали — ESC");// для отладки
    closeEditProfile();//закрыть окно «Редактировать профиль»
  }
}
// Закроем попап «Редактировать профиль» кликом по оверлею
function closeEditProfileOnOverlay(evt) {
  if (evt.target.className === "popup edit-profile popup_opened") {
    //console.log("Нажали — OVERLAY EditProfile");// для отладки
    closeEditProfile();//закрыть окно «Редактировать профиль»
  }
}

// Обработчик открытия формы popup «Редактировать профиль»
function openEditProfile() {
  openPopup(editProfileElement);//открыть popup «Редактировать профиль»
  document.addEventListener("keydown", closeEditProfileOnEsc);
  // добавить слушатель Overlay
  document.addEventListener("click", closeEditProfileOnOverlay);
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  // Очистить инпуты 
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  //очистим сообщения валидатора
  nameError.textContent = "";
  jobError.textContent = "";
  hideError(editProfileElement, nameInput, "popup__text_type_error");
  hideError(editProfileElement, jobInput, "popup__text_type_error");
  //закрыть popup «Редактировать профиль»
  closePopup(editProfileElement);
    // снять слушатель Esc
  document.removeEventListener("keydown", closeEditProfileOnEsc);
  // снять слушатель Overlay
  document.removeEventListener("click", closeEditProfileOnOverlay);
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
