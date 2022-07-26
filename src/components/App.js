import React from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        buttonTitle='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input
            id="name-input"
            className="form__input form__input_type_name"
            name="name"
            type="text"
            minLength={2}
            maxLength={40}
            placeholder="Имя"
            required
          />
          <span className="form__input-error name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            id="about-input"
            className="form__input form__input_type_about"
            name="about"
            type="text"
            minLength={2}
            maxLength={200}
            placeholder="Вид деятельности"
            required
          />
          <span className="form__input-error about-input-error"></span>
        </label>
      </PopupWithForm>

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

    </div>
  );
}

export default App;