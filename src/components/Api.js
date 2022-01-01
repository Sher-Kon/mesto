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
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "ini card" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
            });
    }
    // прочитать профиль
    readProfile() {
        return fetch(this._baseUrl + "users/me", {
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "Rd profile" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
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
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "Wr profile" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
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
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "writeCard" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
            });
    }
    // удалить карточку
    deleteCard(cardId) {
        return fetch(this._baseUrl + "cards/" + cardId, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "deleteCard" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
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
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "Wr avatar" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
            });
    }
    // добавить лайк
    setLike(cardId) {
        return fetch(this._baseUrl + "cards/" + cardId + "/likes", {
            method: 'PUT',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "setLike" не выполнен. Ошибка: ' + err)
            })
            .then((result) => {
                return result;
            });
    }
    // удалить лайк
    delLike(cardId) {
        return fetch(this._baseUrl + "cards/" + cardId + "/likes", {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('Запрос "delLike" не выполнен. Ошибка: ', err)
            })
            .then((result) => {
                return result;
            })
    }
    // начальная загрузка:прочитать профиль, карточки
    getIniData() {
        return Promise.all([this.readProfile(), this.getInitialCards()]);
    }

}