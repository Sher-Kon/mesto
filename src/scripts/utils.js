import { Card } from "../components/Card.js";
import { openLookImg, section } from './index.js';

export { creationCard };
//--------------------------------------------------------
//      Создадим карточку
//--------------------------------------------------------
function creationCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(data, "element-card", openLookImg);
  // Создаём карточку 
  const cardElement = card.generateCard();
  // Добавляем в DOM (in section class="elements")
  section.addItem(cardElement);
}
