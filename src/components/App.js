import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ConfirmPopup from './ConfirmPopup';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Switch } from 'react-router-dom';

import SIGN_UP from './SIGN_UP';
import LOG_IN from './LOG_IN';
import Dashboard from './Dashboard';
import NavBar from './NavBar';

function App() {

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


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <div className="content">
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Main
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                />
                <Footer />
              </Route>
              <Route path="/next">
                <Dashboard />
              </Route>
              <Route path="/sign-up">
                <SIGN_UP />
              </Route>
              <Route path="/sign-in">
                <LOG_IN />
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

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
