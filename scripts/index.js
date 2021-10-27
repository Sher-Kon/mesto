const content = document.querySelector(".content");
const addButton = content.querySelector(".profile__add-btn");
const editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
const nameInfo = content.querySelector(".profile__info-name");
const jobInfo = content.querySelector(".profile__info-job");
// popup
const popupElement = document.querySelector(".popup");
const nameInput = document.querySelector(".popup__text_input_name");
const jobInput = document.querySelector(".popup__text_input_job");
const closeButton = document.querySelector(".popup__btn-close");//кн.закрытия формы
// bildCard
const bildCardElement = document.querySelector(".bildCard");
const placeInput = document.querySelector(".bildCard__text_input_place");
const urlInput = document.querySelector(".bildCard__text_input_url");
const closeBttn = document.querySelector(".bildCard__btn-close");//кн.закрытия формы bildCard

const formElement = popupElement.querySelector(".form");// Находим форму в DOM
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
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


// Обработчик открытия формы bildCard
function openbildCard() {
  //nameInput.value = nameInfo.textContent;
  //jobInput.value = jobInfo.textContent;
  bildCardElement.classList.add("bildCard_opened"); //открыть bildCard
}
// Обработчик закрытия формы bildCard
function ClosebildCard() {
  bildCardElement.classList.remove("bildCard_opened"); //закрыть bildCard
}
closeBttn.addEventListener("click", ClosebildCard);//закрыть bildCard
// Обработчик «отправки» формы bildCard, хотя пока
// она никуда отправляться не будет
function bildCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  //console.log('Обработчик отправки формы');

  // Вставьте новые значения с помощью textContent
  //nameInfo.textContent = nameInput.value;
  //jobInfo.textContent = jobInput.value;
  debugADD();

  // Закроем форму bildCard()
  ClosebildCard();//закрыть окно bildCard()
}
// Прикрепляем обработчик к форме bildCard:
// он будет следить за событием “submit” - «отправка»
formbildCard.addEventListener("submit", bildCardSubmitHandler);



// Обработчик открытия формы popup
function clickEdit() {
    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;
    popupElement.classList.add("popup_opened"); //открыть окно
}
// Обработчик закрытия формы popup
function clickClose() {
    popupElement.classList.remove("popup_opened"); //закрыть окно
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    //console.log('Обработчик отправки формы');

    // Вставьте новые значения с помощью textContent
    nameInfo.textContent = nameInput.value;
    jobInfo.textContent = jobInput.value;
    
    // Закроем форму
    clickClose();//закрыть окно
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
// Кнопки попапа
editButton.addEventListener("click", clickEdit);//открыть попап
closeButton.addEventListener("click", clickClose);//закрыть попап



// Клонируем карточку
function addElement (url, txt) {
  // получим элемент 
  const elementTemplate = document.querySelector("#element").content;//клон
  const elementsOnline = document.querySelector(".elements");//куда вставить
  // клонируем содержимое тега template
  const userElement = elementTemplate.querySelector(".element").cloneNode(true);
  // наполняем содержимым
  userElement.querySelector(".element__img").src = url;
  userElement.querySelector(".element__txt").textContent = txt;//'Клон карты';
  // выберем кнопку лайка
  userElement.querySelector(".element__like-btn").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-btn_active");
  });
  // выберем кнопку удаления
  userElement.querySelector(".element__del-btn").addEventListener("click", function (evt) {
    //console.log("Кн. УДАЛИТЬ");
    const listItem = evt.target.closest(".element");
    listItem.remove();
  });
  // отображаем на странице
  //elementsOnline.append(userElement);//добавить в конец  
  elementsOnline.prepend(userElement);//добавить в начало  
}

//Начальная загрузка страницы
function iniElements () {
  for (let index = 0; index < 6; index++) {
    addElement (iniCardsURL[index],iniCardsTXT[index]);
  }
}
iniElements();

//Отладочная функция добавления карточки
let index=0;
function debugADD(){
  addElement (iniCardsURL[index],iniCardsTXT[index]);
  if (index===5) {
    index=0;
  } else {
    index += 1;
  } 
}

// добавим обработчик кнопки +
addButton.addEventListener("click", function() {
  //debugADD();
  openbildCard();
  console.log("кликнули по кнопке +");
});


