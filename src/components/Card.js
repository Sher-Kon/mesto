//Класс карточки
export class Card {
    constructor(dataCard, template, handleCardClick) {
        this._title = dataCard.name;
        this._image = dataCard.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
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
        this._element.querySelector('.element__like-btn').addEventListener('click', () => {
            this._likeClick();
        });
        this._element.querySelector('.element__del-btn').addEventListener('click', () => {
            this._closeClick();
        });
        this._element.querySelector('.element__img-btn').addEventListener('click', () => {
            this._lookClick();
        });
    }

    // обработчик лайка
    _likeClick() {
        this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
    }
    // обработчик close
    _closeClick() {
        this._element.remove();
    }
    // обработчик look
    _lookClick() {
        this._handleCardClick(this._element);//openLookImg(this._element)
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._setEventListeners();// добавим обработчики

        // Добавим данные
        this._element.querySelector('.element__img').src = this._image;
        this._element.querySelector('.element__img').alt = "На фотографии " + this._title;
        this._element.querySelector('.element__txt').textContent = this._title;

        // Вернём элемент наружу
        return this._element;
    }
}
