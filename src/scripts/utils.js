import { Card } from "../components/Card.js";
import { openLookImg } from '../pages/index.js';

export { createCard };
//--------------------------------------------------------
//      Создадим карточку
//--------------------------------------------------------
function createCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(
    data,
    "element-card",
    openLookImg
  );
  // Создаём карточку 
  const cardElement = card.generateCard();
  return cardElement;
}

export const renderLoading = (popupBtn, isLoading = false) => {
  const saveButton = document.querySelector(popupBtn);
  if (isLoading) {
    saveButton.textContent = 'Загрузка...';
  } else {
    saveButton.textContent = 'Сохранить';
  }
};

export const renderBtnSave = (popupBtn, txtBtn) => {
  const saveButton = document.querySelector(popupBtn);
  saveButton.textContent = txtBtn;
};