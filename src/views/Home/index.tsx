import React from 'react';
import HomeHeader from './HomeHeader';
import style from './home.module.css';
import Button from 'components/Button';
const Home = () => {

    return (
        <main className={style.main}>
            <HomeHeader />

            <div className={style.content}>
                <h1 className={style.slogan}>
                    <span>Foot traffic control</span>
                    <br/>
                    <span>for a safer world</span>
                </h1>
                <p className={style.description}>
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
                    <br/>
                    <span>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</span>
                </p>
                <div>
                    <Button className={style.signUpButton} large styling="black"> Sign Up </Button>
                    <Button large styling="primary"> Find Store </Button>
                </div>
            </div>
        </main>
    )
}

export default Home;