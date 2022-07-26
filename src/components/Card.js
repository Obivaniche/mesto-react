import React from 'react';

function Card({ card, onCardClick }) {

    function handleCardClick() {
        onCardClick(card);
    };
    
    return (
            <article className="card">
                <img className="card__img" src={card.link} alt={card.name} onClick={handleCardClick} />
                <button className="button card__delete-button" type="button"></button>
                <h2 className="card__title">{card.name}</h2>
                <button className="button card__like-button" type="button"></button>
                <span className="card__like-counter">{card.likes.length}</span>
            </article>
    );
}

export default Card;