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
/*    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 7
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 8
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },// 9
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//10
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//11
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//12
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//13
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false },//14
    { name: "", link: "", myID: "", ownerID: "", cardID: "", numLikes: 0, likes: [], myLike: false } //15*/
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
