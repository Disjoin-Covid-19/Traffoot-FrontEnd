import React from 'react';
import HomeHeader from './HomeHeader';
import style from './home.module.css';
const Home = () => {

    return (
        <main className={style.main}>
            <HomeHeader />
        </main>
    )
}

export default Home;