const contentElement = document.querySelector(".content");//.content
const editButtonElement = contentElement.querySelector(".profile__info-edit-btn");
const addButtonElement = contentElement.querySelector(".profile__add-btn");
const popupElement = document.querySelector(".popup");
const saveButtonElement = popupElement.querySelector(".popup__btn-save");
const closeButtonElement = popupElement.querySelector(".popup__btn-close");

function ClickEdit() {
    const name = document.querySelector(".profile__info-name");
    const job = document.querySelector(".profile__info-job");
    //console.log(name.textContent);
    //console.log(subname.textContent);

    const nameInput = popupElement.querySelector(".popup__text-name");
    const jobInput = popupElement.querySelector(".popup__text-job");
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;

    popupElement.classList.add("popup_opened"); //открыть окно
    //console.log("Мы кликнули по элементу EDIT");
}

function ClickAdd() {
    console.log("Мы кликнули по элементу ADD");//отладка
}

function ClickSave() {
    const nameInput = popupElement.querySelector(".popup__text-name");
    const jobInput = popupElement.querySelector(".popup__text-job");
    //console.log(memname.value);
    //console.log(membrif.value);

    const name = document.querySelector(".profile__info-name");
    const job = document.querySelector(".profile__info-job");
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    popupElement.classList.remove("popup_opened"); //закрыть окно
    //console.log("Мы кликнули по элементу SAVE");
}

// Обработчик закрытия формы
function ClickClose() {
    popupElement.classList.remove("popup_opened"); //закрыть окно
    //console.log("Мы кликнули по кнопке CLOSE");
}

editButtonElement.addEventListener("click", ClickEdit);
closeButtonElement.addEventListener("click", ClickClose);
//addButtonElement.addEventListener("click", ClickAdd);//отладка
//saveButtonElement.addEventListener("click", ClickSave);//для div - контейнера

// Находим форму в DOM
const formElement = document.querySelector(".form");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    //console.log('Обработчик отправки формы');//отладка

    // Получите значение полей jobInput и nameInput
    const nameInput = popupElement.querySelector(".popup__text-name");
    const jobInput = popupElement.querySelector(".popup__text-job");

    // Выберите элементы, куда должны быть вставлены значения полей
    const name = document.querySelector(".profile__info-name");
    const job = document.querySelector(".profile__info-job");

    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    // Закроем форму
    popupElement.classList.remove("popup_opened"); //закрыть окно
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
