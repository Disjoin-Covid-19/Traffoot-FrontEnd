import React, { useState, useEffect } from 'react';
import MapContext from './map.context';
import { useGeofenceStores } from './map.hooks';

interface Props { }

const MapProvider: React.FC<Props> = ({ children }) => {
    const [rangeInMiles, setRangeInMiles] = useState(5);
    const [location, setLocation] = useState("");
    const [center, setCenter] = useState<[number, number] | undefined>(undefined);

    const {
        getStores,
        stores,
    } = useGeofenceStores();

    useEffect(() => {
        if (center && rangeInMiles) {
            getStores(center, rangeInMiles);
        }
    }, [center, rangeInMiles, getStores])

    return (
        <MapContext.Provider value={{
            center,
            location,
            rangeInMiles,
            stores,
            setCenter,
            setLocation,
            setRangeInMiles
        }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider;