let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__info-edit-btn');
let addButton = content.querySelector('.profile__add-btn');
let memButton = content.querySelector('.popup__btn-mem');
let popupElement = content.querySelector('.popup');

function showClickEdit() {
  let name = document.querySelector('.profile__info-title');
  let subname = document.querySelector('.profile__info-subtitle');
  console.log(name.textContent);
  console.log(subname.textContent);

  let memname = document.querySelector('.popup__text-name');
  let membrif = document.querySelector('.popup__text-brif');
  memname.value = name.textContent;
  membrif.value = subname.textContent;

    popupElement.classList.add('popup_opened');//открыть окно
    console.log('Мы кликнули по элементу EDIT');
}

function showClickAdd() {
    console.log('Мы кликнули по элементу ADD');
}

function showClickMem() {
    let memname = document.querySelector('.popup__text-name');
    let membrif = document.querySelector('.popup__text-brif');
    console.log(memname.value);
    console.log(membrif.value);
  
    popupElement.classList.remove('popup_opened');//закрыть окно
    console.log('Мы кликнули по элементу MEM');
}

  editButton.addEventListener('click', showClickEdit);
  addButton.addEventListener('click', showClickAdd);
  memButton.addEventListener('click', showClickMem);
  