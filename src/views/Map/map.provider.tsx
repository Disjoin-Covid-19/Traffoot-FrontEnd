import React, { useState, useEffect, useCallback } from 'react';
import MapContext from './map.context';
import { useGeofenceStores } from './map.hooks';

interface Props { }

const MapProvider: React.FC<Props> = ({ children }) => {
    const [rangeInMiles, setRangeInMiles] = useState(100);
    const [location, setLocation] = useState("");
    const [center, setCenter] = useState<[number, number] | undefined>(undefined);

    const {
        getStores,
        stores,
    } = useGeofenceStores();

    const getMapStores = useCallback((c?: [number, number], r?: number) => {
        if (c) setCenter(c);
        if (r) setRangeInMiles(r);
        
        if (c) return getStores(c, r ?? rangeInMiles);
        if (center) return getStores(center, r ?? rangeInMiles)
        
    }, [center, rangeInMiles, getStores])

    return (
        <MapContext.Provider value={{
            center,
            location,
            rangeInMiles,
            stores,
            setCenter,
            setLocation,
            setRangeInMiles,
            getMapStores
        }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider;