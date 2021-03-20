import React from 'react';
import style from './homeheader.module.css';
import logoImage from 'assets/image-product-logo-bg-black.svg';
import LoginRegisterPopup from 'components/LoginRegisterPopup';
import { useAuth } from 'contexts/Auth/auth.hooks';
import { Link } from 'react-router-dom';
import UserPopup from 'components/UserPopup';

const HomeHeader = () => {

    const {username} = useAuth();

    return (
        <header className={style.header}>
            <img className={style.logo} src={logoImage} alt="FootTrack"/>

            <div className={style.accountControls}>
                <Link to="/about" className={style.aboutUs}>About us</Link>
                {username ? <UserPopup /> : <LoginRegisterPopup />}
            </div>
        </header>
    )
}

export default HomeHeader;