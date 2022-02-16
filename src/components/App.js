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
//import Dashboard from './Dashboard';
import NavBar from './NavBar';

function App() {
  const [isEmall, setEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(true);
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

  function handleSubmitRegister(e) {
    e.preventDefault();
    // Отладка запустим попап
    setInfoTooltipOpen(true);
    setInfoTooltipOk(true);
    // Запрс на регистрацию
    //  api_sign.register_fix().then((dataRet) => {
    //    console.log(dataRet);
    //  }).catch((err) => alert(err));
    //console.log(token);
      api_sign.check_token(token).then((dataRet) => {
        console.log(dataRet);
        console.log(dataRet.data.email);
        setEmail(dataRet.data.email);
      }).catch((err) => alert(err));
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    // Отладка запустим попап
    setInfoTooltipOpen(true);
    setInfoTooltipOk(false);
    // Запрс на авторизацию
    api_sign.logo_fix().then((dataRet) => {
      setToken(dataRet.token);
      //console.log(dataRet.token);
    }).catch((err) => alert(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <div className="content">
            <NavBar />
            <Switch>
              <Route path="/cards">
                <Main
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  email={isEmall}
                />
              </Route>
              <Route path="/sign-up">
                <Register
                  onSubmit={handleSubmitRegister}
                />
              </Route>
              <Route path="/sign-in">
                <Login
                  onSubmit={handleSubmitLogin}
                />
              </Route>
              <Route exact path="/">
                {loggedIn ? <Redirect to="/cards" /> : <Redirect to="/sign-in" />}
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
