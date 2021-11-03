// элементы "template" DOM определим глобально
const elementTemplate = document.querySelector("#element").content;//клон
const elementsOnline = document.querySelector(".elements");//куда вставить

// Клонируем карточку
function addElement (url, txt, direction) {
    // клонируем содержимое тега template
    const userElement = elementTemplate.querySelector(".element").cloneNode(true);
    // наполняем содержимым
    userElement.querySelector(".element__img").src = url;
    userElement.querySelector(".element__img").alt = "На фотографии " + txt;
    userElement.querySelector(".element__txt").textContent = txt;//'Клон карты';
    // выберем кнопку просмотра картинки "lookImg"
    userElement.querySelector(".element__img-btn").addEventListener("click", function (evt) {
      txtImg.textContent = evt.target.closest(".element").textContent;
      srcImg.src = evt.target.closest(".element__img").src;
      openLookImg();//открыть окно просмотра картинки "lookImg"
    });
    // выберем кнопку лайка
    userElement.querySelector(".element__like-btn").addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like-btn_active");
    });
    // выберем кнопку удаления
    userElement.querySelector(".element__del-btn").addEventListener("click", function (evt) {
      const listItem = evt.target.closest(".element");
      listItem.remove();
    });
    // отображаем на странице
    if (direction==="dn") {
      elementsOnline.append(userElement);//добавить в конец - ini
    }
    if (direction==="up") {
      elementsOnline.prepend(userElement);//добавить в начало  
    }
  }
