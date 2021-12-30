(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{$B:()=>Z,BH:()=>fe,zr:()=>se,AB:()=>he});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var n,r;return n=e,(r=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "ini card" не выполнен: ',e)}))}},{key:"readProfile",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Rd profile" не выполнен: ',e)}))}},{key:"writeProfile",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr profile" не выполнен: ',e)}))}},{key:"writeCard",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "writeCard" не выполнен: ',e)}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "deleteCard" не выполнен: ',e)}))}},{key:"writeAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr avatar" не выполнен: ',e)}))}},{key:"setLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"PUT",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "setLike" не выполнен: ',e)}))}},{key:"delLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "delLike" не выполнен: ',e)}))}},{key:"getIniData",value:function(){return Promise.all([this.readProfile(),this.getInitialCards()])}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".x-btn").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&r(t.prototype,n),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function l(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=i.call(this,e))._textImg=r._popupElement.querySelector(t),r._logImg=r._popupElement.querySelector(n),r}return t=l,(n=[{key:"open",value:function(e){a(f(l.prototype),"open",this).call(this),this._logImg.src=e.querySelector(".element__img").src,this._logImg.alt="На фотографии "+e.querySelector(".element__txt").textContent,this._textImg.textContent=e.querySelector(".element__txt").textContent}}])&&u(t.prototype,n),l}(o);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitPopup=t,n._formElement=n._popupElement.querySelector(".form"),n._inputList=Array.from(n._popupElement.querySelectorAll(".form__input")),n}return t=u,(n=[{key:"close",value:function(){_(b(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){_(b(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmitPopup)}}])&&d(t.prototype,n),u}(o);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function S(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitPopup=t,n._formElement=n._popupElement.querySelector(".form"),n}return t=u,(n=[{key:"open",value:function(e){w(C(u.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;w(C(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(){e._handleSubmitPopup(e._card)}))}}])&&E(t.prototype,n),u}(o);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._infoElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={name:"",info:""};return e.name=this._nameElement.textContent,e.info=this._infoElement.textContent,e}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._infoElement.textContent=t}}])&&D(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=t,this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemDn",value:function(e){this._container.append(e)}},{key:"renderItem",value:function(e){var t=this._renderer(e);this.addItem(t)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItemDn(n)}))}}])&&P(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"_checkInputValidity",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),x(this,"_addInputEventListener",(function(e){e.addEventListener("input",(function(){r._findErrCheckInputAndToggleBtn(e)}))})),x(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t,n){t.classList.add(this._settings.inputTypeError),e.classList.add(this._settings.inputActiveError),e.textContent=n}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._settings.inputTypeError),e.classList.remove(this._settings.inputActiveError),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.id,r=e._formElement.querySelector("."+n+"-error");e._hideInputError(r,t)}))}},{key:"disableButtonState",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._settings.buttonInactive)}},{key:"enableButtonState",value:function(){this._submitButton.disabled=!1,this._submitButton.classList.remove(this._settings.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButtonState():this.enableButtonState()}},{key:"_findErrCheckInputAndToggleBtn",value:function(e){var t=e.id,n=this._formElement.querySelector("."+t+"-error");this._checkInputValidity(n,e),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){e._addInputEventListener(t)}))}}])&&q(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._myCard=t.myCard,this._myID=t.myID,this._ownerID=t.ownerID,this._cardID=t.cardID,this._title=t.name,this._image=t.link,this._numLikes=t.numLikes,this._myLike=t.myLike,this._template=n,this._handleCardClick=r,this._handleSetLike=o,this._handleDelLike=i,this._handleDelCard=u}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-btn"),this._likeNum=this._element.querySelector(".element__like-num"),this._delButton=this._element.querySelector(".element__del-btn"),this._imgButton=this._element.querySelector(".element__img-btn"),this._cardImage=this._element.querySelector(".element__img"),this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt="На фотографии "+this._title,this._element.querySelector(".element__txt").textContent=this._title,this._likeNum.textContent=this._numLikes,this._myLike?this._likeButton.classList.add("element__like-btn_active"):this._likeButton.classList.remove("element__like-btn_active"),this._ownerID!==this._myID&&this._delButton.remove(),this._element}},{key:"_getTemplate",value:function(){return document.querySelector("."+this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeClick()})),this._ownerID===this._myID&&this._delButton.addEventListener("click",(function(){e._deleteCard()})),this._imgButton.addEventListener("click",(function(){e._handlePictureClick()}))}},{key:"updateLikes",value:function(e){this._numLikes=e,this._likeNum.textContent=this._numLikes}},{key:"_likeClick",value:function(){this._myLike?(this._handleDelLike(this),this._likeButton.classList.remove("element__like-btn_active"),this._myLike=!1):(this._handleSetLike(this),this._likeButton.classList.add("element__like-btn_active"),this._myLike=!0)}},{key:"_deleteCard",value:function(){this._handleDelCard(this)}},{key:"deleteCardElement",value:function(){var e=this;this._likeButton.removeEventListener("click",(function(){e._likeClick()})),this._ownerID===this._myID&&this._delButton.removeEventListener("click",(function(){e._deleteCard()})),this._imgButton.removeEventListener("click",(function(){e._handlePictureClick()})),this._element.remove()}},{key:"_handlePictureClick",value:function(){this._handleCardClick(this._element)}}])&&R(t.prototype,n),e}(),U=function(e,t){document.querySelector(e).textContent=t},V={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inputTypeError:".form__input_type_error",inputActiveError:".form__input-error_active",buttonInactive:"button_inactive"};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=[{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1}],J="",z=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33/",headers:{authorization:"51ca28f6-a002-497b-8233-6c80bd0cac76","Content-Type":"application/json"}}),M=new B(H,(function(e){return new A(e,"element-card",se,he,fe,Z).generateCard()}),".elements"),W=new O(".confirm",(function(e){e.preventDefault(),console.log("Удаляем карточку - submit popup"),console.log("Удаляем карточку - submit popup"),W.close()})),$=new k(".edit-avatar",(function(e){e.preventDefault(),U(".edit-avatar__btn-save","Загрузка...");var t=$.getInputValues();z.writeAvatar(t.urlAvatar).then((function(e){oe.src=e.avatar,console.log("Записан аватар, URL: "+t.urlAvatar),U(".edit-avatar__btn-save","Сохранить"),$.close()})).catch((function(e){return alert(e)}))})),F=new k(".edit-profile",(function(e){e.preventDefault();var t=F.getInputValues();Q.setUserInfo(t.nameInput,t.jobInput);var n={name:"",about:""};n.name=t.nameInput,n.about=t.jobInput,U(".popup__btn-save","Загрузка..."),z.writeProfile(n).then((function(e){U(".popup__btn-save","Сохранить"),F.close()})).catch((function(e){return alert(e)}))})),G=new k(".bild-card",(function(e){e.preventDefault();var t=G.getInputValues(),n={name:"",link:""};n.name=t.placeInput,n.link=t.urlInput,U(".bild-card__btn-save","Загрузка..."),z.writeCard(n).then((function(e){U(".bild-card__btn-save","Создать"),n.myID=J,n.ownerID=J,n.myLike=!1,n.numLikes=0,n.cardID=e._id,M.renderItem(n),G.close(),Y.disableButtonState()})).catch((function(e){return alert(e)}))})),K=new h(".look-img",".look-img__title",".look-img__img"),Q=new j(".profile__info-name",".profile__info-job");new T(V,".edit-avatar").enableValidation();var X=new T(V,".edit-profile");X.enableValidation();var Y=new T(V,".bild-card");function Z(e){var t=e._cardID;z.deleteCard(t).then((function(t){console.log("Удалили свою карточку: "+t.message),e.deleteCardElement()})).catch((function(e){return alert(e)}))}Y.enableValidation(),W.setEventListeners(),document.querySelector(".profile__avatar-btn").addEventListener("click",(function(){$.open()})),$.setEventListeners();var ee=document.querySelector(".content"),te=ee.querySelector(".profile__info-edit-btn"),ne=ee.querySelector(".profile__info-name"),re=ee.querySelector(".profile__info-job"),oe=document.querySelector(".profile__avatar"),ie=document.querySelector(".edit-profile"),ue=ie.querySelector(".popup__text_input_name"),ae=ie.querySelector(".popup__text_input_job");ue.value="",ae.value="",F.setEventListeners(),te.addEventListener("click",(function(){X.resetValidation(),X.enableButtonState();var e=Q.getUserInfo();ue.value=e.name,ae.value=e.info,F.open()}));var le=document.querySelector(".profile__add-btn"),ce=document.querySelector(".bild-card");function se(e){K.open(e)}function fe(e){var t=e._cardID;z.delLike(t).then((function(t){var n=t.likes.length;e.updateLikes(n)})).catch((function(e){return alert(e)}))}function he(e){var t=e._cardID;z.setLike(t).then((function(t){var n=t.likes.length;e.updateLikes(n)})).catch((function(e){return alert(e)}))}ce.querySelector(".bild-card__text_input_place"),ce.querySelector(".bild-card__text_input_url"),G.setEventListeners(),le.addEventListener("click",(function(){Y.resetValidation(),Y.disableButtonState(),G.open()})),K.setEventListeners(),z.getIniData().then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];ne.textContent=n.name,re.textContent=n.about,oe.src=n.avatar,J=n._id;for(var o=0;o<6;o+=1){H[o].name=r[o].name,H[o].link=r[o].link,H[o].myID=n._id,H[o].ownerID=r[o].owner._id,H[o].cardID=r[o]._id,H[o].numLikes=r[o].likes.length,H[o].likes=r[o].likes;var i=!1;if(H[o].numLikes>0)for(var u=0;u<H[o].numLikes;u+=1)H[o].myID===H[o].likes[u]._id&&(i=!0);H[o].myLike=i}M.renderItems()})).catch((function(e){return alert(e)}))})();