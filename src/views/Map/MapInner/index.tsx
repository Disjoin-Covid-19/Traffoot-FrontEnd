import React, { useEffect } from 'react';
import { TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import { useMapContext } from '../map.hooks';

interface Props { }

const MapInner: React.FC<Props> = (props) => {

    const map = useMap();
    const { center, rangeInMiles, stores } = useMapContext();

    useEffect(() => {
        if (center) {
            map.panTo(center);
            map.setZoom(12)
        }
    }, [map, center]);

    return (
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {center && (
                <Circle
                    center={{ lat: center[0], lng: center[1] }}
                    fillColor="#d5d5d4"
                    opacity={0} // for the line around
                    fillOpacity={0.4}
                    radius={rangeInMiles * 1609} // leaflet does radius in meters
                />
            )}
            {stores?.map(d =>null
                // <Marker position={[d.latitude, d.longitude]}>
                //     <Popup>
                //         {d.storeName}
                //     </Popup>

                // </Marker>
            )}
        </>
    )
}

export default MapInner;