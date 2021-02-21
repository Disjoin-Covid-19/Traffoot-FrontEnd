import React from 'react';
import classnames from 'classnames';
import style from './button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    styling?: "primary" | "blank" | "black";
    large?: boolean;
}

const Button: React.FC<Props> = ({ styling = "blank", large = false, className, children, ...props }) => {

    const cssClass = classnames({
        [style.button]: true,
        [className!]: !!className,
        [style.primary]: styling === "primary",
        [style.blank]: styling === "blank",
        [style.black]: styling === "black",
        [style.large]: !!large
    })

    return (
        <button className={cssClass} {...props}>
            {children}
        </button>
    )
}

export default Button;