import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  return (
    <div class="page">
      <Header />
      <Main
        onEditProfile={props.handleEditProfileClick}
        onAddPlace={props.handleAddPlaceClick}
        onEditAvatar={props.handleEditAvatarClick}
      />
      <Footer />
      <div class="popup popup-edit">
        <div class="popup__container">
          <button class="button popup__close-button close-edit" type="button"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="form form-edit" name="profile" novalidate>
            <fieldset class="form__set">
              <label class="form__field">
                <input id="name-input" class="form__input form__input_type_name" name="name" type="text"
                  value="" minlength="2" maxlength="40" placeholder="Имя" required />
                <span class="form__input-error name-input-error"></span>
              </label>
              <label class="form__field">
                <input id="about-input" class="form__input form__input_type_about" name="about" type="text" value=""
                  minlength="2" maxlength="200" placeholder="Вид деятельности" required />
                <span class="form__input-error about-input-error"></span>
              </label>
              <button class="button form__submit-button submit-edit" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="popup popup-add">
        <div class="popup__container">
          <button class="button popup__close-button" type="button"></button>
          <h2 class="popup__title">Новое место</h2>
          <form class="form form-add" name="place" novalidate>
            <fieldset class="form__set">
              <label class="form__field">
                <input id="title-input" class="form__input form__input_type_title" name="title" type="text"
                  value="" minlength="2" maxlength="30" placeholder="Название" required />
                <span class="form__input-error title-input-error"></span>
              </label>
              <label class="form__field">
                <input id="link-input" class="form__input form__input_type_link" name="link" type="url"
                  placeholder="Ссылка на картинку" required />
                <span class="form__input-error link-input-error"></span>
              </label>
              <button class="button form__submit-button submit-add" type="submit">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="popup popup-img">
        <div class="popup__img-container">
          <button class="button popup__close-button" type="button"></button>
          <img class="popup__img" src=" " alt="Фотография карточки" />
          <p class="popup__discripton"></p>
        </div>
      </div>
      <div class="popup popup-avatar">
        <div class="popup__container">
          <button class="button popup__close-button" type="button"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="form form-avatar" name="avatar" novalidate>
            <fieldset class="form__set">
              <label class="form__field">
                <input id="avatar-input" class="form__input form__input_type_avatar" name="avatar" type="url"
                  placeholder="Ссылка на картинку" required />
                <span class="form__input-error avatar-input-error"></span>
              </label>
              <button class="button form__submit-button submit-avatar" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="popup popup-confirm">
        <div class="popup__container">
          <button class="button popup__close-button" type="button"></button>
          <h2 class="popup__title">Вы уверены?</h2>
          <form class="form form-confirm">
            <button class="button form__submit-button submit-confirm" type="submit">Да</button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <article class="card">
          <img class="card__img" src=" " alt="Фотография карточки" />
          <button class="button card__delete-button" type="button"></button>
          <h2 class="card__title"></h2>
          <button class="button card__like-button" type="button"></button>
          <span class="card__like-counter">0</span>
        </article>
      </template>
    </div>
  );
}

export default App;
