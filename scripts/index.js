const content = document.querySelector(".content");
const addButton = content.querySelector(".profile__add-btn");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameInfo = content.querySelector(".profile__info-name");
const jobInfo = content.querySelector(".profile__info-job");
// popup
const editProfileElement = document.querySelector(".edit-profile");//popup
const nameInput = editProfileElement.querySelector(".popup__text_input_name");
const jobInput = editProfileElement.querySelector(".popup__text_input_job");
const closeButton = editProfileElement.querySelector(".popup__btn-close");//кн.закрытия формы
const formElement = editProfileElement.querySelector(".form");// Находим форму в DOM
// bildCard
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
const closeBttn = bildCardElement.querySelector(".bild-card__btn-close");//кн.закрытия формы bild-card
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement
// lookImg
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");
const closelookImg = lookImgElement.querySelector(".look-img__btn-close");//кн.закрытия формы lookImg
const formlookImg = lookImgElement.querySelector(".form");// Находим форму в DOM in lookImgElement
// элементы "template" DOM определим глобально
const elementTemplate = document.querySelector("#element").content;//клон
const elementsOnline = document.querySelector(".elements");//куда вставить

const iniCardsURL = [
  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
];
const iniCardsTXT = [
  'Архыз',
  'Челябинская область',
  'Иваново',
  'Камчатка',
  'Холмогорский район',
  'Байкал',
];
// Универсальные функции
function openPopup(element) {
  element.classList.add("popup_opened");
}
function closePopup(element) {
  element.classList.remove("popup_opened");
}

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

// Обработчик открытия формы bild-card
function openBildCard() {
  openPopup(bildCardElement); //открыть bildCard
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  closePopup(bildCardElement);//закрыть bildCard
}
// Обработчик «отправки» формы bild-card
function bildCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const place = placeInput.value;
  const url = urlInput.value;
  if (url!=='') {
    addElement(url, place, "up");//клонируем карточку в начало
  }
  // Очистить инпуты для новой карточки
  placeInput.value = "";
  urlInput.value = "";
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
}
// форма bild-card:
// Кнопка - «создать»
formbildCard.addEventListener("submit", bildCardSubmitHandler);
// Кнопка - Х -закрыть
closeBttn.addEventListener("click", closeBildCard);//закрыть bildCard
// Кнопка « + » (открыть окно "Новое место")
addButton.addEventListener("click", function() {
  openBildCard();
});

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
formElement.addEventListener("submit", formSubmitHandler);
// Кнопки попапа «Редактировать профиль»
editButton.addEventListener("click", openEditProfile);//открыть попап
closeButton.addEventListener("click", closeEditProfile);//закрыть попап

// Клонируем карточку
function addElement (url, txt, direction) {
  // клонируем содержимое тега template
  const userElement = elementTemplate.querySelector(".element").cloneNode(true);
  // наполняем содержимым
  userElement.querySelector(".element__img").src = url;
  userElement.querySelector(".element__img").alt = "На фотографии " + txt;
  userElement.querySelector(".element__txt").textContent = txt;//'Клон карты';
  // выберем кнопку просмотра картинки "lookImg"
  userElement.querySelector(".element__img-btn").addEventListener("click", function (evt) {
    txtImg.textContent = evt.target.closest(".element").textContent;
    srcImg.src = evt.target.closest(".element__img").src;
    openLookImg();//открыть окно просмотра картинки "lookImg"
  });
  // выберем кнопку лайка
  userElement.querySelector(".element__like-btn").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-btn_active");
  });
  // выберем кнопку удаления
  userElement.querySelector(".element__del-btn").addEventListener("click", function (evt) {
    const listItem = evt.target.closest(".element");
    listItem.remove();
  });
  // отображаем на странице
  if (direction==="dn") {
    elementsOnline.append(userElement);//добавить в конец - ini
  }
  if (direction==="up") {
    elementsOnline.prepend(userElement);//добавить в начало  
  }
}

//Начальная загрузка страницы - 6 карточек
function iniElements () {
  for (let index = 0; index < 6; index++) {
    addElement (iniCardsURL[index],iniCardsTXT[index],"dn");
  }
}
iniElements();
