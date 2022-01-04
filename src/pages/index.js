import './index.css';// импорт главного файла стилей для ВебПака
//--------------------------------------------------------
import { Api } from "../components/Api.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupConfirm } from "../components/PopupConfirm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { createCard, renderBtnSave } from "../scripts/utils.js";
import { selectorsElements } from "../scripts/data.js";
export { openLookImg, delLike, setLike, delCard, myID };//для Card in utils.js
//--------------------------------------------------------
let myID = "";
//--------------------------------------------------------
// Создадим экземпляр class Api 
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  headers: {
    authorization: '51ca28f6-a002-497b-8233-6c80bd0cac76',
    'Content-Type': 'application/json'
  }
});

// Создадим экземпляр class Section создание карточек 
const section = new Section(createCard, ".elements");

// Создадим экземпляр PopupWithForm для Confirm
const popupConfirmDel = new PopupConfirm(".confirm", handleConfirmDelCard);
// Создадим экземпляр PopupWithForm для EditAvatar
const popupEditAvatar = new PopupWithForm(".edit-avatar", handleSubmitEditAvatar);
// Создадим экземпляр PopupWithForm для EditProfile
const popupEditProfile = new PopupWithForm(".edit-profile", handleSubmitEditProfile);
// Создадим экземпляр PopupWithForm для BildCard
const popupBildCard = new PopupWithForm(".bild-card", handleSubmitBildCard);
// Создадим экземпляр PopupWithImage для LookImg
const popupLookImage = new PopupWithImage(".look-img", ".look-img__title", ".look-img__img");

// Создадим экземпляр UserInfo для Profile
const userInfoProfile = new UserInfo(".profile__info-name", ".profile__info-job", ".profile__avatar");

// Создадим экземпляр FormValidator для EditAvatar
const validatorEditAvatar = new FormValidator(selectorsElements, ".edit-avatar");
// Вызовем функцию проверки валидации EditAvatar
validatorEditAvatar.enableValidation();
// Создадим экземпляр FormValidator для EditProfile
const validatorEditProfile = new FormValidator(selectorsElements, ".edit-profile");
// Вызовем функцию проверки валидации EditProfile
validatorEditProfile.enableValidation();
// Создадим экземпляр FormValidator для BildCard
const validatorBildCard = new FormValidator(selectorsElements, ".bild-card");
// Вызовем функцию проверки валидации BildCard
validatorBildCard.enableValidation();

//--------------------------------------------------------
//      Удалим карточку 
//------------------------------------------------------
function delCard(card) {//
  popupConfirmDel.open(card);//откроем попап, прокинем card в колбэк
}
//--------------------------------------------------------
//              popup ConfirmDel
//--------------------------------------------------------
function handleConfirmDelCard(card) {//обработчик клика кнопки "Да"
  // удалим карточку 
  renderBtnSave(".confirm__btn", "Удаление...");//на кнопке "Удаление..."
  const cardID = card._cardID;// достанем id карточки из card
  //======================================================
  const taskDelCard = api.deleteCard(cardID);//запрос на удаление
  taskDelCard.then((dataRet) => {//дождались ответа сервера
    card.deleteCardElement();//удалим элемент в DOM
    popupConfirmDel.close();// закрыть попап «ConfirmDEL»
  }).catch((err) => alert(err))
    .finally(function () {
      renderBtnSave(".confirm__btn", "Да");//на кнопке "Да"
    });
  //======================================================
}
// Прикрепляем обработчики к форме «Confirm»:
popupConfirmDel.setEventListeners();// кнопки - "Да", "Х" 

//--------------------------------------------------------
// EditAvatar popup
//--------------------------------------------------------
// элементы DOM на странице
const avatarButton = document.querySelector(".profile__avatar-btn");//кн.открытия формы

// Обработчик открытия формы popup «Редактировать аватар»
function openEditAvatar() {
  validatorEditAvatar.resetValidation();
  validatorEditAvatar.disableButtonState();
  popupEditAvatar.open();//открыть popup «Редактировать аватар» 
}

// Обработчик закрытия формы popup «Редактировать аватар»
function closeEditAvatar() {
  popupEditAvatar.close();
}

function handleSubmitEditAvatar(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  //======================================================
  //      Запишем урл аватара на сервер.
  //------------------------------------------------------
  renderBtnSave(".edit-avatar__btn-save", "Загрузка...");//на кнопке "Загрузка..."
  const data = popupEditAvatar.getInputValues();
  const tasks = api.writeAvatar(data.urlAvatar);//data.urlAvatar
  tasks.then((dataRet) => {
    //дождались ответа сервера
    // Загрузить значения из запроса в профиль
    userInfoProfile.setUserInfo(dataRet.name, dataRet.about, dataRet.avatar, dataRet._id);
    // закрыть попап «Редактировать аватар» после ответа сервера
    closeEditAvatar();// закрыть попап «Редактировать аватар»
  }).catch((err) => alert(err))// если что-то пошло не так
    .finally(function () {
      renderBtnSave(".edit-avatar__btn-save", "Сохранить");//на кнопке "Сохранить"
    });
  //======================================================
}

// Слушатели на кнопку открытия попапа «Редактировать аватар»
avatarButton.addEventListener("click", openEditAvatar);//открыть попап
// avatarButton.addEventListener("click", openConfirmDel);//открыть Confirm отладка

