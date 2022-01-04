export { rdCards, selectorsElements };
//--------------------------------------------------------
// Возьмем пустой массив
//--------------------------------------------------------
const rdCards = [
    { name: "", link: "", owner: {}, _id: "", likes: [] },// 1
    { name: "", link: "", owner: {}, _id: "", likes: [] },// 2
    { name: "", link: "", owner: {}, _id: "", likes: [] },// 3
    { name: "", link: "", owner: {}, _id: "", likes: [] },// 4
    { name: "", link: "", owner: {}, _id: "", likes: [] },// 5
    { name: "", link: "", owner: {}, _id: "", likes: [] },// 6
  ];
  
//--------------------------------------------------------
// массив селекторов 
//--------------------------------------------------------
const selectorsElements =
{
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inputTypeError: '.form__input_type_error',
    inputActiveError: '.form__input-error_active',
    buttonInactive: 'button_inactive'

};
