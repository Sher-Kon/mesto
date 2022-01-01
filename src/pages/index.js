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
export { openLookImg, delLike, setLike, delCard };//для Card in utils.js
//--------------------------------------------------------

const rdCards = [
  { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },
  { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },
  { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },
  { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },
  { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },
  { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false }
];

let myID = "";
let nLikes = 0;
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
const popupConfirmDel = new PopupConfirm(".confirm", handleDeleteCard);
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
function delCard(card) {//(cardID)
  //======================================================
  popupConfirmDel.open(card);//прокинем card в колбэк
  //openConfirmDel(card);//откроем попап
  /*
    const cardID = card._cardID;// достанем id карточки
    const taskDelCard = api.deleteCard(cardID);//запрос на удаление
    taskDelCard.then((dataRet) => {
      //дождались ответа сервера
      console.log("Ответ сервера: " + dataRet.message);// отладка
      //card._element.remove();//удалим элемент в DOM
      card.deleteCardElement();//удалим элемент в DOM
    }).catch((err) => alert(err));
  */
  //======================================================
}
//--------------------------------------------------------
//              popup ConfirmDel
//--------------------------------------------------------
// Обработчик открытия формы popup «Confirm»
function openConfirmDel() {
  popupConfirmDel.open();// 
}
// Обработчик закрытия формы popup «Confirm»
function closeConfermDel() {
  popupConfirmDel.close();
}
function handleDeleteCard(card) {
  //console.log("Привет из колбэка");
  //const cardID = card._cardID;// достанем id карточки
  //console.log("Удаляем карточку :"+cardID);
  
  // удалим карточку 
  renderBtnSave(".confirm__btn", "Удаление...");//на кнопке "Удаление..."
  const cardID = card._cardID;// достанем id карточки
  const taskDelCard = api.deleteCard(cardID);//запрос на удаление
  taskDelCard.then((dataRet) => {//дождались ответа сервера
    console.log("Ответ на запрос: " + dataRet.message);// отладка
    card.deleteCardElement();//удалим элемент в DOM
    renderBtnSave(".confirm__btn", "Да");//на кнопке "Да"
    closeConfermDel();// закрыть попап «ConfirmDEL»
  }).catch((err) => alert(err));
  
  //console.log("Удаляем карточку - submit popup");
  //closeConfermDel();// закрыть попап «Confirm»
}
// Прикрепляем обработчики к форме «Confirm»:
popupConfirmDel.setEventListeners();// "Да" и Х-закрыть попап

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

  //======================================================
  //      Запишем урл аватара на сервер.
  //------------------------------------------------------
  renderBtnSave(".edit-avatar__btn-save", "Загрузка...");//на кнопке "Загрузка..."
  const data = popupEditAvatar.getInputValues();
  const tasks = api.writeAvatar(data.urlAvatar);//data.urlAvatar
  tasks.then((dataRet) => {
    //дождались ответа сервера
    avatarImage.src = dataRet.avatar;// загрузим ссылку на изображение аватара
    console.log("Записан аватар, URL: " + data.urlAvatar);
    renderBtnSave(".edit-avatar__btn-save", "Сохранить");//на кнопке "Сохранить"
    // закрыть попап «Редактировать аватар» после ответа сервера
    closeEditAvatar();// закрыть попап «Редактировать аватар»
  }).catch((err) => alert(err));// если что-то пошло не так
  //======================================================

  //closeEditAvatar();// закрыть попап «Редактировать аватар»
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
}

// Обработчик закрытия формы popup «Редактировать профиль»
function closeEditProfile() {
  popupEditProfile.close();
}

