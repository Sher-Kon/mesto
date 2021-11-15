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
iniElements();
