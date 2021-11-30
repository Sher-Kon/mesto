import { openPopup } from './index.js';
export {
    lookImgElement, txtImg, srcImg,
    openLookImg
};

//-------------------------------------------
// Функции для класса Card
//-------------------------------------------
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");

// Обработчик открытия формы look-img
function openLookImg() {
    openPopup(lookImgElement); //открыть lookImg
}
