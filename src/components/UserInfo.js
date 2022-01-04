export class UserInfo {
    constructor( nameSelector, infoSelector, avatarSelector ) {
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    // Возвращает объект с данными пользователя
    getUserInfo() {
        const userInfo = { name: "", info: "" };
        userInfo.name = this._nameElement.textContent;
        userInfo.info = this._infoElement.textContent;
        userInfo.avatar = this._avatarElement.src;
        return userInfo;
    }

    // принимает новые данные пользователя
    // и добавляет их на страницу.
    setUserInfo(name, info, avatar) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
        this._avatarElement.src = avatar;
    }
}
