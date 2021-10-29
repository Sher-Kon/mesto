const content = document.querySelector(".content");
const addButton = content.querySelector(".profile__add-btn");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameInfo = content.querySelector(".profile__info-name");
const jobInfo = content.querySelector(".profile__info-job");
// popup
const popupElement = document.querySelector(".popup");
const nameInput = popupElement.querySelector(".popup__text_input_name");
const jobInput = popupElement.querySelector(".popup__text_input_job");
const closeButton = popupElement.querySelector(".popup__btn-close");//кн.закрытия формы
const formElement = popupElement.querySelector(".form");// Находим форму в DOM
// bildCard
const bildCardElement = document.querySelector(".bildCard");
const placeInput = bildCardElement.querySelector(".bildCard__text_input_place");
const urlInput = bildCardElement.querySelector(".bildCard__text_input_url");
const closeBttn = bildCardElement.querySelector(".bildCard__btn-close");//кн.закрытия формы bildCard
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement
// lookImg
const lookImgElement = document.querySelector(".lookImg");
const txtImg = lookImgElement.querySelector(".lookImg__title");
const srcImg = lookImgElement.querySelector(".lookImg__img");
const closelookImg = lookImgElement.querySelector(".lookImg__btn-close");//кн.закрытия формы lookImg
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

// Обработчик открытия формы lookImg
function openlookImg() {
  lookImgElement.classList.add("lookImg_opened"); //открыть lookImg
}
// Обработчик закрытия формы lookImg
function CloselookImg() {
  lookImgElement.classList.remove("lookImg_opened"); //закрыть lookImg
}
// Кнопка - Х -закрыть "lookImg"
closelookImg.addEventListener("click", CloselookImg);//закрыть lookImg

// Обработчик открытия формы bildCard
function openbildCard() {
  bildCardElement.classList.add("bildCard_opened"); //открыть bildCard
}
// Обработчик закрытия формы bildCard
function ClosebildCard() {
  bildCardElement.classList.remove("bildCard_opened"); //закрыть bildCard
}
// Обработчик «отправки» формы bildCard
function bildCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const place = placeInput.value;
  const url = urlInput.value;
  //console.log(url);//debug
  if (url!=='') {
    addElement(url, place, "up");//клонируем карточку в начало
  }
  // Закроем форму bildCard()
  ClosebildCard();//закрыть окно bildCard()
}
// форма bildCard:
// Кнопка - «создать»
formbildCard.addEventListener("submit", bildCardSubmitHandler);
// Кнопка - Х -закрыть
closeBttn.addEventListener("click", ClosebildCard);//закрыть bildCard
// Кнопка « + » (открыть окно "Новое место")
addButton.addEventListener("click", function() {
  //console.log("кликнули по кнопке +");//отладка
  openbildCard();
});

// Обработчик открытия формы popup «Редактировать профиль»
function clickEdit() {
    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;
    popupElement.classList.add("popup_opened"); //открыть окно
}
// Обработчик закрытия формы popup «Редактировать профиль»
function clickClose() {
    popupElement.classList.remove("popup_opened"); //закрыть окно
}
// Обработчик «отправки» формы «Редактировать профиль», хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Вставьте новые значения с помощью textContent
    nameInfo.textContent = nameInput.value;
    jobInfo.textContent = jobInput.value;    
    // Закроем форму
    clickClose();//закрыть окно
}
// Прикрепляем обработчик к форме «Редактировать профиль»:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
// Кнопки попапа «Редактировать профиль»
editButton.addEventListener("click", clickEdit);//открыть попап
closeButton.addEventListener("click", clickClose);//закрыть попап

// Клонируем карточку
function addElement (url, txt, direction) {
  // клонируем содержимое тега template
  const userElement = elementTemplate.querySelector(".element").cloneNode(true);
  // наполняем содержимым
  userElement.querySelector(".element__img").src = url;
  userElement.querySelector(".element__txt").textContent = txt;//'Клон карты';
  // выберем кнопку просмотра картинки "lookImg"
  userElement.querySelector(".element__img-btn").addEventListener("click", function (evt) {
    txtImg.textContent = evt.target.closest(".element").textContent;
    srcImg.src = evt.target.closest(".element__img").src;
      //console.log("Кликнули по картинке");//отладка
    openlookImg();//открыть окно просмотра картинки "lookImg"
  });
  // выберем кнопку лайка
  userElement.querySelector(".element__like-btn").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-btn_active");
  });
  // выберем кнопку удаления
  userElement.querySelector(".element__del-btn").addEventListener("click", function (evt) {
    //console.log("Кн. УДАЛИТЬ");//отладка
    const listItem = evt.target.closest(".element");
    listItem.remove();
  });
  // отображаем на странице
  if (direction==="dn") {
    elementsOnline.append(userElement);//добавить в конец 
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
