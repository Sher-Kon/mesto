// элементы DOM на странице
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
// элементы "template" DOM определим глобально
const elementTemplate = document.querySelector("#element").content;//клон
const elementsOnline = document.querySelector(".elements");//куда вставить

// Универсальные функции
function openPopup(element) {
  element.classList.add("popup_opened");
}
function closePopup(element) {
  element.classList.remove("popup_opened");
}


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
