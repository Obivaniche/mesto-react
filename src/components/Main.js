import React, { useState, useEffect } from 'react';
import avatar from '../images/avatar.png';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('Загрузка');
    const [userDescription, setUserDescription] = useState('...');
    const [userAvatar, setUserAvatar] = useState(avatar);
    const [cards, setCards] = useState([]);


    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, userCard]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(userCard);
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
    }, []);

    return (
        <div className="content">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={userAvatar} alt="Ваш аватар" />
                    <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>
                </div>
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__about">{userDescription}</p>
                <button className="button profile__edit-button" type="button" onClick={onEditProfile} ></button>
                <button className="button profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="card-grid">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick} />
                ))}
            </section>
        </div>
    )
};

export default Main;