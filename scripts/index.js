import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js"
export { validatorEditProfile, validatorBildCard };
export { txtImg, srcImg, openLookImg };
//--------------------------------------------------------
// Создадим экземпляр 
const validatorEditProfile = new FormValidator('edit-profile');
// Вызовем функцию проверки валидации EditProfile
validatorEditProfile.enableValidation();
// Создадим экземпляр 
const validatorBildCard = new FormValidator('bild-card');
// Вызовем функцию проверки валидации BildCard
validatorBildCard.enableValidation();
//--------------------------------------------------------
// Универсальные функции попапа
//--------------------------------------------------------
function openPopup(element) {
  //открыть попап
  element.classList.add("popup_opened");
  // добавить слушатель ESC
  document.addEventListener("keydown", closePopupOnEsc);
  // добавить слушатель Overlay
  document.addEventListener("click", closePopupOnOverlay);
}

function closePopup(element) {
  //закрыть попап
  element.classList.remove("popup_opened");
  // снять слушатель Esc
  document.removeEventListener("keydown", closePopupOnEsc);
  // снять слушатель Overlay
  document.removeEventListener("click", closePopupOnOverlay);
}

// Закроем попап по кнопке ESC
function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    switch (evt.target.className) {
      case "profile__info-edit-btn":
        closeEditProfile();//закрыть окно «Редактировать профиль»
        break
      case "profile__add-btn":
        closeBildCard();//закрыть окно «BildCard»
        break
      case "element__img-btn":
        closeLookImg();//закрыть окно «Смотреть картинку»
        break
    }
  }
}

// Закроем попап кликом по оверлею
function closePopupOnOverlay(evt) {
  switch (evt.target.className) {
    case "popup edit-profile popup_opened":
      closeEditProfile();//закрыть окно «Редактировать профиль»
      break
    case "popup bild-card popup_opened":
      closeBildCard();//закрыть окно «BildCard»
      break
    case "popup look-img popup_opened":
      closeLookImg();//закрыть окно «Смотреть картинку»
      break
  }
}
//--------------------------------------------------------
// EditProfile popup
//--------------------------------------------------------
// элементы DOM на странице
const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameInfo = content.querySelector(".profile__info-name");
const jobInfo = content.querySelector(".profile__info-job");
// EditProfile popup «Редактировать профиль»
const editProfileElement = document.querySelector(".edit-profile");//popup
const nameInput = editProfileElement.querySelector(".popup__text_input_name");
const jobInput = editProfileElement.querySelector(".popup__text_input_job");
const closeButton = editProfileElement.querySelector(".popup__btn-close");//кн.закрытия формы
const formEditProfile = editProfileElement.querySelector(".form");// Находим форму в DOM

// Обработчик открытия формы popup «Редактировать профиль»
function openEditProfile() {
  // Загрузить инпуты из профиля
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  //открыть popup «Редактировать профиль»
  openPopup(editProfileElement);
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  closePopup(editProfileElement);
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

//--------------------------------------------------------
// bildCard popup
//--------------------------------------------------------
// элементы DOM на странице
const addButton = document.querySelector(".profile__add-btn");
// bildCard popup
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
const closeBttn = bildCardElement.querySelector(".bild-card__btn-close");//кн.закрытия формы bild-card
const bildCardBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн. создания card
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement

// Обработчик открытия формы bild-card
function openBildCard() {
  const inputList = Array.from(bildCardElement.querySelectorAll('.form__input'));
  validatorBildCard.toggleButtonState(inputList, bildCardBttn);
  openPopup(bildCardElement); //открыть bildCard
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  closePopup(bildCardElement);
}
// Обработчик «отправки» формы bild-card
function bildCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const place = placeInput.value;
  const url = urlInput.value;
  if (url !== '') {
    // Создадим экземпляр карточки
    const cardADD = new Card(place, url, "element-card");
    // Создаём элемент DOM
    const cardElementADD = cardADD.generateCard();
    // Добавляем в DOM (section class="elements")
    document.querySelector('.elements').prepend(cardElementADD);//добавить в начало 
  }
  // Очистить инпуты для новой карточки
  placeInput.value = "";
  urlInput.value = "";
  // Сделаем кнопку неактивной
  bildCardBttn.disabled = true;
  bildCardBttn.classList.add('button_inactive');
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
}

// форма bild-card:
// Кнопка - «создать»
formbildCard.addEventListener("submit", bildCardSubmitHandler);
// Кнопка - Х -закрыть  окно "Новое место"
closeBttn.addEventListener("click", closeBildCard);
// Кнопка « + » (открыть окно "Новое место")
addButton.addEventListener("click", openBildCard);

//--------------------------------------------------------
// lookImg popup
//--------------------------------------------------------
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");
const closelookImg = lookImgElement.querySelector(".look-img__btn-close");//кн.закрытия формы lookImg
const formlookImg = lookImgElement.querySelector(".form");// Находим форму в DOM in lookImgElement

// Обработчик открытия формы look-img
function openLookImg() {
  openPopup(lookImgElement); //открыть lookImg
}
// Обработчик закрытия формы look-img
function closeLookImg() {
  closePopup(lookImgElement);//закрыть lookImg
}
// Кнопка - Х -закрыть "look-img"
closelookImg.addEventListener("click", closeLookImg);//закрыть lookImg

//--------------------------------------------------------
// Возьмем готовый массив
const iniCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

//Начальная загрузка страницы - 6 карточек
iniCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link, "element-card");
  // Создаём карточку 
  const cardElement = card.generateCard();
  // Добавляем в DOM (section class="elements")
  document.querySelector('.elements').append(cardElement);
});
