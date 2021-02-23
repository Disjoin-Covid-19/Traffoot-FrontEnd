import React, { useEffect } from 'react';
import { TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import data from '../map.storedata.json';
import { useMapContext } from '../map.hooks';

interface Props { }

const MapInner: React.FC<Props> = (props) => {

    const map = useMap();
    const { centre, rangeInMiles } = useMapContext();

    useEffect(() => {
        if (centre) {
            map.panTo(centre);
            map.setZoom(12)
        }
    }, [map, centre]);

    useEffect(() => {
        if (rangeInMiles) {

        }
    }, [map, rangeInMiles])
    return (
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {centre && (
                <Circle
                    center={{ lat: centre[0], lng: centre[1] }}
                    fillColor="#d5d5d4"
                    opacity={0} // for the line around
                    fillOpacity={0.4}
                    radius={rangeInMiles * 1609} // leaflet does radius in meters
                />
            )}
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