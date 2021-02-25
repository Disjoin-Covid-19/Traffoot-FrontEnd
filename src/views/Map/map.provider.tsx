import React, { useState } from 'react';
import MapContext from './map.context';

interface Props { }

const MapProvider: React.FC<Props> = ({ children }) => {
    const [rangeInMiles, setRangeInMiles] = useState(5);
    const [location, setLocation] = useState("");
    const [center, setCenter] = useState<[number, number] | undefined>(undefined);

    return (
        <MapContext.Provider value={{
            center,
            location,
            rangeInMiles,
            setCenter,
            setLocation,
            setRangeInMiles
        }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider;