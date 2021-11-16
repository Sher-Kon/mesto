// элементы DOM на странице
const addButton = document.querySelector(".profile__add-btn");
// bildCard popup
const bildCardElement = document.querySelector(".bild-card");
const placeInput = bildCardElement.querySelector(".bild-card__text_input_place");
const urlInput = bildCardElement.querySelector(".bild-card__text_input_url");
const closeBttn = bildCardElement.querySelector(".bild-card__btn-close");//кн.закрытия формы bild-card
const bildCardBttn = bildCardElement.querySelector(".bild-card__btn-save");//кн. создания card
const formbildCard = bildCardElement.querySelector(".form");// Находим форму в DOM in bildCardElement

// Обработчик открытия формы bild-card
function openBildCard() {
  openPopup(bildCardElement); //открыть bildCard
}
// Обработчик закрытия формы bild-card
function closeBildCard() {
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
  // Сделаем кнопку неактивной
  bildCardBttn.disabled = true;
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
