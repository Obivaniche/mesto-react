import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const currentUser = useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, userCard]) => {
                setCards(userCard);
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.toggleLikeStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    };

    function handleCardDelete(card) {
        api.deleteCard(card._id)
        .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id));
        })
    };

    return (
        <div className="content">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Ваш аватар" />
                    <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>
                </div>
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__about">{currentUser.about}</p>
                <button className="button profile__edit-button" type="button" onClick={onEditProfile} ></button>
                <button className="button profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="card-grid">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                ))}
            </section>
        </div>
    )
};

export default Main;