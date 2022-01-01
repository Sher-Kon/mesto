export { rdCards, selectorsElements };
//--------------------------------------------------------
// Возьмем пустой массив
//--------------------------------------------------------
const rdCards = [
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 1
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 2
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 3
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 4
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 5
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 6
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 7
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 8
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 9
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//10
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//11
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//12
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//13
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//14
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false } //15
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
