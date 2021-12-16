export { iniCards, inputsEditProfile, inputsBildCard, selectorsForValid };
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
        inputsArraySelector: '.form__input',
        buttnSubmitSelector: '.form__submit'
    },
    {
        inputSelector: '.popup-job',
        inputsArraySelector: '.form__input',
        buttnSubmitSelector: '.form__submit'
    }
];

//--------------------------------------------------------
// массив инпутов BildCard
//--------------------------------------------------------
const inputsBildCard = [
    {
        inputSelector: '.bild-card-place',
        inputsArraySelector: '.form__input',
        buttnSubmitSelector: '.form__submit'
    },
    {
        inputSelector: '.bild-card-url',
        inputsArraySelector: '.form__input',
        buttnSubmitSelector: '.form__submit'
    }
];

//--------------------------------------------------------
// массив селекторов
//--------------------------------------------------------
const selectorsForValid = 
    {
        inputTypeError:     '.form__input_type_error',
        inputActiveError:   '.form__input-error_active',
        buttonInactive:     'button_inactive'
    };
