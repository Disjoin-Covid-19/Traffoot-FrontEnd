import React from 'react';
import style from './input.module.css';
import classNames from 'classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    
}

const Input: React.FC<Props> = ({ className, ...props}) => {

    const cssClasses = classNames({
        [className ?? ""]: className!!,
        [style.input]: true
    })

    return (
        <input
            type="text"
            className={cssClasses}
            {...props}
        />
    )
}

export default Input;