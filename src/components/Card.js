//Класс карточки
export class Card {
    constructor(dataCard, template, handleCardClick, handleSetLikeRequest, handleDelLikeRequest, handleDelCardRequest, myID) {
        this._myCard = dataCard.myCard
        this._ownerID = dataCard.ownerID
        this._cardID = dataCard.cardID
        this._title = dataCard.name;
        this._image = dataCard.link;
        this._numLikes = dataCard.numLikes
        this._myLike = dataCard.myLike;
        this._likes = dataCard.likes;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleSetLikeRequest = handleSetLikeRequest;
        this._handleDelLikeRequest = handleDelLikeRequest;
        this._handleDelCardRequest = handleDelCardRequest;
        this._myID = myID;
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. 
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

        //this._likeNum.textContent = this._numLikes;//Запишем число лайков
        this._likeNum.textContent = this._likes.length;//Запишем число лайков

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
            this._handleLikeClick();
        });

        if (this._ownerID === this._myID) { //своя карточка
            this._delButton.addEventListener('click', () => {
                this._handleDeleteCard();
            });
        }

        this._imgButton.addEventListener('click', () => {
            this._handlePictureClick();
        });
    }

    updateLikes(likes) {
        //this._numLikes = likes;//Обновим число лайков
        this._likeNum.textContent = likes.length;//Отрисуем число лайков
    }
    setMyLike() {
        this._myLike = true;//есть мой лайк
        this._likeButton.classList.add('element__like-btn_active');//темный
    }
    delMyLike() {
        this._myLike = false;//нет моего лайка
        this._likeButton.classList.remove('element__like-btn_active');//пустой
    }

    // обработчик лайка card
    _handleLikeClick() {
        if (this._myLike) {
            //console.log( "удалим лайк id: " + this._cardID);
            this._handleDelLikeRequest(this);//запрос на снятие лайка
        } else {
            //console.log( "добавим лайк id: " +this._cardID);
            this._handleSetLikeRequest(this);//запрос на установку лайка
        }
    }

    // обработчик delete card
    _handleDeleteCard() {
        this._handleDelCardRequest(this);//запрос на удаление карточки
    }

    // обработчик lookPicture
    _handlePictureClick() {
        this._handleCardClick(this._element);//openLookImg(this._element)
    }

    // обработчик delete element DOM
    deleteCardElement() {
        this._element.remove();//Удалим элемент DOM
    }

}
