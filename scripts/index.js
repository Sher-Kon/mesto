// Возьмем готовый массив
const iniCards = [
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

class Card {
  constructor(title, image) {
    this._image = image;
    this._title = title;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.element-card')
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();// добавим обработчики

    // Добавим данные
    this._element.querySelector('.element__img').src = this._image;
    this._element.querySelector('.element__img').alt = "На фотографии " + this._title;
    this._element.querySelector('.element__txt').textContent = this._title;

    // Вернём элемент наружу
    return this._element;
  }

  // список слушателей
  _setEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._likeClick();
    });
  }

  // обработчик лайка
  _likeClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  }  
}

//Начальная загрузка страницы - 6 карточек
iniCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM (section class="elements")
  document.querySelector('.elements').append(cardElement);
}); 

// Универсальные функции попапа
function openPopup(element) {
  //открыть попап
  element.classList.add("popup_opened");
  // добавить слушатель ESC
  document.addEventListener("keydown", closePopupOnEsc);
  // добавить слушатель Overlay
  document.addEventListener("click", closePopupOnOverlay);
}

function closePopup(element) {
  //закрыть попап
  element.classList.remove("popup_opened");
  // снять слушатель Esc
  document.removeEventListener("keydown", closePopupOnEsc);
  // снять слушатель Overlay
  document.removeEventListener("click", closePopupOnOverlay);
}

// Закроем попап по кнопке ESC
function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    switch (evt.target.className) {
      case "profile__info-edit-btn":
        closeEditProfile();//закрыть окно «Редактировать профиль»
        break
      case "profile__add-btn":
        closeBildCard();//закрыть окно «BildCard»
        break
      case "element__img-btn":
        closeLookImg();//закрыть окно «Смотреть картинку»
        break
    }
  }
}

// Закроем попап кликом по оверлею
function closePopupOnOverlay(evt) {
  switch (evt.target.className) {
    case "popup edit-profile popup_opened":
      closeEditProfile();//закрыть окно «Редактировать профиль»
      break
    case "popup bild-card popup_opened":
      closeBildCard();//закрыть окно «BildCard»
      break
    case "popup look-img popup_opened":
      closeLookImg();//закрыть окно «Смотреть картинку»
      break
  }
}

//Начальная загрузка страницы - 6 карточек
function iniElements() {
  for (let index = 0; index < 6; index++) {
    addElement(iniCardsURL[index], iniCardsTXT[index], "dn");
  }
}
//iniElements();
