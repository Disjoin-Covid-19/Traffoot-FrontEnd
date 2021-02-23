import React from 'react';
import style from './mapsidebar.module.css';
import productLogo from 'assets/image-product-logo.png';
import Input from 'components/Input';
import { useMapContext } from '../map.hooks';
import Button from 'components/Button';
import LocationPicker from 'components/LocationPicker';

interface Props { }

const MapSideBar: React.FC<Props> = (props) => {

    const {
        location,
        setLocation,
        rangeInMiles,
        setRangeInMiles,
        setCentre
    } = useMapContext();

    return (
        <div className={style.container}>
            <header className={style.header}>
                <img className={style.logo} src={productLogo} alt="FootTrack" />
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
                        onSelect={(p) => setCentre([Number(p.lat), Number(p.lon)])}
                    />
                </div>

                <div>
                    <label htmlFor="range">
                        Set your search radius
                    </label>
                    <Input
                        type="range"
                        min="0"
                        max="10"
                        value={rangeInMiles}
                        onChange={e => setRangeInMiles(Number(e.target.value))}
                    />
                </div>


            </div>

        </div>
    )
}

export default MapSideBar;