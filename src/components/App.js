import React from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditprofile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        titleButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
      >
        <label className="form__field">
          <input
            id="name-input"
            className="form__input form__input_type_name"
            name="name"
            type="text"
            minLength={2}
            maxLength={40}
            placeholder="BИмя"
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

      <div className="popup popup-add">
        <div className="popup__container">
          <button className="button popup__close-button" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="form form-add" name="place" noValidate>
            <fieldset className="form__set">
              <label className="form__field">
                <input id="title-input" className="form__input form__input_type_title" name="title" type="text"
                  value="" minLength="2" maxLength="30" placeholder="Название" required />
                <span className="form__input-error title-input-error"></span>
              </label>
              <label className="form__field">
                <input id="link-input" className="form__input form__input_type_link" name="link" type="url"
                  placeholder="Ссылка на картинку" required />
                <span className="form__input-error link-input-error"></span>
              </label>
              <button className="button form__submit-button submit-add" type="submit">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="popup popup-img">
        <div className="popup__img-container">
          <button className="button popup__close-button" type="button"></button>
          <img className="popup__img" src=" " alt="Фотография карточки" />
          <p className="popup__discripton"></p>
        </div>
      </div>
      <div className="popup popup-avatar">
        <div className="popup__container">
          <button className="button popup__close-button" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="form form-avatar" name="avatar" noValidate>
            <fieldset className="form__set">
              <label className="form__field">
                <input id="avatar-input" className="form__input form__input_type_avatar" name="avatar" type="url"
                  placeholder="Ссылка на картинку" required />
                <span className="form__input-error avatar-input-error"></span>
              </label>
              <button className="button form__submit-button submit-avatar" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="popup popup-confirm">
        <div className="popup__container">
          <button className="button popup__close-button" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="form form-confirm">
            <button className="button form__submit-button submit-confirm" type="submit">Да</button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <article className="card">
          <img className="card__img" src=" " alt="Фотография карточки" />
          <button className="button card__delete-button" type="button"></button>
          <h2 className="card__title"></h2>
          <button className="button card__like-button" type="button"></button>
          <span className="card__like-counter">0</span>
        </article>
      </template>
    </div>
  );
}

export default App;
