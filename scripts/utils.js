import { closeEditProfile, closeBildCard, closeLookImg} from './index.js';
import { popupLookImg } from './index.js';
export {
    //lookImgElement, txtImg, srcImg,
    openLookImg, closePopupOnEsc, closePopupOnOverlay
}

//-------------------------------------------
// Функции для класса Card
//-------------------------------------------
//const lookImgElement = document.querySelector(".look-img");
//const txtImg = lookImgElement.querySelector(".look-img__title");
//const srcImg = lookImgElement.querySelector(".look-img__img");

// Обработчик открытия формы look-img
function openLookImg() {
    popupLookImg.open();//открыть lookImg
    //openPopup(lookImgElement); //открыть lookImg
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