(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{BH:()=>te,zr:()=>ee,AB:()=>ne});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var n,r;return n=e,(r=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "ini card" не выполнен: ',e)}))}},{key:"readProfile",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Rd profile" не выполнен: ',e)}))}},{key:"writeProfile",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr profile" не выполнен: ',e)}))}},{key:"writeCard",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "writeCard" не выполнен: ',e)}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "deleteCard" не выполнен: ',e)}))}},{key:"writeAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr avatar" не выполнен: ',e)}))}},{key:"setLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"PUT",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "setLike" не выполнен: ',e)}))}},{key:"delLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "delLike" не выполнен: ',e)}))}},{key:"getIniData",value:function(){return Promise.all([this.readProfile(),this.getInitialCards()])}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".x-btn").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&r(t.prototype,n),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},a.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,r,i,o=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function l(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=o.call(this,e))._textImg=r._popupElement.querySelector(t),r._logImg=r._popupElement.querySelector(n),r}return t=l,(n=[{key:"open",value:function(e){a(f(l.prototype),"open",this).call(this),this._logImg.src=e.querySelector(".element__img").src,this._logImg.alt="На фотографии "+e.querySelector(".element__txt").textContent,this._textImg.textContent=e.querySelector(".element__txt").textContent}}])&&u(t.prototype,n),l}(i);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},d.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,i,o=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=o.call(this,e))._handleSubmitPopup=t,n._formElement=n._popupElement.querySelector(".form"),n._inputList=Array.from(n._popupElement.querySelectorAll(".form__input")),n}return t=u,(n=[{key:"close",value:function(){d(b(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){d(b(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmitPopup)}}])&&_(t.prototype,n),u}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._infoElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={name:"",info:""};return e.name=this._nameElement.textContent,e.info=this._infoElement.textContent,e}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._infoElement.textContent=t}}])&&g(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=t,this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemDn",value:function(e){this._container.append(e)}},{key:"renderItem",value:function(e){var t=this._renderer(e);this.addItem(t)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItemDn(n)}))}}])&&L(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_checkInputValidity",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),S(this,"_addInputEventListener",(function(e){e.addEventListener("input",(function(){r._findErrCheckInputAndToggleBtn(e)}))})),S(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t,n){t.classList.add(this._settings.inputTypeError),e.classList.add(this._settings.inputActiveError),e.textContent=n}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._settings.inputTypeError),e.classList.remove(this._settings.inputActiveError),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.id,r=e._formElement.querySelector("."+n+"-error");e._hideInputError(r,t)}))}},{key:"disableButtonState",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._settings.buttonInactive)}},{key:"enableButtonState",value:function(){this._submitButton.disabled=!1,this._submitButton.classList.remove(this._settings.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButtonState():this.enableButtonState()}},{key:"_findErrCheckInputAndToggleBtn",value:function(e){var t=e.id,n=this._formElement.querySelector("."+t+"-error");this._checkInputValidity(n,e),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){e._addInputEventListener(t)}))}}])&&I(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._myCard=t.myCard,this._myID=t.myID,this._ownerID=t.ownerID,this._title=t.name,this._image=t.link,this._numLikes=t.numLikes,this._myLike=t.myLike,this._template=n,this._handleCardClick=r,this._handleSetLike=i,this._handleDelLike=o}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-btn"),this._likeNum=this._element.querySelector(".element__like-num"),this._delButton=this._element.querySelector(".element__del-btn"),this._imgButton=this._element.querySelector(".element__img-btn"),this._cardImage=this._element.querySelector(".element__img"),this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt="На фотографии "+this._title,this._element.querySelector(".element__txt").textContent=this._title,this._likeNum.textContent=this._numLikes,this._myLike?this._likeButton.classList.add("element__like-btn_active"):this._likeButton.classList.remove("element__like-btn_active"),!1===this._myCard&&this._delButton.remove(),this._element}},{key:"_getTemplate",value:function(){return document.querySelector("."+this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeClick()})),this._myCard&&this._delButton.addEventListener("click",(function(){e._deleteCard()})),this._imgButton.addEventListener("click",(function(){e._handlePictureClick()}))}},{key:"_likeClick",value:function(){this._myLike?(this._handleDelLike(this._ownerID),this._likeButton.classList.remove("element__like-btn_active"),this._numLikes=this._numLikes-1,this._myLike=!1):(this._handleSetLike(this._ownerID),this._likeButton.classList.add("element__like-btn_active"),this._numLikes=this._numLikes+1,this._myLike=!0),this._likeNum.textContent=this._numLikes}},{key:"_deleteCard",value:function(){}},{key:"_handlePictureClick",value:function(){this._handleCardClick(this._element)}}])&&O(t.prototype,n),e}(),D=function(e,t){document.querySelector(e).textContent=t},q={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inputTypeError:".form__input_type_error",inputActiveError:".form__input-error_active",buttonInactive:"button_inactive"};function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=[{name:"",link:"",myID:"",ownerID:"",numLikes:"",myLike:"",likes:[],myCard:!1},{name:"",link:"",myID:"",ownerID:"",numLikes:"",myLike:"",likes:[],myCard:!1},{name:"",link:"",myID:"",ownerID:"",numLikes:"",myLike:"",likes:[],myCard:!1},{name:"",link:"",myID:"",ownerID:"",numLikes:"",myLike:"",likes:[],myCard:!1},{name:"",link:"",myID:"",ownerID:"",numLikes:"",myLike:"",likes:[],myCard:!1},{name:"",link:"",myID:"",ownerID:"",numLikes:"",myLike:"",likes:[],myCard:!1}],x=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33/",headers:{authorization:"51ca28f6-a002-497b-8233-6c80bd0cac76","Content-Type":"application/json"}}),T=new w(B,(function(e){return new j(e,"element-card",ee,ne,te).generateCard()}),".elements"),A=new k(".confirm",(function(e){e.preventDefault(),console.log("id Card fo delete"),A.close()})),R=new k(".edit-avatar",(function(e){e.preventDefault();var t=R.getInputValues();x.deleteCard(t.urlAvatar).then((function(e){console.log("Удалили карточку Id: "+cardDel)})).catch((function(e){return alert(e)}))})),U=new k(".edit-profile",(function(e){e.preventDefault();var t=U.getInputValues();H.setUserInfo(t.nameInput,t.jobInput);var n={name:"",about:""};n.name=t.nameInput,n.about=t.jobInput,D(".popup__btn-save","Загрузка..."),x.writeProfile(n).then((function(e){D(".popup__btn-save","Сохранить"),U.close()})).catch((function(e){return alert(e)}))})),V=new k(".bild-card",(function(e){e.preventDefault();var t=V.getInputValues(),n={name:"",link:""};n.name=t.placeInput,n.link=t.urlInput,n.myCard=!0,D(".popup__btn-save","Загрузка..."),x.writeCard(n).then((function(e){D(".popup__btn-save","Создать"),console.log("Card записан на сервере: "+e.owner.id),T.renderItem(n),V.close(),z.disableButtonState()})).catch((function(e){return alert(e)}))})),N=new h(".look-img",".look-img__title",".look-img__img"),H=new E(".profile__info-name",".profile__info-job"),J=new C(q,".edit-profile");J.enableValidation();var z=new C(q,".bild-card");z.enableValidation(),A.setEventListeners(),document.querySelector(".profile__avatar-btn").addEventListener("click",(function(){R.open()})),R.setEventListeners();var M=document.querySelector(".content"),W=M.querySelector(".profile__info-edit-btn"),$=M.querySelector(".profile__info-name"),F=M.querySelector(".profile__info-job"),G=document.querySelector(".profile__avatar"),K=document.querySelector(".edit-profile"),Q=K.querySelector(".popup__text_input_name"),X=K.querySelector(".popup__text_input_job");Q.value="",X.value="",U.setEventListeners(),W.addEventListener("click",(function(){J.resetValidation(),J.enableButtonState();var e=H.getUserInfo();Q.value=e.name,X.value=e.info,U.open()}));var Y=document.querySelector(".profile__add-btn"),Z=document.querySelector(".bild-card");function ee(e){N.open(e)}function te(e){x.delLike(e).then((function(t){console.log("Сняли лайк с карточки Id: "+e)})).catch((function(e){return alert(e)}))}function ne(e){x.setLike(e).then((function(e){var t=e._id;e.likes.length,console.log("Добавили лайк карточке: "+t)})).catch((function(e){return alert(e)}))}Z.querySelector(".bild-card__text_input_place"),Z.querySelector(".bild-card__text_input_url"),V.setEventListeners(),Y.addEventListener("click",(function(){z.resetValidation(),z.disableButtonState(),V.open()})),N.setEventListeners(),x.getIniData().then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(e){a=!0,i=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];G.src=n.avatar;var i=n._id;console.log("Мой id: "+i),$.textContent=n.name,F.textContent=n.about;for(var o=0;o<6;o+=1){B[o].name=r[o].name,B[o].link=r[o].link,B[o].myID=n._id,B[o].ownerID=r[o]._id,B[o].numLikes=r[o].likes.length,B[o].likes=r[o].likes;var u=!1;if(B[o].numLikes>0)for(var a=0;a<B[o].numLikes;a+=1)B[o].myID!==B[o].likes[a]._id||(u=!0);B[o].myLike=u;var l="";u&&(l="  Есть мой лайк"),console.log("Card["+o+"] :"+B[o].ownerID+" всего лайков : "+B[o].numLikes+l)}T.renderItems()})).catch((function(e){return alert(e)}))})();