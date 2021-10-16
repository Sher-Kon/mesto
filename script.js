let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__info-edit-btn");
let addButton = content.querySelector(".profile__add-btn");
let saveButton = content.querySelector(".popup__btn-save");
let closeButton = content.querySelector(".popup__btn-close");
let popupElement = content.querySelector(".popup");
// Находим форму в DOM
let formElement = content.querySelector(".form");

function ClickEdit() {
    let name = document.querySelector(".profile__info-name");
    let job = document.querySelector(".profile__info-job");
    //console.log(name.textContent);
    //console.log(subname.textContent);

    let nameInput = document.querySelector(".popup__text-name");
    let jobInput = document.querySelector(".popup__text-job");
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;

    popupElement.classList.add("popup_opened"); //открыть окно
    //console.log("Мы кликнули по элементу EDIT");
}

function ClickAdd() {
    //console.log("Мы кликнули по элементу ADD");
}

function ClickSave() {
    let nameInput = document.querySelector(".popup__text-name");
    let jobInput = document.querySelector(".popup__text-job");
    //console.log(memname.value);
    //console.log(membrif.value);

    let name = document.querySelector(".profile__info-name");
    let job = document.querySelector(".profile__info-job");
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    popupElement.classList.remove("popup_opened"); //закрыть окно
    //console.log("Мы кликнули по элементу SAVE");
}

function ClickClose() {
    popupElement.classList.remove("popup_opened"); //закрыть окно
    //console.log("Мы кликнули по элементу CLOSE");
}

editButton.addEventListener("click", ClickEdit);
addButton.addEventListener("click", ClickAdd);
closeButton.addEventListener("click", ClickClose);
saveButton.addEventListener("click", ClickSave);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput
    let nameInput = document.querySelector(".popup__text-name");
    let jobInput = document.querySelector(".popup__text-job");

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector(".profile__info-name");
    let job = document.querySelector(".profile__info-job");

    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler); 
