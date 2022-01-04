(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{$B:()=>ee,BH:()=>ue,a8:()=>H,zr:()=>ae,AB:()=>le});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var n,r;return n=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"readProfile",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"writeProfile",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse).then((function(e){return e}))}},{key:"writeCard",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse).then((function(e){return e}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"writeAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse).then((function(e){return e}))}},{key:"setLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"PUT",headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"delLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"DELETE",headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"getIniData",value:function(){return Promise.all([this.readProfile(),this.getInitialCards()])}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".x-btn").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&r(t.prototype,n),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},u.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,r,i,o=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function l(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=o.call(this,e))._textImg=r._popupElement.querySelector(t),r._logImg=r._popupElement.querySelector(n),r}return t=l,(n=[{key:"open",value:function(e){u(f(l.prototype),"open",this).call(this),this._logImg.src=e.querySelector(".element__img").src,this._logImg.alt="На фотографии "+e.querySelector(".element__txt").textContent,this._textImg.textContent=e.querySelector(".element__txt").textContent}}])&&a(t.prototype,n),l}(i);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,i,o=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,e))._handleSubmitPopup=t,n._formElement=n._popupElement.querySelector(".form"),n._inputList=Array.from(n._popupElement.querySelectorAll(".form__input")),n}return t=a,(n=[{key:"close",value:function(){d(b(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){d(b(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmitPopup)}}])&&_(t.prototype,n),a}(i);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},L.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function S(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(a,e);var t,n,r,i,o=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(i){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,e))._handleConfirm=t,n}return t=a,(n=[{key:"open",value:function(e){L(O(a.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;L(O(a.prototype),"setEventListeners",this).call(this),this._popupElement.querySelector(".confirm__btn").addEventListener("click",(function(){e._handleConfirm(e._card)}))}}])&&E(t.prototype,n),a}(i);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._infoElement=document.querySelector(n),this._avatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={name:"",info:""};return e.name=this._nameElement.textContent,e.info=this._infoElement.textContent,e.avatar=this._avatarElement.src,e}},{key:"setUserInfo",value:function(e,t,n,r){this._nameElement.textContent=e,this._infoElement.textContent=t,this._avatarElement.src=n,H=r}}])&&D(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=t,this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemDn",value:function(e){this._container.append(e)}},{key:"renderItem",value:function(e){var t=this._renderer(e);this.addItem(t)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItemDn(n)}))}}])&&P(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,"_checkInputValidity",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),B(this,"_addInputEventListener",(function(e){e.addEventListener("input",(function(){r._findErrCheckInputAndToggleBtn(e)}))})),B(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t,n){t.classList.add(this._settings.inputTypeError),e.classList.add(this._settings.inputActiveError),e.textContent=n}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._settings.inputTypeError),e.classList.remove(this._settings.inputActiveError),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.id,r=e._formElement.querySelector("."+n+"-error");e._hideInputError(r,t)}))}},{key:"disableButtonState",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._settings.buttonInactive)}},{key:"enableButtonState",value:function(){this._submitButton.disabled=!1,this._submitButton.classList.remove(this._settings.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButtonState():this.enableButtonState()}},{key:"_findErrCheckInputAndToggleBtn",value:function(e){var t=e.id,n=this._formElement.querySelector("."+t+"-error");this._checkInputValidity(n,e),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){e._addInputEventListener(t)}))}}])&&R(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n,r,i,o,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._myCard=t.myCard,this._myID=t.myID,this._ownerID=t.ownerID,this._cardID=t.cardID,this._title=t.name,this._image=t.link,this._numLikes=t.numLikes,this._myLike=t.myLike,this._template=n,this._handleCardClick=r,this._handleSetLikeRequest=i,this._handleDelLikeRequest=o,this._handleDelCardRequest=a}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-btn"),this._likeNum=this._element.querySelector(".element__like-num"),this._delButton=this._element.querySelector(".element__del-btn"),this._imgButton=this._element.querySelector(".element__img-btn"),this._cardImage=this._element.querySelector(".element__img"),this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt="На фотографии "+this._title,this._element.querySelector(".element__txt").textContent=this._title,this._likeNum.textContent=this._numLikes,this._myLike?this._likeButton.classList.add("element__like-btn_active"):this._likeButton.classList.remove("element__like-btn_active"),this._ownerID!==this._myID&&this._delButton.remove(),this._element}},{key:"_getTemplate",value:function(){return document.querySelector("."+this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._ownerID===this._myID&&this._delButton.addEventListener("click",(function(){e._handleDeleteCard()})),this._imgButton.addEventListener("click",(function(){e._handlePictureClick()}))}},{key:"updateLikes",value:function(e){this._numLikes=e,this._likeNum.textContent=this._numLikes}},{key:"setMyLike",value:function(){this._myLike=!0,this._likeButton.classList.add("element__like-btn_active")}},{key:"delMyLike",value:function(){this._myLike=!1,this._likeButton.classList.remove("element__like-btn_active")}},{key:"_handleLikeClick",value:function(){this._myLike?this._handleDelLikeRequest(this):this._handleSetLikeRequest(this)}},{key:"_handleDeleteCard",value:function(){this._handleDelCardRequest(this)}},{key:"_handlePictureClick",value:function(){this._handleCardClick(this._element)}},{key:"deleteCardElement",value:function(){this._element.remove()}}])&&x(t.prototype,n),e}(),U=function(e,t){document.querySelector(e).textContent=t},V=[{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1}],N={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inputTypeError:".form__input_type_error",inputActiveError:".form__input-error_active",buttonInactive:"button_inactive"};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H="",J=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33/",headers:{authorization:"51ca28f6-a002-497b-8233-6c80bd0cac76","Content-Type":"application/json"}}),z=new q(V,(function(e){return new A(e,"element-card",ae,le,ue,ee).generateCard()}),".elements"),$=new C(".confirm",(function(e){U(".confirm__btn","Удаление...");var t=e._cardID;J.deleteCard(t).then((function(t){e.deleteCardElement(),$.close()})).catch((function(e){return alert(e)})).finally((function(){U(".confirm__btn","Да")}))})),F=new k(".edit-avatar",(function(e){e.preventDefault(),U(".edit-avatar__btn-save","Загрузка...");var t=F.getInputValues();J.writeAvatar(t.urlAvatar).then((function(e){W.setUserInfo(e.name,e.about,e.avatar,e._id),F.close()})).catch((function(e){return alert(e)})).finally((function(){U(".edit-avatar__btn-save","Сохранить")}))})),G=new k(".edit-profile",(function(e){e.preventDefault();var t=G.getInputValues(),n={name:"",about:""};n.name=t.nameInput,n.about=t.jobInput,U(".popup__btn-save","Загрузка..."),J.writeProfile(n).then((function(e){W.setUserInfo(e.name,e.about,e.avatar,e._id),G.close()})).catch((function(e){return alert(e)})).finally((function(){U(".popup__btn-save","Сохранить")}))})),K=new k(".bild-card",(function(e){e.preventDefault();var t=K.getInputValues(),n={name:"",link:""};n.name=t.placeInput,n.link=t.urlInput,U(".bild-card__btn-save","Загрузка..."),J.writeCard(n).then((function(e){n.myID=H,n.ownerID=H,n.myLike=!1,n.numLikes=0,n.cardID=e._id,z.renderItem(n),Z.disableButtonState(),K.close()})).catch((function(e){return alert(e)})).finally((function(){U(".bild-card__btn-save","Создать")}))})),Q=new h(".look-img",".look-img__title",".look-img__img"),W=new j(".profile__info-name",".profile__info-job",".profile__avatar"),X=new T(N,".edit-avatar");X.enableValidation();var Y=new T(N,".edit-profile");Y.enableValidation();var Z=new T(N,".bild-card");function ee(e){$.open(e)}Z.enableValidation(),$.setEventListeners(),document.querySelector(".profile__avatar-btn").addEventListener("click",(function(){X.resetValidation(),X.disableButtonState(),F.open()})),F.setEventListeners();var te=document.querySelector(".content").querySelector(".profile__info-edit-btn"),ne=(document.querySelector(".profile__avatar"),document.querySelector(".edit-profile")),re=ne.querySelector(".popup__text_input_name"),ie=ne.querySelector(".popup__text_input_job");G.setEventListeners(),te.addEventListener("click",(function(){Y.resetValidation(),Y.enableButtonState();var e=W.getUserInfo();re.value=e.name,ie.value=e.info,G.open()}));var oe=document.querySelector(".profile__add-btn");function ae(e){Q.open(e)}function ue(e){var t=e._cardID;J.delLike(t).then((function(t){var n=t.likes.length;e.updateLikes(n),e.delMyLike()})).catch((function(e){return alert(e)}))}function le(e){var t=e._cardID;J.setLike(t).then((function(t){var n=t.likes.length;e.updateLikes(n),e.setMyLike()})).catch((function(e){return alert(e)}))}K.setEventListeners(),oe.addEventListener("click",(function(){Z.resetValidation(),Z.disableButtonState(),K.open()})),Q.setEventListeners(),J.getIniData().then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];W.setUserInfo(n.name,n.about,n.avatar,n._id);for(var i=V.length,o=0;o<i;o+=1){V[o].name=r[o].name,V[o].link=r[o].link,V[o].myID=n._id,V[o].ownerID=r[o].owner._id,V[o].cardID=r[o]._id,V[o].numLikes=r[o].likes.length,V[o].likes=r[o].likes;var a=!1;if(V[o].numLikes>0)for(var u=0;u<V[o].numLikes;u+=1)V[o].myID===V[o].likes[u]._id&&(a=!0);V[o].myLike=a}z.renderItems()})).catch((function(e){return alert(e)}))})();