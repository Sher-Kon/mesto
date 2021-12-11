// добавьте импорт главного файла стилей для ВебПака
//import './styles/index.css'; 

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { creationCard } from './utils.js';
import { iniCards, inputsEditProfile, inputsBildCard } from './data.js';
export { validatorEditProfile, validatorBildCard };
export { section };
export { txtImg, srcImg };
export { openLookImg };//для Card in utils.js
//--------------------------------------------------------
// Создадим экземпляр class Section 
const section = new Section(iniCards, creationCard, '.elements');
// Создадим экземпляр PopupWithForm для EditProfile
const popupEditProfile = new PopupWithForm(".edit-profile", handleSubmitEditProfile, "popup edit-profile popup_opened");
// Создадим экземпляр PopupWithForm для BildCard
const popupWFBildCard = new PopupWithForm(".bild-card", handleSubmitBildCard, "popup bild-card popup_opened");
// Создадим экземпляр PopupWithImage для LookImg
const popupWithImage = new PopupWithImage(".look-img");
// Создадим экземпляр UserInfo для EditProfile
const userInfoEditProfile = new UserInfo('.profile__info-name', '.profile__info-job');
// Создадим экземпляр FormValidator
const validatorEditProfile = new FormValidator('edit-profile', inputsEditProfile);
// Вызовем функцию проверки валидации EditProfile
validatorEditProfile.enableValidation();
// Создадим экземпляр FormValidator
const validatorBildCard = new FormValidator('bild-card', inputsBildCard);
// Вызовем функцию проверки валидации BildCard
validatorBildCard.enableValidation();

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
  const userInfo = userInfoEditProfile.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.info;
  //открыть popup «Редактировать профиль»
  popupEditProfile.open();// Метод экземпляра PopupWithForm для EditProfile
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  popupEditProfile.close();
}
// Обработчик «отправки» формы «Редактировать профиль»
function handleSubmitEditProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения
  userInfoEditProfile.setUserInfo(nameInput.value, jobInput.value);
  // Закроем форму
  closeEditProfile();//закрыть окно «Редактировать профиль»
}
// Прикрепляем обработчики к форме «Редактировать профиль»:
popupEditProfile.setEventListeners();// "submit" и Х-закрыть попап
// Слушатели на кнопку открытия попапа «Редактировать профиль»
editButton.addEventListener("click", openEditProfile);//открыть попап

//--------------------------------------------------------
// bildCard popup
//--------------------------------------------------------
// элементы DOM на странице
const addButton = document.querySelector(".profile__add-btn");
// bildCard popup
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
//const closeBttn = bildCardElement.querySelector(".bild-card__btn-close");//кн.закрытия формы bild-card
const bildCardBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн. создания card
//const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement

// Обработчик открытия формы bild-card
function openBildCard() {
  validatorBildCard.disableButtonState(bildCardBttn);
  popupWFBildCard.open();//открыть bildCard
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  popupWFBildCard.close();//закрыть bildCard
}
// Обработчик «отправки» формы bild-card
function handleSubmitBildCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const infoCard = { name: "", link: "" };
  infoCard.name = placeInput.value;
  infoCard.link = urlInput.value;
  // Создадим экземпляр карточки
  section.renderItem(infoCard);
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
  // Сделаем кнопку неактивной
  validatorBildCard.disableButtonState(bildCardBttn);
}
// Добавляет обработчик клика по Х-иконке закрытия, и обработчик сабмита
popupWFBildCard.setEventListeners();
// Добавляет слушатель кнопке « + » (открыть окно "Новое место")
addButton.addEventListener("click", openBildCard);

//--------------------------------------------------------
// lookImg popup
//--------------------------------------------------------
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");

// Функция открытия формы look-img
function openLookImg(cardElement) {
  popupWithImage.open(cardElement);//открыть lookImg
}
// Функция закрытия формы look-img
function closeLookImg() {
  popupWithImage.close();//закрыть lookImg
}
//  Добавляет слушатель кнопке Х (закрыть "look-img")
popupWithImage.setEventListeners();

//--------------------------------------------------------
//  Начальная загрузка страницы - 6 карточек
//--------------------------------------------------------
section.renderItems();
