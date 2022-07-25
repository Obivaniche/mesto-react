import React from 'react';

function PopupWithForm({name, title, children, buttonTitle, isOpen}) {

    return (
        <div className={`popup popup-${name}` + (isOpen && 'popup_opened')}>
            <div className="popup__container">
                <button className="button popup__close-button close-name" type="button"></button>
                <h2 className="popup__title">{title}</h2>
                <form className="form form-edit" name="edit" noValidate>
                    <fieldset className="form__set">
                        {children}
                        <button className="button form__submit-button submit-edit" type="submit">{buttonTitle}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;