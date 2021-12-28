import { Card } from "../components/Card.js";
import { openLookImg } from '../pages/index.js';

export { createCard };
//--------------------------------------------------------
//      Создадим карточку
//--------------------------------------------------------
function createCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(data, "element-card", openLookImg);
  // Создаём карточку 
  const cardElement = card.generateCard();
  return cardElement;
}

export const renderLoading = (popupBtn, isLoading = false) => {
  const currentActiveButton = document.querySelector(popupBtn);
  if (isLoading) {
    currentActiveButton.textContent = 'Загрузка...';
  } else {
    currentActiveButton.textContent = 'Сохранить';
  }
};