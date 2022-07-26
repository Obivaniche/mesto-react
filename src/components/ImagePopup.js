import React from 'react';

function ImagePopup({card, onClose}) {

    return (
        <div className={`popup popup-img ${card && 'popup_opened'}`}>
        <div className="popup__img-container">
          <button className="button popup__close-button" type="button" onClick={onClose}></button>
          <img className="popup__img" src={card ? card.link : ''} alt={card ? card.name : ''} />
          <p className="popup__discripton">{card ? card.name : ''}</p>
        </div>
      </div>
    );
};

export default ImagePopup;