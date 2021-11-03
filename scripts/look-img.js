// lookImg
const lookImgElement = document.querySelector(".look-img");
const txtImg = lookImgElement.querySelector(".look-img__title");
const srcImg = lookImgElement.querySelector(".look-img__img");
const closelookImg = lookImgElement.querySelector(".look-img__btn-close");//кн.закрытия формы lookImg
const formlookImg = lookImgElement.querySelector(".form");// Находим форму в DOM in lookImgElement

// Обработчик открытия формы look-img
function openLookImg() {
    openPopup(lookImgElement); //открыть lookImg
  }
  // Обработчик закрытия формы look-img
  function closeLookImg() {
    closePopup(lookImgElement);//закрыть lookImg
  }
  // Кнопка - Х -закрыть "look-img"
  closelookImg.addEventListener("click", closeLookImg);//закрыть lookImg
  