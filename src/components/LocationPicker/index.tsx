import React, { useEffect, useCallback } from 'react';
import Input from 'components/Input';
import useGeoLocations from './useGeoLocations';
import style from './locationpicker.module.css';
import Button from 'components/Button';
import { IOSMSearchPlace } from 'api/api.openstreetmaps';

interface Props {
    locationSearch: string;
    setLocationSearch(v: string): void;
    onSelect(p: IOSMSearchPlace): void;
}

const LocationPicker: React.FC<Props> = ({ locationSearch, setLocationSearch, onSelect }) => {
    const { places, clearPlaces, findLocations,  } = useGeoLocations();

    useEffect(() => {
        findLocations(locationSearch);
    }, [locationSearch, findLocations]);

    const onSelectPlace = useCallback((p : IOSMSearchPlace) => {
        onSelect(p);
        clearPlaces();
    }, [onSelect, clearPlaces])

    return (
        <div className={style.wrapper}>
            <Input
                className={style.locationInput}
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                placeholder="Enter your area zipcode or name"
            />

            {!!places.length && (
                <ol className={style.locationsList}>
                    {places.map(p => (
                        <Button onClick={() => onSelectPlace(p)} styling="blank">
                            <li>
                                {p.display_name}
                            </li>
                        </Button>
                    ))}
                </ol>
            )}
        </div>
    )
}

export default LocationPicker;