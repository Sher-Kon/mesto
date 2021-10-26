let content = document.querySelector(".content");
//let addButton = content.querySelector(".profile__add-btn");
let likeButton = content.querySelector(".element__like-btn");//только первая кнопка
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

editButton.addEventListener("click", clickEdit);//открыть окно
closeButton.addEventListener("click", clickClose);//закрыть окно

likeButton.addEventListener("click", clickLike);//лайкнуть
