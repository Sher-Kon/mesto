import { Card } from "../components/Card.js";
//import { closeEditProfile, closeBildCard, closeLookImg} from './index.js';

export { creationCard};
//export { closePopupOnEsc, closePopupOnOverlay };
/*
//--------------------------------------------------------
// Универсальные функции попапа
//--------------------------------------------------------
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
*/
//--------------------------------------------------------
//      Создадим карточку
//--------------------------------------------------------
function creationCard(title, image, template, direction) {
  // Создадим экземпляр карточки
  const card = new Card(title, image, template);
  // Создаём карточку 
  const cardElement = card.generateCard();
  // Добавляем в DOM (section class="elements")
  if (direction === "up") {
    document.querySelector('.elements').prepend(cardElement);//добавить в начало 
  }
  if (direction === "dn") {
    document.querySelector('.elements').append(cardElement);//добавить в конец 
  }
}