// Прикрепляем обработчики к форме «Редактировать аватар»:
popupEditAvatar.setEventListeners();// "submit" и Х-закрыть попап

//--------------------------------------------------------
// EditProfile popup
//--------------------------------------------------------
// элементы DOM на странице
const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
//const nameProfile = content.querySelector(".profile__info-name");
//const infoProfile = content.querySelector(".profile__info-job");
//const avatarImage = document.querySelector(".profile__avatar");
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
  popupEditProfile.open();// 
}

// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  popupEditProfile.close();
}

// Обработчик «отправки» формы «Редактировать профиль»
function handleSubmitEditProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Подготовить данные для запроса на сервер
  const data = popupEditProfile.getInputValues();//popup inputs
  const dataWr = { name: "", about: "" };
  dataWr.name = data.nameInput;
  dataWr.about = data.jobInput;
  //===============================================================
  //  Отредактированные данные профиля сохраняем на сервере.
  //---------------------------------------------------------------
  renderBtnSave(".popup__btn-save", "Загрузка...");//на кнопке "Загрузка..."
  const taskWrProfile = api.writeProfile(dataWr);
  taskWrProfile.then((dataRet) => {
    // Вставить новые значения из ответа сервера в профиль
    userInfoProfile.setUserInfo(dataRet.name, dataRet.about, dataRet.avatar, dataRet._id);
    closeEditProfile();// закрыть попап «Редактировать профиль»
  }).catch((err) => alert(err))
    .finally(function () {
      renderBtnSave(".popup__btn-save", "Сохранить");//на кнопке "Сохранить"
    });
  //===============================================================
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
  popupBildCard.open();
}

// Обработчик закрытия формы bild-card
function closeBildCard() {
  popupBildCard.close();//закрыть bildCard
}

// Обработчик «отправки» формы bild-card
function handleSubmitBildCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Подготовим данные для запроса
  const data = popupBildCard.getInputValues();
  const infoCard = { name: "", link: "" };
  infoCard.name = data.placeInput;
  infoCard.link = data.urlInput;
  //======================================================
  //Добавим карточку на сервер.
  renderBtnSave(".bild-card__btn-save", "Загрузка...");//на кнопке "Загрузка..."
  const tasks = api.writeCard(infoCard);
  tasks.then((dataRet) => {
    //дождались ответа от сервера:
    // Вставьте новые значения в новую карточку
    infoCard.owner = dataRet.owner;//если (ownerID==myID) нарисуем ведерко
    infoCard.likes = dataRet.likes;//число лайков
    infoCard.cardID = dataRet._id;//id карточки
    // Создадим экземпляр карточки
    section.renderItem(infoCard);
    // Сделаем кнопку неактивной
    validatorBildCard.disableButtonState();//bildCardBttn
    // Закроем форму bildCard()
    closeBildCard();//закрыть окно bild-card()
  }).catch((err) => alert(err))
    .finally(function () {
      renderBtnSave(".bild-card__btn-save", "Создать");//на кнопке "Создать"
    });
  //======================================================
}

// Добавляет обработчик клика по Х-иконке закрытия, и обработчик сабмита
popupBildCard.setEventListeners();
// Добавляет слушатель кнопке « + » (открыть окно "Новое место")
addCardButton.addEventListener("click", openBildCard);

//--------------------------------------------------------
// lookImg popup
//--------------------------------------------------------
// Функция открытия формы look-img
function openLookImg(cardElement) {
  popupLookImage.open(cardElement);//открыть lookImg
}
//  Добавляет слушатель кнопке Х (закрыть "look-img")
popupLookImage.setEventListeners();
//--------------------------------------------------------

//--------------------------------------------------------
//      Удалим лайк на сервере.
//--------------------------------------------------------
function delLike(card) {//(cardID)
  //======================================================  
  const cardID = card._cardID;// достанем id карточки

  const taskDelLike = api.delLike(cardID);
  taskDelLike.then((dataRet) => {
    //дождались обещанного
    const likes = dataRet.likes;
    card.updateLikes(likes);
    card.delMyLike();
  }).catch((err) => alert(err));
  //======================================================
}

//--------------------------------------------------------
//      Добавим лайк на сервере.
//--------------------------------------------------------
function setLike(card) {//(cardID)
  //======================================================
  const cardID = card._cardID;// достанем id карточки

  const taskSetLike = api.setLike(cardID);
  taskSetLike.then((dataRet) => {
    //дождались обещанного
    const likes = dataRet.likes;
    card.updateLikes(likes);
    card.setMyLike();
  }).catch((err) => alert(err));//
  //======================================================
}

//======================================================
//      двойной запрос инициализации
//======================================================
api.getIniData().then(arg => {
  const [dataProfile, dataCards] = arg;
  //--------------------------------------------------------
  //  Начальная загрузка профиля
  //--------------------------------------------------------
  // Загрузить значения из запроса в профиль
  userInfoProfile.setUserInfo(dataProfile.name, dataProfile.about, dataProfile.avatar, dataProfile._id);
  //--------------------------------------------------------
  //  Начальная загрузка карточек
  section.renderItems(dataCards);//отрисуем карточки из массива dataCards
}).catch((err) => alert(err));
//======================================================
