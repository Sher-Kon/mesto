export class UserInfo {
    constructor( nameSelector, infoSelector ) {
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
    }

    // Возвращает объект с данными пользователя
    getUserInfo() {
        const userInfo = { name: "", info: "" };
        userInfo.name = this._nameElement.textContent;
        userInfo.info = this._infoElement.textContent;
        return userInfo;
    }

    // принимает новые данные пользователя
    // и добавляет их на страницу.
    setUserInfo(name, info) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
    }
}
