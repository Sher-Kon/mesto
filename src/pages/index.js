import './index.css';// импорт главного файла стилей для ВебПака
//--------------------------------------------------------
import { Api } from "../components/Api.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { createCard, renderLoading } from "../scripts/utils.js";
import { selectorsElements } from "../scripts/data.js";
import { data } from 'autoprefixer';
export { openLookImg };//для Card in utils.js
//--------------------------------------------------------

const rdCards = [
  { name: "", link: "", id: "", likes: "" },
  { name: "", link: "", id: "", likes: "" },
  { name: "", link: "", id: "", likes: "" },
  { name: "", link: "", id: "", likes: "" },
  { name: "", link: "", id: "", likes: "" },
  { name: "", link: "", id: "", likes: "" }
];
//const myId = "";
//--------------------------------------------------------
// Создадим экземпляр class Api 
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  headers: {
    authorization: '51ca28f6-a002-497b-8233-6c80bd0cac76',
    'Content-Type': 'application/json'
  }
});

// Создадим экземпляр class Section создание карточек из iniCards 
const section = new Section(rdCards, createCard, ".elements");

// Создадим экземпляр PopupWithForm для Confirm
const popupConfirmDel = new PopupWithForm(".confirm", handleSubmitConfirmDel);
// Создадим экземпляр PopupWithForm для EditAvatar
const popupEditAvatar = new PopupWithForm(".edit-avatar", handleSubmitEditAvatar);
// Создадим экземпляр PopupWithForm для EditProfile
const popupEditProfile = new PopupWithForm(".edit-profile", handleSubmitEditProfile);
// Создадим экземпляр PopupWithForm для BildCard
const popupBildCard = new PopupWithForm(".bild-card", handleSubmitBildCard);
// Создадим экземпляр PopupWithImage для LookImg
const popupLookImage = new PopupWithImage(".look-img", ".look-img__title", ".look-img__img");

// Создадим экземпляр UserInfo для Profile
const userInfoProfile = new UserInfo(".profile__info-name", ".profile__info-job");

// Создадим экземпляр FormValidator для EditAvatar
//const validatorEditAvatar = new FormValidator(selectorsElements, ".edit-avatar");
// Вызовем функцию проверки валидации EditAvatar
//validatorEditAvatar.enableValidation();
// Создадим экземпляр FormValidator для EditProfile
const validatorEditProfile = new FormValidator(selectorsElements, ".edit-profile");
// Вызовем функцию проверки валидации EditProfile
validatorEditProfile.enableValidation();
// Создадим экземпляр FormValidator для BildCard
const validatorBildCard = new FormValidator(selectorsElements, ".bild-card");
// Вызовем функцию проверки валидации BildCard
validatorBildCard.enableValidation();

//--------------------------------------------------------
// ConfirmDel popup
//--------------------------------------------------------
// Обработчик открытия формы popup «Confirm»
function openConfirmDel() {
  //открыть popup «Confirm» не дожидаясь
  popupConfirmDel.open();// ждите ответа сервера
}
// Обработчик закрытия формы popup «Confirm»
function closeConfermDel() {
  popupConfirmDel.close();
}

function handleSubmitConfirmDel(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // удалим карточку на серверe
  const idCard = "id Card fo delete";
  console.log(idCard);


  // закрыть попап «Confirm» не дожидаясь ответа сервера
  closeConfermDel();
}

// Прикрепляем обработчики к форме «Confirm»:
popupConfirmDel.setEventListeners();// "submit" и Х-закрыть попап

//--------------------------------------------------------
// EditAvatar popup
//--------------------------------------------------------
// элементы DOM на странице
const avatarButton = document.querySelector(".profile__avatar-btn");//кн.открытия формы

// Обработчик открытия формы popup «Редактировать аватар»
function openEditAvatar() {
  //открыть popup «Редактировать аватар» не дожидаясь
  popupEditAvatar.open();// ждите ответа сервера
}

// Обработчик закрытия формы popup «Редактировать аватар»
function closeEditAvatar() {
  popupEditAvatar.close();
}

function handleSubmitEditAvatar(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  renderLoading(".edit-avatar__btn-save", true);//на кнопке "Загрузка..."
  /*
    //======================================================
    //      Запишем урл аватара на сервер.
    //------------------------------------------------------
    const data = popupEditAvatar.getInputValues();
    const tasks = api.writeAvatar(data.urlAvatar);//data.urlAvatar
    tasks.then((dataRet) => {
      //дождались
      // загрузим ссылку на изображение аватара
      avatarImage.src = dataRet.avatar;
      console.log("Записан аватар, URL: " + data.urlAvatar);
    });
    //======================================================
    */
  //======================================================
  //      Добавим лайк на сервере.
  //------------------------------------------------------
  const data = popupEditAvatar.getInputValues();
  const taskSetLike = api.setLike(data.urlAvatar);
  taskSetLike.then((dataRet) => {
    //дождались обещанного
    const idCard = dataRet._id;
    const likeNum = dataRet.likes.length;
    console.log("Добавили лайк карточке: " + idCard);
    console.log("лайков: " + likeNum);
    function nodu(){};
    setTimeout(nodu, 2000);//посмотрим на "Загрузка..."
    renderLoading(".edit-avatar__btn-save", false);//на кнопке "Сохранить"
    // закрыть попап «Редактировать аватар» после ответа сервера
    closeEditAvatar();
  });
  //======================================================
  /*
  //======================================================
  //      Удалим лайк на сервере.
  //------------------------------------------------------
  const data = popupEditAvatar.getInputValues();
  const taskDelLike = api.delLike(data.urlAvatar);
  taskDelLike.then((dataRet) => {
    //дождались
    console.log("Сняли лайк с карточки Id: " + data.urlAvatar);
  });
  //======================================================
  */

  /*
  //======================================================
  //      Удаляем карточку на сервере.
  //------------------------------------------------------
    const cardDel = linkAvatar.value;//передали id
    const tasks = api.deleteCard(cardDel);
    tasks.then((dataRet) => {
      //дождались
      console.log("Удалили карточку Id: " + cardDel);
    });
  //======================================================
  */

  //setTimeout(1, 2000);//посмотрим на "Загрузка..."
  //renderLoading(".edit-avatar__btn-save", false);//на кнопке "Сохранить"
  // закрыть попап «Редактировать аватар» после ответа сервера
  //closeEditAvatar();
}

