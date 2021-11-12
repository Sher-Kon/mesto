//Начальная загрузка страницы - 6 карточек
function iniElements () {
  for (let index = 0; index < 6; index++) {
    addElement (iniCardsURL[index],iniCardsTXT[index],"dn");
  }
}
iniElements();
