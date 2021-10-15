let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__info-edit-btn");
let addButton = content.querySelector(".profile__add-btn");
let saveButton = content.querySelector(".popup__btn-save");
let closeButton = content.querySelector(".popup__btn-close");
let popupElement = content.querySelector(".popup");

function ClickEdit() {
    let name = document.querySelector(".profile__info-title");
    let subname = document.querySelector(".profile__info-subtitle");
    console.log(name.textContent);
    console.log(subname.textContent);

    let memname = document.querySelector(".popup__text-name");
    let membrif = document.querySelector(".popup__text-brif");
    memname.value = name.textContent;
    membrif.value = subname.textContent;

    popupElement.classList.add("popup_opened"); //открыть окно
    console.log("Мы кликнули по элементу EDIT");
}

function ClickAdd() {
    console.log("Мы кликнули по элементу ADD");
}

function ClickSave() {
    let memname = document.querySelector(".popup__text-name");
    let membrif = document.querySelector(".popup__text-brif");
    console.log(memname.value);
    console.log(membrif.value);

    let name = document.querySelector(".profile__info-title");
    let subname = document.querySelector(".profile__info-subtitle");
    name.textContent = memname.value;
    subname.textContent = membrif.value;

    popupElement.classList.remove("popup_opened"); //закрыть окно
    console.log("Мы кликнули по элементу SAVE");
}

function ClickClose() {
    popupElement.classList.remove("popup_opened"); //закрыть окно
    console.log("Мы кликнули по элементу CLOSE");
}

editButton.addEventListener("click", ClickEdit);
addButton.addEventListener("click", ClickAdd);
saveButton.addEventListener("click", ClickSave);
closeButton.addEventListener("click", ClickClose);
