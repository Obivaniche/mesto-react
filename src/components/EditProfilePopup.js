import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose }) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            buttonTitle='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
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
    );
}

export default EditProfilePopup;