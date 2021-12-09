import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { creationCard } from './utils.js';
import { iniCards, inputsEditProfile, inputsBildCard } from './data.js';
export { validatorEditProfile, validatorBildCard };
//export { closeEditProfile, closeBildCard, closeLookImg };
export { txtImg, srcImg};
export { openLookImg };//для Card
//--------------------------------------------------------
// Создадим экземпляр PopupWithForm для BildCard
const popupWFBildCard = new PopupWithForm(".bild-card", handleSubmitBildCard);
// Создадим экземпляр PopupWithImage для LookImg
const popupWithImage = new PopupWithImage(".look-img");
// Создадим экземпляр Popup для EditProfile
const popupEditProfile = new Popup(".edit-profile");
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
  //nameInput.value = nameInfo.textContent;
  //jobInput.value = jobInfo.textContent;

  //открыть popup «Редактировать профиль»
  // Метод экземпляра Popup для EditProfile
  popupEditProfile.open();
  //openPopup(editProfileElement);
}
// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  popupEditProfile.close();
  //closePopup(editProfileElement);
}
// Обработчик «отправки» формы «Редактировать профиль»
function handleSubmitEditProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения
  userInfoEditProfile.setUserInfo(nameInput.value, jobInput.value);
  //nameInfo.textContent = nameInput.value;
  //jobInfo.textContent = jobInput.value;

  // Закроем форму
  closeEditProfile();//закрыть окно «Редактировать профиль»
}
// Прикрепляем обработчик к форме «Редактировать профиль»:
formEditProfile.addEventListener("submit", handleSubmitEditProfile);
// Слушатели на кнопки попапа «Редактировать профиль»
editButton.addEventListener("click", openEditProfile);//открыть попап
//closeButton.addEventListener("click", closeEditProfile);//закрыть попап
popupEditProfile.setEventListeners();

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
  //openPopup(bildCardElement); //открыть bildCard
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  popupWFBildCard.close();//закрыть bildCard
  //closePopup(bildCardElement);
}
// Обработчик «отправки» формы bild-card
function handleSubmitBildCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const place = placeInput.value;
  const url = urlInput.value;

  //popupWFBildCard._getInputValues();//для отладки

  if (url !== '') {
    // Создадим экземпляр карточки
    creationCard(place, url, "element-card", "up");
  }
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
  // Сделаем кнопку неактивной
  validatorBildCard.disableButtonState(bildCardBttn);
  //bildCardBttn.disabled = true;
  //bildCardBttn.classList.add('button_inactive');
  // Очистить инпуты для новой карточки
  placeInput.value = "";
  urlInput.value = "";
}

// форма bild-card:
// Добавляет обработчик клика по Х-иконке закрытия, и обработчик сабмита
popupWFBildCard.setEventListeners();

// Кнопка - «создать»
//formbildCard.addEventListener("submit", handleSubmitBildCard);
// Добавляет слушатель кнопке Х -закрыть окно "Новое место"
//popupBildCard.setEventListeners();
//closeBttn.addEventListener("click", closeBildCard);

// Кнопка « + » (открыть окно "Новое место")
addButton.addEventListener("click", openBildCard);

//--------------------------------------------------------
// lookImg popup
//--------------------------------------------------------
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");
//const closelookImg = lookImgElement.querySelector(".look-img__btn-close");//кн.закрытия формы lookImg
// Обработчик открытия формы look-img
function openLookImg(cardElement) {
  popupWithImage.open(cardElement);//открыть lookImg
}
// Обработчик закрытия формы look-img
function closeLookImg() {
  popupWithImage.close();//закрыть lookImg
}
//  Добавляет слушатель кнопке Х (закрыть "look-img")
popupWithImage.setEventListeners();

//--------------------------------------------------------
//Начальная загрузка страницы - 6 карточек
//--------------------------------------------------------
iniCards.forEach((item) => {
  // Создадим экземпляр карточки
  creationCard(item.name, item.link, "element-card", "dn");
});
