(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{z:()=>K});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var n,r;return n=e,(r=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "ini card" не выполнен: ',e)}))}},{key:"readProfile",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Rd profile" не выполнен: ',e)}))}},{key:"writeProfile",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr profile" не выполнен: ',e)}))}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".x-btn").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&r(t.prototype,n),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function l(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=i.call(this,e))._textImg=r._popupElement.querySelector(t),r._logImg=r._popupElement.querySelector(n),r}return t=l,(n=[{key:"open",value:function(e){a(f(l.prototype),"open",this).call(this),this._logImg.src=e.querySelector(".element__img").src,this._logImg.alt="На фотографии "+e.querySelector(".element__txt").textContent,this._textImg.textContent=e.querySelector(".element__txt").textContent}}])&&u(t.prototype,n),l}(o);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitPopup=t,n._formElement=n._popupElement.querySelector(".form"),n._inputList=Array.from(n._popupElement.querySelectorAll(".form__input")),n}return t=u,(n=[{key:"close",value:function(){d(b(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){d(b(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmitPopup)}}])&&_(t.prototype,n),u}(o);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._infoElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={name:"",info:""};return e.name=this._nameElement.textContent,e.info=this._infoElement.textContent,e}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._infoElement.textContent=t}}])&&E(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=t,this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemDn",value:function(e){this._container.append(e)}},{key:"renderItem",value:function(e){var t=this._renderer(e);this.addItem(t)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}}])&&S(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"_checkInputValidity",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),C(this,"_addInputEventListener",(function(e){e.addEventListener("input",(function(){r._findErrCheckInputAndToggleBtn(e)}))})),C(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t,n){t.classList.add(this._settings.inputTypeError),e.classList.add(this._settings.inputActiveError),e.textContent=n}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._settings.inputTypeError),e.classList.remove(this._settings.inputActiveError),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.id,r=e._formElement.querySelector("."+n+"-error");e._hideInputError(r,t)}))}},{key:"disableButtonState",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._settings.buttonInactive)}},{key:"enableButtonState",value:function(){this._submitButton.disabled=!1,this._submitButton.classList.remove(this._settings.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButtonState():this.enableButtonState()}},{key:"_findErrCheckInputAndToggleBtn",value:function(e){var t=e.id,n=this._formElement.querySelector("."+t+"-error");this._checkInputValidity(n,e),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){e._addInputEventListener(t)}))}}])&&I(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._image=t.link,this._template=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-btn"),this._delButton=this._element.querySelector(".element__del-btn"),this._imgButton=this._element.querySelector(".element__img-btn"),this._cardImage=this._element.querySelector(".element__img"),this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt="На фотографии "+this._title,this._element.querySelector(".element__txt").textContent=this._title,this._element}},{key:"_getTemplate",value:function(){return document.querySelector("."+this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeClick()})),this._delButton.addEventListener("click",(function(){e._deleteCard()})),this._imgButton.addEventListener("click",(function(){e._handlePictureClick()}))}},{key:"_likeClick",value:function(){this._likeButton.classList.toggle("element__like-btn_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_handlePictureClick",value:function(){this._handleCardClick(this._element)}}])&&L(t.prototype,n),e}(),q={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inputTypeError:".form__input_type_error",inputActiveError:".form__input-error_active",buttonInactive:"button_inactive"},P=[{name:"",link:""},{name:"",link:""},{name:"",link:""},{name:"",link:""},{name:"",link:""},{name:"",link:""}],B=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33/",headers:{authorization:"51ca28f6-a002-497b-8233-6c80bd0cac76","Content-Type":"application/json"}}),x=new w(P,(function(e){return new j(e,"element-card",K).generateCard()}),".elements"),T=new g(".edit-avatar",(function(e){e.preventDefault();var t=T.getInputValues();console.log(t),T.close()})),R=new g(".edit-profile",(function(e){e.preventDefault();var t=R.getInputValues();D.setUserInfo(t.nameInput,t.jobInput);var n={name:"",about:""};n.name=t.nameInput,n.about=t.jobInput,B.writeProfile(n).then((function(e){})),R.close()})),V=new g(".bild-card",(function(e){e.preventDefault();var t=V.getInputValues(),n={name:"",link:""};n.name=t.placeInput,n.link=t.urlInput,x.renderItem(n),V.close(),z.disableButtonState()})),A=new p(".look-img",".look-img__title",".look-img__img"),D=new k(".profile__info-name",".profile__info-job"),U=new O(q,".edit-profile");U.enableValidation();var z=new O(q,".bild-card");z.enableValidation();var N=document.querySelector(".profile__avatar-btn");document.querySelector(".edit-avatar"),document.querySelector(".edit-avatar__url"),N.addEventListener("click",(function(){T.open()})),T.setEventListeners();var H=document.querySelector(".content").querySelector(".profile__info-edit-btn"),J=document.querySelector(".edit-profile"),M=J.querySelector(".popup__text_input_name"),W=J.querySelector(".popup__text_input_job");R.setEventListeners(),H.addEventListener("click",(function(){U.resetValidation(),U.enableButtonState(),M.value="",W.value="",B.readProfile().then((function(e){M.value=e.name,W.value=e.about})),R.open()}));var F=document.querySelector(".profile__add-btn"),G=document.querySelector(".bild-card");function K(e){A.open(e)}G.querySelector(".bild-card__text_input_place"),G.querySelector(".bild-card__text_input_url"),V.setEventListeners(),F.addEventListener("click",(function(){z.resetValidation(),z.disableButtonState(),V.open()})),A.setEventListeners(),B.getInitialCards().then((function(e){for(var t=0;t<6;t+=1)P[t].name=e[t].name,P[t].link=e[t].link;x.renderItems()}))})();