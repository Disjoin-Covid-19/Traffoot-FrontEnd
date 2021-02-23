import React from 'react';
import MapProvider from './map.provider';
import style from './map.module.css';
import MapSideBar from './MapSidebar';

import 'leaflet/dist/leaflet.css'

import { MapContainer, MapConsumer } from 'react-leaflet'
import MapInner from './MapInner';
import { useMapContext } from './map.hooks';

interface Props {

}

const Map: React.FC<Props> = () => {

    const c = useMapContext();

    

    return (
        <MapProvider>
            <div className={style.container}>
                <MapSideBar />

                <MapContainer className={style.map} center={[47.6062, -122.3321]} zoom={19} scrollWheelZoom={true}>
                    <MapInner />
                </MapContainer>

            </div>
        </MapProvider>
    )
}

export default Map;