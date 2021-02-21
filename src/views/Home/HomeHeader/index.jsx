import React from 'react';
import style from './homeheader.module.css';
import logoImage from '../../../assets/image-product-logo.png';
import { Link } from 'react-router-dom';

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
                
            </div>
        </header>
    )
}

export default HomeHeader;