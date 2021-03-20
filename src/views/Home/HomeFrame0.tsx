import React from 'react';
import style from './home.module.css';
import storeImage from 'assets/image-home-frame-1-store.png';
import { useAuth } from 'contexts/Auth/auth.hooks';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

interface Props { }

const HomeFrame0: React.FC<Props> = (props) => {

    const { username } = useAuth()

    return (
        <div className={style.content}>
            <h1 className={style.slogan}>
                <span>Foot traffic control</span>
                <br />
                <span>for a safer world</span>
            </h1>
            <p className={style.description}>
                <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
                <br />
                <span>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</span>
            </p>
            <div className={style.buttons}>
                {!username && <Button className={style.signUpButton} large styling="black"> Sign Up </Button>}
                <Link to='/map'>
                    <Button large styling="primary"> Find Store </Button>
                </Link>
            </div>
        </div>
    )
}

export default HomeFrame0;