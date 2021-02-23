import React, { useState, useRef, useCallback } from 'react';
import MapContext from './map.context';

interface Props {}

const MapProvider: React.FC<Props> = ({ children }) => {    
    const [rangeInMiles, setRangeInMiles] = useState(5);
    const [location, setLocation] = useState("");

    const [centre, setCentre] = useState<[number, number] | undefined>(undefined);

    return (
        <MapContext.Provider value={{
            centre,
            location,
            rangeInMiles,
            setCentre,
            setLocation,
            setRangeInMiles
        }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider;