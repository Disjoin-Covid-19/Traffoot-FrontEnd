import React, { useEffect } from 'react';
import { Element, scroller, Events } from 'react-scroll';
import HomeHeader from './HomeHeader';
import style from './home.module.css';
import useTitle from 'hooks/useTitle';
import HomeFrame0 from './HomeFrame0';
import HomeFrame1 from './HomeFrame1';
import HomeFrame2 from './HomeFrame2';
import useScrollDirection from './useScrollDirection';

const Home: React.FC<{}> = () => {

    useTitle("Foot traffic control for a safer world")
    useScrollDirection({
        frameLimit: 2,
        onScroll: (f) => {
            console.log(f);
            
            scroller.scrollTo('frame'+f, {duration: 300, smooth: true  })
        },
    });
    return (
        <main className={style.main}>
            <HomeHeader />
            <Element name="frame0">
                <HomeFrame0 />
            </Element>
            <Element name="frame1">
                <HomeFrame1 />
            </Element>
            <Element name="frame2">
                <HomeFrame2 />
            </Element>
        </main>
    )
}

export default Home;