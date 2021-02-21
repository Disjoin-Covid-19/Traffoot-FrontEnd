import React from 'react';
import classnames from 'classnames';
import style from './button.module.scss';

const Button = ({ styling, children, onClick }) => {

    const cssClass = classnames({
        [style.button]: true,
        [style.primary]: styling === "primary"
    })

    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;