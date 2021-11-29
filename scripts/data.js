export { iniCards, inputsEditProfile, inputsBildCard };
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
        inputSelector: '.popup-name'//'.popup__text_input_name'
    },
    {
        inputSelector: '.popup-job'//'.popup__text_input_job'
    }
];

//--------------------------------------------------------
// массив инпутов BildCard
//--------------------------------------------------------
const inputsBildCard = [
    {
        inputSelector: '.bild-card-place'//'.bild-card__text_input_place'
    },
    {
        inputSelector: '.bild-card-url'//'.bild-card__text_input_url'
    }
];
