export { iniCards, inputsEditProfile, inputsBildCard, selectorsEditProfile, selectorsBildCard };
//--------------------------------------------------------
// Возьмем готовый массив
//--------------------------------------------------------
const iniCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
    }
];

//--------------------------------------------------------
// массив инпутов EditProfile
//--------------------------------------------------------
const inputsEditProfile = [
    {
        inputSelector: '.popup-name',
    },
    {
        inputSelector: '.popup-job',
    }
];

//--------------------------------------------------------
// массив инпутов BildCard
//--------------------------------------------------------
const inputsBildCard = [
    {
        inputSelector: '.bild-card-place',
    },
    {
        inputSelector: '.bild-card-url',
    }
];

//--------------------------------------------------------
// массив селекторов EditProfile
//--------------------------------------------------------
const selectorsEditProfile =
{
    formSelector: '.edit-profile',
    submitButtonSelector: '.form__submit',
    inputSelector: '.form__input',
    inputTypeError: '.form__input_type_error',
    inputActiveError: '.form__input-error_active',
    buttonInactive: 'button_inactive'
};

//--------------------------------------------------------
// массив селекторов BildCard
//--------------------------------------------------------
const selectorsBildCard =
{
    formSelector: '.bild-card',
    submitButtonSelector: '.form__submit',
    inputSelector: '.form__input',
    inputTypeError: '.form__input_type_error',
    inputActiveError: '.form__input-error_active',
    buttonInactive: 'button_inactive'
};
