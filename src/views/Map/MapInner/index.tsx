import React, { useEffect, useMemo } from 'react';
import { TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import {icon} from 'leaflet'
import { useMapContext } from '../map.hooks';
import storeIconImg from 'assets/stock-store-marker.png'

interface Props { }

const MapInner: React.FC<Props> = (props) => {

    const map = useMap();
    const { center, rangeInMiles, stores } = useMapContext();

    const mapIcon = useMemo(() => {
        return icon({
            iconUrl: storeIconImg,
            iconSize: [24,24]
        })
    }, [])

    useEffect(() => {
        if (center) {
            map.panTo(center);
            map.setZoom(10)
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
            {stores?.slice(0, 10).map(s =>
                <Marker icon={mapIcon} position={[s.Latitude, s.Longitude]}>
                    <Popup>{s.streetName}</Popup>
                </Marker>
            )}
        </>
    )
}

export default MapInner;