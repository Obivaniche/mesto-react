import React from 'react';
import avatar from '../images/avatar.png';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    const handleEditProfileClick = document.querySelector('.popup-edit');
    handleEditProfileClick.addEventListener('click', () => {
        const element = document.querySelector('.popup');
        element.classList.add('popup_opened');
    });

    const handleAddPlaceClick = document.querySelector('.popup-add');
    handleAddPlaceClick.addEventListener('click', () => {
        const element = document.querySelector('.popup');
        element.classList.add('popup_opened');
    });

    const handleEditAvatarClick = document.querySelector('.popup-avatar');
    handleEditAvatarClick.addEventListener('click', () => {
        const element = document.querySelector('.popup');
        element.classList.add('popup_opened');
    });


    return (
        <div className="content">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={avatar} alt="Ваш аватар" />
                    <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>
                </div>
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <p className="profile__about">Исследователь океана</p>
                <button className="button profile__edit-button" type="button" onClick={onEditProfile}></button>
                <button className="button profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="card-grid">
            </section>
        </div>
    )
};

export default Main;