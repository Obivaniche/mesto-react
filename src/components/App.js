import React, { useState, useEffect } from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: 'Загрузка',
    about: '...',
  });

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, userCard]) => {
        setCurrentUser(userData);
        setCards(userCard);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  function handleUpdateUser() {
    api.editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        console.log('Hello there')
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser} />

        <PopupWithForm
          name='add'
          title='Новое место'
          buttonTitle='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              id="title-input"
              className="form__input form__input_type_title"
              name="title"
              type="text"
              minLength={2}
              maxLength={30}
              placeholder="Название"
              required
            />
            <span className="form__input-error title-input-error"></span>
          </label>
          <label className="form__field">
            <input
              id="link-input"
              className="form__input form__input_type_link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error link-input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          buttonTitle='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              id="avatar-input"
              className="form__input form__input_type_avatar"
              name="avatar"
              type="url"
              placeholder="Ссылка на картинку"
              required />
            <span className="form__input-error avatar-input-error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />

        <div className="popup popup-confirm">
          <div className="popup__container">
            <button className="button popup__close-button" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="form form-confirm">
              <button className="button form__submit-button submit-confirm" type="submit">Да</button>
            </form>
          </div>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;