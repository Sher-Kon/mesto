import './index.css';// импорт главного файла стилей для ВебПака
//--------------------------------------------------------
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { createCard } from "../scripts/utils.js";
import { iniCards, selectorsElements } from "../scripts/data.js";
export { openLookImg };//для Card in utils.js
//--------------------------------------------------------
// Создадим экземпляр class Section 
const section = new Section(iniCards, createCard, ".elements");

// Создадим экземпляр PopupWithForm для EditProfile
//const popupEditProfile = new PopupWithForm(".edit-profile", (data)  => handleSubmitEditProfile(data));
const popupEditProfile = new PopupWithForm(".edit-profile", handleSubmitEditProfile);

// Создадим экземпляр PopupWithForm для BildCard
//const popupWFBildCard = new PopupWithForm(".bild-card", (data) => handleSubmitBildCard(data));
const popupWFBildCard = new PopupWithForm(".bild-card", handleSubmitBildCard);

// Создадим экземпляр PopupWithImage для LookImg
const popupWithImage = new PopupWithImage(".look-img", ".look-img__title", ".look-img__img");
// Создадим экземпляр UserInfo для Profile
const userInfoProfile = new UserInfo(".profile__info-name", ".profile__info-job");
// Создадим экземпляр FormValidator для EditProfile
const validatorEditProfile = new FormValidator(selectorsElements, ".edit-profile");
// Вызовем функцию проверки валидации EditProfile
validatorEditProfile.enableValidation();
// Создадим экземпляр FormValidator для BildCard
const validatorBildCard = new FormValidator(selectorsElements, ".bild-card");
// Вызовем функцию проверки валидации BildCard
validatorBildCard.enableValidation();

//--------------------------------------------------------
// EditProfile popup
//--------------------------------------------------------
// элементы DOM на странице
const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
// EditProfile popup «Редактировать профиль»
const editProfileElement = document.querySelector(".edit-profile");//popup
const nameInput = editProfileElement.querySelector(".popup__text_input_name");
const infoInput = editProfileElement.querySelector(".popup__text_input_job");

// Обработчик открытия формы popup «Редактировать профиль»
function openEditProfile() {
  validatorEditProfile.resetValidation();
  validatorEditProfile.enableButtonState();
  // Загрузить инпуты из профиля в попап
  const userInfo = userInfoProfile.getUserInfo();//profile
  nameInput.value = userInfo.name;
  infoInput.value = userInfo.info;
  //открыть popup «Редактировать профиль»
  popupEditProfile.open();// Метод экземпляра PopupWithForm для EditProfile
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  popupEditProfile.close();
}

// Обработчик «отправки» формы «Редактировать профиль»
/*
function handleSubmitEditProfile(data) {
  evt.preventDefault();// Эта строчка отменяет стандартную отправку формы.
  const inputsPopup = data;// Вставить новые значения из попапа в профиль
  userInfoProfile.setUserInfo(inputsPopup.nameInput, inputsPopup.jobInput);
  closeEditProfile();//закрыть попап «Редактировать профиль»
}
*/
function handleSubmitEditProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставить новые значения из попапа в профиль
  const data = popupEditProfile.getInputValues();//popup inputs
  userInfoProfile.setUserInfo(data.nameInput, data.jobInput);
  closeEditProfile();//закрыть попап «Редактировать профиль»
}

// Прикрепляем обработчики к форме «Редактировать профиль»:
popupEditProfile.setEventListeners();// "submit" и Х-закрыть попап
// Слушатели на кнопку открытия попапа «Редактировать профиль»
editButton.addEventListener("click", openEditProfile);//открыть попап

//--------------------------------------------------------
// bildCard popup
//--------------------------------------------------------
// элементы DOM на странице
const addCardButton = document.querySelector(".profile__add-btn");

// Обработчик открытия формы bild-card
function openBildCard() {
  validatorBildCard.resetValidation();
  validatorBildCard.disableButtonState();
  popupWFBildCard.open();
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  popupWFBildCard.close();//закрыть bildCard
}

// Обработчик «отправки» формы bild-card
/*
function handleSubmitBildCard(data) {// объект `data` это данные инпутов которые собирает _getInputValues
  evt.preventDefault();
  const infoCard = { name: "", link: "" };
  infoCard.name = data.placeInput;// новые значения из инпута попапа в карточку
  infoCard.link = data.urlInput;// новые значения из инпута попапа в карточку
  section.renderItem(infoCard);// Создадим экземпляр карточки
  closeBildCard();//закрыть попап BildСard()
  validatorBildCard.disableButtonState();// Сделаем кнопку неактивной
}
*/

function handleSubmitBildCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const data = popupWFBildCard.getInputValues();
  const infoCard = { name: "", link: "" };
  infoCard.name = data.placeInput;
  infoCard.link = data.urlInput;
  // Создадим экземпляр карточки
  section.renderItem(infoCard);
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
  // Сделаем кнопку неактивной
  validatorBildCard.disableButtonState();//bildCardBttn
}

// Добавляет обработчик клика по Х-иконке закрытия, и обработчик сабмита
popupWFBildCard.setEventListeners();
// Добавляет слушатель кнопке « + » (открыть окно "Новое место")
addCardButton.addEventListener("click", openBildCard);

//--------------------------------------------------------
// lookImg popup
//--------------------------------------------------------
// Функция открытия формы look-img
function openLookImg(cardElement) {
  popupWithImage.open(cardElement);//открыть lookImg
}
//  Добавляет слушатель кнопке Х (закрыть "look-img")
popupWithImage.setEventListeners();

//--------------------------------------------------------
//  Начальная загрузка страницы - 6 карточек
//--------------------------------------------------------
section.renderItems();
