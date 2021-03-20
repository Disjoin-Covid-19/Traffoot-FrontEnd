import React from 'react';
import style from './home.module.css';
import storeImage from 'assets/image-home-frame-1-store.png';

interface Props {}

const HomeFrame1: React.FC<Props> = (props) => {

    return (
        <div className={style.frame}>
            <img src={storeImage} alt=""/>
            <div>
                <h2>The Problem</h2>
                <h3>
                    Have you ever stood in<br />
                    long queues?
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
    )
}

export default HomeFrame1;