// Слушатели на кнопку открытия попапа «Редактировать аватар»
avatarButton.addEventListener("click", openEditAvatar);//открыть попап
// avatarButton.addEventListener("click", openConfirm);//открыть Confirm отладка

// Прикрепляем обработчики к форме «Редактировать аватар»:
popupEditAvatar.setEventListeners();// "submit" и Х-закрыть попап

//--------------------------------------------------------
// EditProfile popup
//--------------------------------------------------------
// элементы DOM на странице
const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameProfile = content.querySelector(".profile__info-name");
const infoProfile = content.querySelector(".profile__info-job");
const avatarImage = document.querySelector(".profile__avatar");
// EditProfile popup «Редактировать профиль»
const editProfileElement = document.querySelector(".edit-profile");//popup
const nameInput = editProfileElement.querySelector(".popup__text_input_name");
const infoInput = editProfileElement.querySelector(".popup__text_input_job");
nameInput.value = "";
infoInput.value = "";

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
  /*
    //======================================================
    //  запрос к серверу GET прочитать профиль
    //--------------------------------------------------------
    const tasks = api.readProfile();
    tasks.then((data) => {
      // загрузим ссылку на изображение аватара
      avatarImage.src = data.avatar;
      const myId = data._id;// сохраним мой id
      //console.log("name: " + data.name + ",  about: " + data.about);
      console.log("Мой id: " + myId);
      // Загрузить инпуты из запроса в попап
      nameInput.value = data.name;
      infoInput.value = data.about;
      //popupEditProfile.open();//дождались
      return myId;
    });
    //======================================================
  */
}

// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  popupEditProfile.close();
}

// Обработчик «отправки» формы «Редактировать профиль»
function handleSubmitEditProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставить новые значения из попапа в профиль
  const data = popupEditProfile.getInputValues();//popup inputs
  userInfoProfile.setUserInfo(data.nameInput, data.jobInput);
  // Подготовить данные для запроса на сервер
  const dataWr = { name: "", about: "" };
  dataWr.name = data.nameInput;
  dataWr.about = data.jobInput;
  renderLoading(".popup__btn-save", true);//на кнопке "Загрузка..."
  //===============================================================
  //  Отредактированные данные профиля сохраняем на сервере.
  //---------------------------------------------------------------
  const taskWrProfile = api.writeProfile(dataWr);
  taskWrProfile.then((dataRet) => {
    //дождались ответа сервера
    //console.log("Записан на сервере: " + dataRet.name);
    setTimeout(renderLoading(".popup__btn-save", false), 2000);//посмотрим на "Загрузка..."
    //renderLoading(".popup__btn-save", false);//на кнопке "Сохранить"
    closeEditProfile();
  });
  //===============================================================
  // закрыть попап «Редактировать профиль» не дожидаясь ответа сервера
  //closeEditProfile();
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
// bildCard popup
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");

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
  // Вставьте новые значения в новую карточку
  const data = popupBildCard.getInputValues();
  const infoCard = { name: "", link: "" };
  infoCard.name = data.placeInput;
  infoCard.link = data.urlInput;
  /*
  //======================================================
    //Добавим карточку на сервер.
    const tasks = api.writeCard(infoCard);
    tasks.then((dataRet) => {
      //дождались ответа от сервера:
      console.log("Card записан на сервере: " + dataRet.owner.id);
    });
  //======================================================
    // не дожидаясь: 
  */
  // Создадим экземпляр карточки
  section.renderItem(infoCard);
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
  // Сделаем кнопку неактивной
  validatorBildCard.disableButtonState();//bildCardBttn
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

//======================================================
//      двойной запрос инициализации
//======================================================
api.getIniData().then(arg => {
  const [dataProfile, dataCards] = arg;
  //--------------------------------------------------------
  //  Начальная загрузка профиля
  //--------------------------------------------------------
  // загрузим ссылку на изображение аватара
  avatarImage.src = dataProfile.avatar;
  const myId = dataProfile._id;// сохраним мой id
  //console.log("name: " + data.name + ",  about: " + data.about);
  console.log("Мой id: " + myId);
  // Загрузить значения из запроса в профиль
  //userInfoEditProfile.setUserInfo(dataProfile.name, dataProfile.about);
  nameProfile.textContent = dataProfile.name;
  infoProfile.textContent = dataProfile.about;
  //--------------------------------------------------------
  //  Начальная загрузка страницы - 6 карточек
  //--------------------------------------------------------
  for (let i = 0; i < 6; i += 1) {
    rdCards[i].name = dataCards[i].name;//
    rdCards[i].link = dataCards[i].link;
    rdCards[i].id = dataCards[i]._id;
    rdCards[i].likes = dataCards[i].likes.length;//
    console.log("Card[" + i + "] :" + rdCards[i].id + " like : " + rdCards[i].likes);//нужны ведерки отрисовывать
  }
  section.renderItems();//отрисуем карточки
});
//======================================================
