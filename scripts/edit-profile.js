// элементы DOM на странице
const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameInfo = content.querySelector(".profile__info-name");
const jobInfo = content.querySelector(".profile__info-job");
// popup «Редактировать профиль»
const editProfileElement = document.querySelector(".edit-profile");//popup
const nameInput = editProfileElement.querySelector(".popup__text_input_name");
const jobInput = editProfileElement.querySelector(".popup__text_input_job");
const closeButton = editProfileElement.querySelector(".popup__btn-close");//кн.закрытия формы
const formEditProfile = editProfileElement.querySelector(".form");// Находим форму в DOM

// Универсальные функции попапа
function openPopup(element) {
  element.classList.add("popup_opened");
}
function closePopup(element) {
  //закрыть попап
  element.classList.remove("popup_opened");
}

// Закроем попап «Редактировать профиль» по кнопке ESC
function closeEditProfileOnEsc(evt) {
  if (evt.key === "Escape") {
    closeEditProfile();//закрыть окно «Редактировать профиль»
  }
}
// Закроем попап «Редактировать профиль» кликом по оверлею
function closeEditProfileOnOverlay(evt) {
  if (evt.target.className === "popup edit-profile popup_opened") {
    closeEditProfile();//закрыть окно «Редактировать профиль»
  }
}

// Обработчик открытия формы popup «Редактировать профиль»
function openEditProfile() {
  // Загрузить инпуты 
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  //открыть popup «Редактировать профиль»
  openPopup(editProfileElement);
  // добавить слушатель ESC
  document.addEventListener("keydown", closeEditProfileOnEsc);
  // добавить слушатель Overlay
  document.addEventListener("click", closeEditProfileOnOverlay);
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
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
formEditProfile.addEventListener("submit", formSubmitHandler);
// Кнопки попапа «Редактировать профиль»
editButton.addEventListener("click", openEditProfile);//открыть попап
closeButton.addEventListener("click", closeEditProfile);//закрыть попап
