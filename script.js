let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__info-edit-btn');
let addButton = content.querySelector('.profile__add-btn');

let memButton = popup.querySelector('.form__submit-btn-mem');

function showClickEdit() {
    //href="#popup";
    console.log('Мы кликнули по элементу EDIT');
  }
  function showClickAdd() {
    console.log('Мы кликнули по элементу ADD');
  }
  function showClickMem() {
    console.log('Мы кликнули по элементу MEM');
  }

  editButton.addEventListener('click', showClickEdit);
  addButton.addEventListener('click', showClickAdd);
  memButton.addEventListener('click', showClickMem);
  