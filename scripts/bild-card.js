// элементы DOM на странице
const addButton = document.querySelector(".profile__add-btn");
// bildCard popup
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
const closeBttn = bildCardElement.querySelector(".bild-card__btn-close");//кн.закрытия формы bild-card
const bildCardBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн. создания card
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement

// Закроем попап  «BildCard» по кнопке ESC
function closeBildCardOnEsc(evt) {
  if (evt.key === "Escape") {
    //console.log("Нажали — ESC в BildCard");// для отладки
    closeBildCard();//закрыть окно «BildCard»
  }
}
// Закроем попап кликом по оверлею
function closeBildCardOnOverlay(evt) {
  if (evt.target.className === "popup bild-card popup_opened") {
    //console.log("Нажали — OVERLAY в BildCard");// для отладки
    closeBildCard();//закрыть окно «BildCard»
  }
}

// Обработчик открытия формы bild-card
function openBildCard() {
  openPopup(bildCardElement); //открыть bildCard
  // добавить слушатель Esc
  document.addEventListener("keydown", closeBildCardOnEsc);
  // добавить слушатель Overlay
  document.addEventListener("click", closeBildCardOnOverlay);
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  //закрыть попап bildCard
  closePopup(bildCardElement);
  // снять слушатель Esc
  document.removeEventListener("keydown", closeBildCardOnEsc);
  // снять слушатель Overlay
  document.removeEventListener("click", closeBildCardOnOverlay);
}
// Обработчик «отправки» формы bild-card
function bildCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставьте новые значения в новую карточку
  const place = placeInput.value;
  const url = urlInput.value;
  if (url !== '') {
    addElement(url, place, "up");//клонируем карточку в начало
  }
  // Очистить инпуты для новой карточки
  placeInput.value = "";
  urlInput.value = "";
  // Сделаем кнопку неактивной
  bildCardBttn.classList.add('button_inactive');
  // Закроем форму bildCard()
  closeBildCard();//закрыть окно bild-card()
}

// форма bild-card:
// Кнопка - «создать»
formbildCard.addEventListener("submit", bildCardSubmitHandler);
// Кнопка - Х -закрыть  окно "Новое место"
closeBttn.addEventListener("click", closeBildCard);
// Кнопка « + » (открыть окно "Новое место")
addButton.addEventListener("click", openBildCard);
