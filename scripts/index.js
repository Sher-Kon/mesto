let content = document.querySelector(".content");
//let addButton = content.querySelector(".profile__add-btn");
let editButton = content.querySelector(".profile__info-edit-btn");//кн.открытия формы
let nameInfo = content.querySelector(".profile__info-name");
let jobInfo = content.querySelector(".profile__info-job");
let popupElement = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__text_input_name");
let jobInput = document.querySelector(".popup__text_input_job");
let closeButton = document.querySelector(".popup__btn-close");//кн.закрытия формы

let formElement = document.querySelector(".form");// Находим форму в DOM

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

// Обработчик открытия формы
function clickEdit() {
    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;
    popupElement.classList.add("popup_opened"); //открыть окно
}

// Обработчик закрытия формы
function clickClose() {
    popupElement.classList.remove("popup_opened"); //закрыть окно
}

// Обработчик лайка
function clickLike() {
   //likeButton.style.backgroundImage =  "url("./images/like_black.svg")";//like_black.svg
   console.log("лайкнули");
   console.log(likeButton);
   likeButton.classList.toggle("element__like-btn_active");
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
formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener("click", clickEdit);//открыть попап
closeButton.addEventListener("click", clickClose);//закрыть попап

// выберем кнопку лайка
const likeButtonA = content.querySelector(".element__like-btn_a");
const likeButtonB = content.querySelector(".element__like-btn_b");
const likeButtonC = content.querySelector(".element__like-btn_c");
const likeButtonD = content.querySelector(".element__like-btn_d");
const likeButtonE = content.querySelector(".element__like-btn_e");
const likeButtonF = content.querySelector(".element__like-btn_f");
// добавим обработчик
likeButtonA.addEventListener("click", function() {
  console.log("лайкнули A");
  likeButtonA.classList.toggle("element__like-btn_active");
});
likeButtonB.addEventListener("click", function() {
  console.log("лайкнули B");
  likeButtonB.classList.toggle("element__like-btn_active");
});
likeButtonC.addEventListener("click", function() {
  console.log("лайкнули C");
  likeButtonC.classList.toggle("element__like-btn_active");
});
likeButtonD.addEventListener("click", function() {
  console.log("лайкнули D");
  likeButtonD.classList.toggle("element__like-btn_active");
});
likeButtonE.addEventListener("click", function() {
  console.log("лайкнули E");
  likeButtonE.classList.toggle("element__like-btn_active");
});
likeButtonF.addEventListener("click", function() {
  console.log("лайкнули F");
  likeButtonF.classList.toggle("element__like-btn_active");
});

// выберем кнопку удаления
const deleteButtonA = document.querySelector('.element__del-btn_a');
const deleteButtonB = document.querySelector('.element__del-btn_b');
const deleteButtonC = document.querySelector('.element__del-btn_c');
const deleteButtonD = document.querySelector('.element__del-btn_d');
const deleteButtonE = document.querySelector('.element__del-btn_e');
const deleteButtonF = document.querySelector('.element__del-btn_f');
// добавим обработчик
deleteButtonA.addEventListener('click', function () {
  console.log("Кн. УДАЛИТЬ A");
  const listItem = deleteButtonA.closest('.element');
  listItem.remove();
}); 
deleteButtonB.addEventListener('click', function () {
  console.log("Кн. УДАЛИТЬ B");
  const listItem = deleteButtonB.closest('.element');
  listItem.remove();
}); 
deleteButtonC.addEventListener('click', function () {
  console.log("Кн. УДАЛИТЬ C");
  const listItem = deleteButtonC.closest('.element');
  listItem.remove();
}); 
deleteButtonD.addEventListener('click', function () {
  console.log("Кн. УДАЛИТЬ D");
  const listItem = deleteButtonD.closest('.element');
  listItem.remove();
}); 
deleteButtonE.addEventListener('click', function () {
  console.log("Кн. УДАЛИТЬ E");
  const listItem = deleteButtonE.closest('.element');
  listItem.remove();
}); 
deleteButtonF.addEventListener('click', function () {
  console.log("Кн. УДАЛИТЬ F");
  const listItem = deleteButtonF.closest('.element');
  listItem.remove();
}); 
