import React from 'react';
import style from './mapsidebar.module.css';
import productLogo from 'assets/image-product-logo-bg-white.svg';
import Input from 'components/Input';
import { useMapContext } from '../map.hooks';
import LocationPicker from 'components/LocationPicker';
import { Link } from 'react-router-dom';
import SidebarStores from './SidebarStores';

interface Props { }

const MapSideBar: React.FC<Props> = (props) => {

    const {
        location,
        setLocation,
        rangeInMiles,
        setRangeInMiles,
        getMapStores,
    } = useMapContext();

    return (
        <div className={style.container}>
            <header className={style.header}>
                <Link to="/">
                    <h1>
                        <img className={style.logo} src={productLogo} alt="FootTrack" />
                    </h1>
                </Link>
                <p>
                    <span>Loren ipsum dolor sit</span>
                    <br />
                    <span>amet, consetetur</span>
                </p>
            </header>

            <div className={style.form}>
                <div>
                    <label htmlFor="search">
                        Where are you searching?
                    </label>
                    <LocationPicker
                        locationSearch={location}
                        setLocationSearch={setLocation}
                        onSelect={(p) => {
                            getMapStores([Number(-34.6143064), Number(-58.738932)])
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="range">
                        Set your search radius
                    </label>
                    <Input
                        type="range"
                        min="0"
                        max="100"
                        value={rangeInMiles}
                        onChange={e => setRangeInMiles(Number(e.target.value))}
                    />
                </div>
                <SidebarStores />


            </div>

        </div>
    )
}

export default MapSideBar;