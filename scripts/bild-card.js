// элементы DOM на странице
const addButton = document.querySelector(".profile__add-btn");
// bildCard
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
const closeBttn = bildCardElement.querySelector(".bild-card__btn-close");//кн.закрытия формы bild-card
const bildBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн.закрытия формы bild-card
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement
// для валидатора
const placeError = bildCardElement.querySelector(".input-error-place");
const urlError = bildCardElement.querySelector(".input-error-url");

// Обработчик открытия формы bild-card
function openBildCard() {
  openPopup(bildCardElement); //открыть bildCard
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
  // Очистить инпуты 
  placeInput.value = "";
  urlInput.value = "";
  //очистим сообщения валидатора
  placeError.textContent = "";
  urlError.textContent = "";
  placeError.classList.remove("bild-card__text_type_error");
  urlError.classList.remove("bild-card__text_type_error");
  //закрыть bildCard
  closePopup(bildCardElement);
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
  // Серая кнопка ввода
  bildBttn.classList.add("bild-card__btn-save_no-active");
  bildBttn.classList.remove("bild-card__btn-save_active");
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
