import React from 'react';
import style from './homeheader.module.css';
import logoImage from 'assets/image-product-logo-bg-black.svg';
import Button from 'components/Button';
import LoginRegisterPopup from 'components/LoginRegisterPopup';
import { useAuth } from 'contexts/Auth/auth.hooks';

const HomeHeader = () => {

    const {username} = useAuth();

    return (
        <header className={style.header}>
            <img className={style.logo} src={logoImage} alt="FootTrack"/>

            <div className={style.accountControls}>
                <Button className={style.loginButton} styling="blank">Log in</Button>
                {username ? <span>{username}</span> : <LoginRegisterPopup />}
            </div>
        </header>
    )
}

export default HomeHeader;