let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__info-edit-btn');
let addButton = content.querySelector('.profile__add-btn');

let memButton = content.querySelector('.popup__btn-mem');

let popupElement = content.querySelector('.popup');

function showClickEdit() {
    popupElement.classList.add('popup_opened');
    console.log('Мы кликнули по элементу EDIT');
  }
  function showClickAdd() {
    console.log('Мы кликнули по элементу ADD');
  }
  function showClickMem() {
    popupElement.classList.remove('popup_opened');
    console.log('Мы кликнули по элементу MEM');
  }

  editButton.addEventListener('click', showClickEdit);
  addButton.addEventListener('click', showClickAdd);
  memButton.addEventListener('click', showClickMem);
  