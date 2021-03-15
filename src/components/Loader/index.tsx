import React from 'react';
import style from './loader.module.css';
import { ClipLoader } from 'react-spinners';

interface Props {}

const Loader: React.FC<Props> = (props) => {

    return (
        <div className={style.loader}>
            <ClipLoader />
        </div>
    )
}

export default Loader;