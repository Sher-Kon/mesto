//Класс Api
export class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    // прочитать карточки
    getInitialCards() {
        return fetch(this._baseUrl + "cards", {
            headers: this._headers
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "ini card" не выполнен: ', err);
            });
    }
    // прочитать профиль
    readProfile() {
        return fetch(this._baseUrl + "users/me", {
            headers: this._headers
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "Rd profile" не выполнен: ', err);
            });
    }
    // сохранить профиль
    writeProfile(data) {
        return fetch(this._baseUrl + "users/me", {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "Wr profile" не выполнен: ', err);
            });
    }
    // сохранить карточку
    writeCard(data) {
        return fetch(this._baseUrl + "cards", {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "writeCard" не выполнен: ', err);
            });
    }
    // удалить карточку
    deleteCard(cardId) {
        return fetch(this._baseUrl + "cards/" + cardId, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "deleteCard" не выполнен: ', err);
            });
    }
    // сохранить аватар
    writeAvatar(linkAvatar) {
        return fetch(this._baseUrl + "users/me/avatar", {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: linkAvatar
            })
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "Wr avatar" не выполнен: ', err);
            });
    }
    // добавить лайк
    setLike(cardId) {
        return fetch(this._baseUrl + "cards/" + cardId + "/likes", {
            method: 'PUT',
            headers: this._headers
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "setLike" не выполнен: ', err);
            });
    }
    // удалить лайк
    delLike(cardId) {
        return fetch(this._baseUrl + "cards/" + cardId + "/likes", {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => res.json())
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log('Ошибка. Запрос "delLike" не выполнен: ', err);
            });
    }
    // начальная загрузка:прочитать профиль, карточки
    getIniData() {
        return Promise.all ([this.readProfile(), this.getInitialCards()]);
    }

}