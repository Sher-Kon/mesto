import React from 'react';

import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ConfirmPopup from './ConfirmPopup';
import InfoTooltip from './InfoTooltip';
import api from '../utils/api.js';
import api_sign from '../utils/api_sign';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Login from './Login';

function App() {
  const [isEmall, setEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [token, setToken] = React.useState("");

  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getInitialCards().then((retCards) => { setCards(retCards) }).catch((err) => alert(err));
    api.readProfile().then((retUser) => { setCurrentUser(retUser) }).catch((err) => alert(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    isLiked
      ? api.delLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch((err) => alert(err))
      : api.setLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch((err) => alert(err));
  }

  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isInfoTooltipOk, setInfoTooltipOk] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [delCard, setDelCard] = React.useState({ title: '', link: '' });

  function handleCardDelete(card) {
    setDelCard(card);
    setConfirmPopupOpen(true);
  }

  function handleConfirm() {
    api.deleteCard(delCard._id).then(() => {
      const newCards = cards.filter(card => card._id !== delCard._id);
      setCards(newCards);
      setConfirmPopupOpen(false);
    }).catch((err) => alert(err));
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setInfoTooltipOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard({ title: '', link: '' });
  }

  const [selectedCard, setSelectedCard] = React.useState({ title: '', link: '' });
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({ name, about }) {
    const data = { name: '', about: '' };
    data.name = name;
    data.about = about;
    api.writeProfile(data).then((dataRet) => {
      setCurrentUser(dataRet);
      setEditProfilePopupOpen(false);
    }).catch((err) => alert(err));
  }

  function handleUpdateAvatar(link) {
    api.writeAvatar(link.avatar).then((dataRet) => {
      setCurrentUser(dataRet);
      setEditAvatarPopupOpen(false);
    }).catch((err) => alert(err));
  }

  function handleAddPlace(card) {
    api.writeCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      setAddPlacePopupOpen(false);
    }).catch((err) => alert(err));
  }

  function handleRegister({ password, email }) {
    setLoggedIn(false);
    // Запрс на регистрацию 
    const data = { password: '', email: '' };
    data.password = password;
    data.email = email;
    //console.log(data);
    api_sign.register(data).then((dataRet) => {
      //console.log(dataRet);
      // запустим попап OK
      setInfoTooltipOpen(true);
      setInfoTooltipOk(true);
    }).catch((err) => {
      // запустим попап ERR
      setInfoTooltipOpen(true);
      setInfoTooltipOk(false);
      //alert(err)
    })
  }

  function handleLogin({ password, email }) {
    const data = { password: '', email: '' };
    data.password = password;
    data.email = email;
    //console.log(data);
    // Запрс на авторизацию получение токена
    api_sign.logo(data).then((dataRet) => {
      setToken(dataRet.token);
      setLoggedIn(true);
      //console.log(dataRet.token);

      // Проверка токена
      //console.log(token);
      api_sign.check_token(token).then((dataRet) => {
        console.log(dataRet);
        //console.log(dataRet.data.email);
        setEmail(dataRet.data.email);
        // запустим попап OK
        setInfoTooltipOpen(true);
        setInfoTooltipOk(true);//OK
      }).catch((err) => {
        // запустим попап ERR
        setInfoTooltipOpen(true);
        setInfoTooltipOk(false);
        //alert(err)
      });

      // запустим попап OK
      //setInfoTooltipOpen(true);
      //setInfoTooltipOk(true);//OK
    }).catch((err) => {
      // запустим попап ERR
      setInfoTooltipOpen(true);
      setInfoTooltipOk(false);
      //alert(err)
    });
  }

  //<Route exact path="/">
  //{loggedIn ? <Redirect to="/cards" /> : <Redirect to="/sign-in" />}
  //</Route>

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <div className="content">
            <Switch>
              <ProtectedRoute
                exact path="/"
                loggedIn={loggedIn}
                component={Main}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                email={isEmall}
              />
              <Route path="/sign-up">
                <Register
                  onRegisterUser={handleRegister}
                />
              </Route>
              <Route path="/sign-in">
                <Login
                  onLoginUser={handleLogin}
                />
              </Route>
            </Switch>
          </div>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          />

          <ConfirmPopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onConfirm={handleConfirm}
          />

          <ImagePopup
            cardIMG={selectedCard}
            onClose={closeAllPopups}
          />

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            isOk={isInfoTooltipOk}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
