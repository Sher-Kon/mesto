//Класс Api_Sign
class Api_Sign {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }


    // РЕГИСТРАЦИЯ
    register(data) {
        return fetch(this._baseUrl + "signup", {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        })
            .then(this._checkResponse)
            .then((result) => {
                return result;
            });
    }

    register_fix() {
        return fetch(this._baseUrl + "signup", {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                "password": "somepassword",
                "email": "sher-kon@yandex.ru"
            })
        })
            .then(this._checkResponse)
            .then((result) => {
                return result;
            });
    }

    //АВТОРИЗАЦИЯ
    logo_fix() {
        return fetch(this._baseUrl + "signin", {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                "password": "somepassword",
                "email": "sher-kon@yandex.ru"
            })
        })
            .then(this._checkResponse)
            .then((result) => {
                return result;
            });
    }

    //Проверка валидности токена (JWT)
    check_token(JWT) {
        return fetch(this._baseUrl + "users/me", {
            method: 'GET',
            headers:
            {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JWT}`
            }
        })
            .then(this._checkResponse)
            .then((result) => {
                return result;
            });
    }


}

//--------------------------------------------------------
// Создадим экземпляр class Api 
const api_sign = new Api_Sign({
    baseUrl: 'https://auth.nomoreparties.co/',
    headers: {
        //authorization: '51ca28f6-a002-497b-8233-6c80bd0cac76',
        //'Content-Type': 'application/json'
        "Content-Type": "application/json"
    }
});

export default api_sign;    