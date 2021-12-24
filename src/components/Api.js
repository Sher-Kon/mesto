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
}