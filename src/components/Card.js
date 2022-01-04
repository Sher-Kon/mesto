//Класс карточки
export class Card {
    constructor(dataCard, template, handleCardClick, handleSetLikeRequest, handleDelLikeRequest, handleDelCardRequest, myID) {
        this._title = dataCard.name;
        this._image = dataCard.link;
        this._cardID = dataCard._id;
        this._likes = dataCard.likes;
        this._owner = dataCard.owner;
        this._ownerID = this._owner._id;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleSetLikeRequest = handleSetLikeRequest;
        this._handleDelLikeRequest = handleDelLikeRequest;
        this._handleDelCardRequest = handleDelCardRequest;
        this._myID = myID;
    }

    _myLike() {
        let myLike = false;
        const numLikes = this._likes.length;
        if (numLikes > 0) {
            // перебор всех лайков c целью найти свой
            for (let n = 0; n < numLikes; n += 1) {
                if (this._myID === this._likes[n]._id) {//владелец лайка
                    myLike = true;//есть мой лайк
                };
            }
        }
        return myLike;
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

        this._likeNum.textContent = this._likes.length;//Запишем число лайков

        if (this._myLike()) {
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
        this._likeNum.textContent = likes.length;//Отрисуем число лайков
        this._likes = likes;// Обновим объект лайков
    }
    setMyLike() {
        this._likeButton.classList.add('element__like-btn_active');//темный
    }
    delMyLike() {
        this._likeButton.classList.remove('element__like-btn_active');//пустой
    }

    // обработчик лайка card
    _handleLikeClick() {
        if (this._myLike()) {
            this._handleDelLikeRequest(this);//запрос на снятие лайка
        } else {
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