// Обработчик «отправки» формы «Редактировать профиль»
function handleSubmitEditProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставить новые значения из попапа в профиль
  //const data = popupEditProfile.getInputValues();//popup inputs
  //userInfoProfile.setUserInfo(data.nameInput, data.jobInput);
  // Подготовить данные для запроса на сервер
  const dataWr = { name: "", about: "" };
  dataWr.name = data.nameInput;
  dataWr.about = data.jobInput;
  //===============================================================
  //  Отредактированные данные профиля сохраняем на сервере.
  //---------------------------------------------------------------
  renderBtnSave(".popup__btn-save", "Загрузка...");//на кнопке "Загрузка..."
  const taskWrProfile = api.writeProfile(dataWr);
  taskWrProfile.then((dataRet) => {
    //дождались ответа сервера
    //console.log("Записан на сервере: " + dataRet.name);
    // Вставить новые значения из ответа сервера в профиль
    //userInfoProfile.setUserInfo(dataRet.name, dataRet.about);
    renderBtnSave(".popup__btn-save", "Сохранить");//на кнопке "Сохранить"
    closeEditProfile();// закрыть попап «Редактировать профиль»
  }).catch((err) => alert(err));
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

  //======================================================
  //Добавим карточку на сервер.
  renderBtnSave(".bild-card__btn-save", "Загрузка...");//на кнопке "Загрузка..."
  const tasks = api.writeCard(infoCard);
  tasks.then((dataRet) => {
    //дождались ответа от сервера:
    renderBtnSave(".bild-card__btn-save", "Создать");//на кнопке "Создать"
    //console.log("запись cardID: " + dataRet._id + ", ownerID:" + dataRet.owner._id);

    infoCard.myID = myID;//нарисуем ведерко
    infoCard.ownerID = myID;//нарисуем ведерко
    infoCard.myLike = false;//моего лайка нет
    infoCard.numLikes = 0;//число лайков
    infoCard.cardID = dataRet._id;//возвращает сервер
    // Создадим экземпляр карточки
    section.renderItem(infoCard);
    // Закроем форму bildCard()
    closeBildCard();//закрыть окно bild-card()
    // Сделаем кнопку неактивной
    validatorBildCard.disableButtonState();//bildCardBttn
  }).catch((err) => alert(err));
  //======================================================
  // не дожидаясь: 
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
    //const idCard = dataRet._id;
    const numLikes = dataRet.likes.length;
    //console.log("число лайков: " + numLikes);//отладка
    card.updateLikes(numLikes);
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

  const taskSetLike = api.setLike(cardID+"bnjk[]");
  taskSetLike.then((dataRet) => {
    //дождались обещанного
    //const idCard = dataRet._id;
    const numLikes = dataRet.likes.length;
    //console.log("число лайков: " + numLikes);//отладка
    card.updateLikes(numLikes);
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
  //userInfoEditProfile.setUserInfo(dataProfile.name, dataProfile.about);
  nameProfile.textContent = dataProfile.name;
  infoProfile.textContent = dataProfile.about;
  // загрузим ссылку на изображение аватара
  avatarImage.src = dataProfile.avatar;
  myID = dataProfile._id;// сохраним мой id в глобальной переменной
  //console.log("Мой id: " + myID);//отладка
  //--------------------------------------------------------
  //  Начальная загрузка страницы - 6 карточек
  //--------------------------------------------------------
  for (let i = 0; i < 6; i += 1) {
    rdCards[i].name = dataCards[i].name;//
    rdCards[i].link = dataCards[i].link;
    rdCards[i].myID = dataProfile._id;
    rdCards[i].ownerID = dataCards[i].owner._id;
    rdCards[i].cardID = dataCards[i]._id;
    rdCards[i].numLikes = dataCards[i].likes.length;//
    rdCards[i].likes = dataCards[i].likes;//

    let myLike = false;
    //let strlike = "";
    if (rdCards[i].numLikes > 0) {
      // перебор всех лайков c целью найти свой
      for (let n = 0; n < rdCards[i].numLikes; n += 1) {
        if (rdCards[i].myID === rdCards[i].likes[n]._id) {//владелец лайка
          myLike = true;//есть мой лайк
          //strlike = "ДА";
          //} else { 
          //strlike = "нет"; 
        };
        //console.log("    like id:" + rdCards[i].likes[n]._id + ", Мой лайк: " + strlike);
      }
    }
    rdCards[i].myLike = myLike;
    /*
    let metka = "";
    if (myLike) { metka = "  Есть мой лайк" };
    console.log("Card[" + i + "] :" + rdCards[i].cardID +
      ", owner: " + rdCards[i].ownerID +
      ", всего лайков : " + rdCards[i].numLikes + metka
    );
    */
  }
  section.renderItems();//отрисуем карточки
}).catch((err) => alert(err));
//======================================================
