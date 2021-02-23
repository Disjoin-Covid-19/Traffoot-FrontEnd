import React, { useEffect } from 'react';
import { TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import data from '../map.storedata.json';
import { useMapContext } from '../map.hooks';

interface Props { }

const MapInner: React.FC<Props> = (props) => {

    const map = useMap();
    const { centre } = useMapContext();

    useEffect(() => {
        if (centre) {
            map.panTo(centre)
        }
    }, [map, centre]);
    return (
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map(d =>
                <Marker position={[d.latitude, d.longitude]}>
                    <Popup>
                        {d.storeName}
                    </Popup>
                </Marker>
            )}
        </>
    )
}

export default MapInner;