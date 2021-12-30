(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{$B:()=>ne,BH:()=>re,zr:()=>te,AB:()=>ie});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var n,r;return n=e,(r=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "ini card" не выполнен: ',e)}))}},{key:"readProfile",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Rd profile" не выполнен: ',e)}))}},{key:"writeProfile",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr profile" не выполнен: ',e)}))}},{key:"writeCard",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "writeCard" не выполнен: ',e)}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "deleteCard" не выполнен: ',e)}))}},{key:"writeAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "Wr avatar" не выполнен: ',e)}))}},{key:"setLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"PUT",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "setLike" не выполнен: ',e)}))}},{key:"delLike",value:function(e){return fetch(this._baseUrl+"cards/"+e+"/likes",{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log('Ошибка. Запрос "delLike" не выполнен: ',e)}))}},{key:"getIniData",value:function(){return Promise.all([this.readProfile(),this.getInitialCards()])}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".x-btn").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&r(t.prototype,n),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},u.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,n,r,i,o=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function l(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=o.call(this,e))._textImg=r._popupElement.querySelector(t),r._logImg=r._popupElement.querySelector(n),r}return t=l,(n=[{key:"open",value:function(e){u(f(l.prototype),"open",this).call(this),this._logImg.src=e.querySelector(".element__img").src,this._logImg.alt="На фотографии "+e.querySelector(".element__txt").textContent,this._textImg.textContent=e.querySelector(".element__txt").textContent}}])&&a(t.prototype,n),l}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},m.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,i,o=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,e))._handleSubmitPopup=t,n._formElement=n._popupElement.querySelector(".form"),n._inputList=Array.from(n._popupElement.querySelectorAll(".form__input")),n}return t=a,(n=[{key:"close",value:function(){m(b(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){m(b(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmitPopup)}}])&&_(t.prototype,n),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._infoElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={name:"",info:""};return e.name=this._nameElement.textContent,e.info=this._infoElement.textContent,e}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._infoElement.textContent=t}}])&&g(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=t,this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemDn",value:function(e){this._container.append(e)}},{key:"renderItem",value:function(e){var t=this._renderer(e);this.addItem(t)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItemDn(n)}))}}])&&I(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_checkInputValidity",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),S(this,"_addInputEventListener",(function(e){e.addEventListener("input",(function(){r._findErrCheckInputAndToggleBtn(e)}))})),S(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=t,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t,n){t.classList.add(this._settings.inputTypeError),e.classList.add(this._settings.inputActiveError),e.textContent=n}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._settings.inputTypeError),e.classList.remove(this._settings.inputActiveError),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.id,r=e._formElement.querySelector("."+n+"-error");e._hideInputError(r,t)}))}},{key:"disableButtonState",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._settings.buttonInactive)}},{key:"enableButtonState",value:function(){this._submitButton.disabled=!1,this._submitButton.classList.remove(this._settings.buttonInactive)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButtonState():this.enableButtonState()}},{key:"_findErrCheckInputAndToggleBtn",value:function(e){var t=e.id,n=this._formElement.querySelector("."+t+"-error");this._checkInputValidity(n,e),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){e._addInputEventListener(t)}))}}])&&w(t.prototype,n),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r,i,o,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._myCard=t.myCard,this._myID=t.myID,this._ownerID=t.ownerID,this._cardID=t.cardID,this._title=t.name,this._image=t.link,this._numLikes=t.numLikes,this._myLike=t.myLike,this._template=n,this._handleCardClick=r,this._handleSetLike=i,this._handleDelLike=o,this._handleDelCard=a}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-btn"),this._likeNum=this._element.querySelector(".element__like-num"),this._delButton=this._element.querySelector(".element__del-btn"),this._imgButton=this._element.querySelector(".element__img-btn"),this._cardImage=this._element.querySelector(".element__img"),this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt="На фотографии "+this._title,this._element.querySelector(".element__txt").textContent=this._title,this._likeNum.textContent=this._numLikes,this._myLike?this._likeButton.classList.add("element__like-btn_active"):this._likeButton.classList.remove("element__like-btn_active"),this._ownerID!==this._myID&&this._delButton.remove(),this._element}},{key:"_getTemplate",value:function(){return document.querySelector("."+this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeClick()})),this._ownerID===this._myID&&this._delButton.addEventListener("click",(function(){e._deleteCard()})),this._imgButton.addEventListener("click",(function(){e._handlePictureClick()}))}},{key:"updateLikes",value:function(e){this._numLikes=e,this._likeNum.textContent=this._numLikes}},{key:"_likeClick",value:function(){this._myLike?(this._handleDelLike(this),this._likeButton.classList.remove("element__like-btn_active"),this._myLike=!1):(this._handleSetLike(this),this._likeButton.classList.add("element__like-btn_active"),this._myLike=!0)}},{key:"_deleteCard",value:function(){this._handleDelCard(this)}},{key:"_handlePictureClick",value:function(){this._handleCardClick(this._element)}}])&&D(t.prototype,n),e}(),j=function(e,t){document.querySelector(e).textContent=t},q={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inputTypeError:".form__input_type_error",inputActiveError:".form__input-error_active",buttonInactive:"button_inactive"};function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=[{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1},{name:"",link:"",myID:"",ownerID:"",cardID:"",numLikes:0,likes:[],myLike:!1}],x="",T=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-33/",headers:{authorization:"51ca28f6-a002-497b-8233-6c80bd0cac76","Content-Type":"application/json"}}),A=new L(B,(function(e){return new O(e,"element-card",te,ie,re,ne).generateCard()}),".elements"),R=new k(".confirm",(function(e){e.preventDefault(),console.log("Удалим карточку из ДОМ"),card._element.remove(),R.close()})),U=new k(".edit-avatar",(function(e){e.preventDefault(),j(".edit-avatar__btn-save","Загрузка...");var t=U.getInputValues();T.writeAvatar(t.urlAvatar).then((function(e){K.src=e.avatar,console.log("Записан аватар, URL: "+t.urlAvatar),j(".edit-avatar__btn-save","Сохранить"),U.close()})).catch((function(e){return alert(e)}))})),V=new k(".edit-profile",(function(e){e.preventDefault();var t=V.getInputValues();J.setUserInfo(t.nameInput,t.jobInput);var n={name:"",about:""};n.name=t.nameInput,n.about=t.jobInput,j(".popup__btn-save","Загрузка..."),T.writeProfile(n).then((function(e){j(".popup__btn-save","Сохранить"),V.close()})).catch((function(e){return alert(e)}))})),N=new k(".bild-card",(function(e){e.preventDefault();var t=N.getInputValues(),n={name:"",link:""};n.name=t.placeInput,n.link=t.urlInput,j(".bild-card__btn-save","Загрузка..."),T.writeCard(n).then((function(e){j(".bild-card__btn-save","Создать"),console.log("запись cardID: "+e._id+", ownerID:"+e.owner._id),n.myID=x,n.ownerID=x,n.myLike=!1,n.numLikes=0,n.cardID=e._id,A.renderItem(n),N.close(),M.disableButtonState()})).catch((function(e){return alert(e)}))})),H=new h(".look-img",".look-img__title",".look-img__img"),J=new E(".profile__info-name",".profile__info-job");new C(q,".edit-avatar").enableValidation();var z=new C(q,".edit-profile");z.enableValidation();var M=new C(q,".bild-card");M.enableValidation(),R.setEventListeners(),document.querySelector(".profile__avatar-btn").addEventListener("click",(function(){U.open()})),U.setEventListeners();var W=document.querySelector(".content"),$=W.querySelector(".profile__info-edit-btn"),F=W.querySelector(".profile__info-name"),G=W.querySelector(".profile__info-job"),K=document.querySelector(".profile__avatar"),Q=document.querySelector(".edit-profile"),X=Q.querySelector(".popup__text_input_name"),Y=Q.querySelector(".popup__text_input_job");X.value="",Y.value="",V.setEventListeners(),$.addEventListener("click",(function(){z.resetValidation(),z.enableButtonState();var e=J.getUserInfo();X.value=e.name,Y.value=e.info,V.open()}));var Z=document.querySelector(".profile__add-btn"),ee=document.querySelector(".bild-card");function te(e){H.open(e)}function ne(e){var t=e._cardID;T.deleteCard(t).then((function(e){console.log("Удалили свою карточку: "+e.message)})).catch((function(e){return alert(e)})),e._element.remove()}function re(e){var t=e._cardID;T.delLike(t).then((function(t){var n=t.likes.length;console.log("число лайков: "+n),e.updateLikes(n)})).catch((function(e){return alert(e)}))}function ie(e){var t=e._cardID;T.setLike(t).then((function(t){var n=t.likes.length;console.log("число лайков: "+n),e.updateLikes(n)})).catch((function(e){return alert(e)}))}ee.querySelector(".bild-card__text_input_place"),ee.querySelector(".bild-card__text_input_url"),N.setEventListeners(),Z.addEventListener("click",(function(){M.resetValidation(),M.disableButtonState(),N.open()})),H.setEventListeners(),T.getIniData().then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];F.textContent=n.name,G.textContent=n.about,K.src=n.avatar,x=n._id;for(var i=0;i<6;i+=1){B[i].name=r[i].name,B[i].link=r[i].link,B[i].myID=n._id,B[i].ownerID=r[i].owner._id,B[i].cardID=r[i]._id,B[i].numLikes=r[i].likes.length,B[i].likes=r[i].likes;var o=!1;if(B[i].numLikes>0)for(var a=0;a<B[i].numLikes;a+=1)B[i].myID===B[i].likes[a]._id&&(o=!0);B[i].myLike=o}A.renderItems()})).catch((function(e){return alert(e)}))})();