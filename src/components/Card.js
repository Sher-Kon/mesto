//Класс карточки
export class Card {
    constructor(dataCard, template, handleCardClick, handleSetLike, handleDelLike, handleDelCard) {
        this._myCard = dataCard.myCard
        this._myID = dataCard.myID
        this._ownerID = dataCard.ownerID
        this._cardID = dataCard.cardID
        this._title = dataCard.name;
        this._image = dataCard.link;
        this._numLikes = dataCard.numLikes
        this._myLike = dataCard.myLike;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleSetLike = handleSetLike;
        this._handleDelLike = handleDelLike;
        this._handleDelCard = handleDelCard;
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like-btn');
        this._likeNum = this._element.querySelector('.element__like-num');
        this._delButton = this._element.querySelector('.element__del-btn');
        this._imgButton = this._element.querySelector('.element__img-btn');
        this._cardImage = this._element.querySelector('.element__img');
        this._setEventListeners();// добавим обработчики

        // Добавим данные
        this._cardImage.src = this._image;
        this._cardImage.alt = "На фотографии " + this._title;
        this._element.querySelector('.element__txt').textContent = this._title;
        this._likeNum.textContent = this._numLikes;//Запишем число лайков
        if (this._myLike) {
            this._likeButton.classList.add('element__like-btn_active');//отметить
        } else {
            this._likeButton.classList.remove('element__like-btn_active');//пустой
        };

        if (this._ownerID !== this._myID) {// чужая карточка
            this._delButton.remove();// удалим ведерко
        }
        
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
        // кнопка лайка
        this._likeButton.addEventListener('click', () => {
            this._likeClick();
        });

        if (this._ownerID === this._myID) { //своя карточка
            this._delButton.addEventListener('click', () => {
                this._deleteCard();
            });
        }

        this._imgButton.addEventListener('click', () => {
            this._handlePictureClick();
        });
    }

    updateLikes(likes) {
        this._numLikes = likes;//Обновим число лайков
        this._likeNum.textContent = this._numLikes;//Отрисуем число лайков
    }

    // обработчик лайка
    _likeClick() {
        //this._likeButton.classList.toggle('element__like-btn_active');
        if (this._myLike) {
            //console.log( "удалим лайк id: " + this._cardID);
            this._handleDelLike(this._element);//this._cardID
            this._likeButton.classList.remove('element__like-btn_active');//пустой
            //this._numLikes = this._numLikes - 1;//Обновим число лайков
            this._myLike = false;
        } else {
            //console.log( "добавим лайк id: " +this._cardID);
            this._handleSetLike(this._element);//this._cardID
            this._likeButton.classList.add('element__like-btn_active');//отметить
            //this._numLikes = this._numLikes + 1;//Обновим число лайков
            this._myLike = true;
        }
        //this._likeNum.textContent = this._numLikes;//Отрисуем число лайков
    }
    
    // обработчик delete
    _deleteCard() {
        this._handleDelCard(this._cardID);//запрос на удаление карточки
        this._element.remove();
    }
    // обработчик lookPicture
    _handlePictureClick() {
        this._handleCardClick(this._element);//openLookImg(this._element)
    }

}
