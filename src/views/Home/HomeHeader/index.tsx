import React from 'react';
import style from './homeheader.module.css';
import logoImage from '../../../assets/image-product-logo.png';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const HomeHeader = () => {

    return (
        <header className={style.header}>
            <img className={style.logo} src={logoImage} alt="FootTrack"/>
            <nav className={style.nav}>
                <Link to="/about">
                    About Us
                </Link>
                <Link to="/onboard">
                    Store Onboard
                </Link>
                <Link to="/integration">
                    Integrations
                </Link>
            </nav>
            <div className="accountControls">
                <Button className={style.loginButton} styling="blank">Log in</Button>
                <Button styling="primary">Create Account</Button>
            </div>
        </header>
    )
}

export default HomeHeader;