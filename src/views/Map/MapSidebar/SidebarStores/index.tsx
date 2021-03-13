import React from 'react';
import style from './sidebarstores.module.css';
import { useMapContext } from 'views/Map/map.hooks';

import stockStoreImg from 'assets/stock-store.jpeg';
interface Props { }

const SidebarStores: React.FC<Props> = (props) => {

    const { stores, setCenter } = useMapContext();
    return (
        <ul className={style.list}>
            {stores?.slice(0,5).map(store => (
                <li className={style.listItem}>
                    <img onClick={()  => setCenter([store.Latitude, store.Longitude])} className={style.storeImage} src={stockStoreImg} alt="" />
                    <div className={style.listItemBody}>
                        <h2>{store.streetName}</h2>
                        <h3>{store.city}</h3>
                        <p className={style.traffic}>
                            {store.sid}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SidebarStores;