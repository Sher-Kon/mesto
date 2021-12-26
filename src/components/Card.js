//Класс карточки
export class Card {
    constructor(dataCard, template, handleCardClick) {
        this._title = dataCard.name;
        this._image = dataCard.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like-btn');
        this._likeNum =    this._element.querySelector('.element__like-num');
        this._delButton = this._element.querySelector('.element__del-btn');
        this._imgButton = this._element.querySelector('.element__img-btn');
        this._cardImage = this._element.querySelector('.element__img');
        this._setEventListeners();// добавим обработчики

        // Добавим данные
        this._cardImage.src = this._image;
        this._cardImage.alt = "На фотографии " + this._title;
        this._element.querySelector('.element__txt').textContent = this._title;

        this._likeNum.textContent = 12;//Запишем число лайков

        // Вернём элемент наружу
        return this._element;
    }

    // клонировать Template
    _getTemplate() {
        const cardElement = document
            .querySelector('.' + this._template)//template=.element-card
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    // список слушателей
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._likeClick();
        });
        this._delButton.addEventListener('click', () => {
            this._deleteCard();
        });
        this._imgButton.addEventListener('click', () => {
            this._handlePictureClick();
        });
    }

    // обработчик лайка
    _likeClick() {
        this._likeButton.classList.toggle('element__like-btn_active');
    }
    // обработчик delete
    _deleteCard() {
        this._element.remove();
    }
    // обработчик lookPicture
    _handlePictureClick() {
        this._handleCardClick(this._element);//openLookImg(this._element)
    }

}
