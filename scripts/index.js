let content = document.querySelector(".content");
let likeButton = content.querySelector(".element__like-btn");//только первая кнопка
let editButton = content.querySelector(".profile__info-edit-btn");
let addButton = content.querySelector(".profile__add-btn");
let saveButton = content.querySelector(".popup__btn-save");
let closeButton = content.querySelector(".popup__btn-close");
let nameInfo = content.querySelector(".profile__info-name");
let jobInfo = content.querySelector(".profile__info-job");
let popupElement = content.querySelector(".popup");
let nameInput = popupElement.querySelector(".popup__text-name");
let jobInput = popupElement.querySelector(".popup__text-job");

let formElement = document.querySelector(".form");// Находим форму в DOM

// Обработчик открытия формы
function ClickEdit() {
    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;
    popupElement.classList.add("popup_opened"); //открыть окно
}

// Обработчик закрытия формы
function ClickClose() {
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
    popupElement.classList.remove("popup_opened"); //закрыть окно
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener("click", ClickEdit);
closeButton.addEventListener("click", ClickClose);
