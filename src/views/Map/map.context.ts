import React from 'react';
import { Map } from 'leaflet';

interface IMapContextState {
    centre: [number, number] | undefined; // long, lat used to control map
    location: string; // location entered by user to be looked up
    rangeInMiles: number; // radius 
}

interface IMapContextActions {
    setCentre(v: IMapContextState["centre"]): void
    setLocation(v: IMapContextState["location"]): void;
    setRangeInMiles(v: IMapContextState["rangeInMiles"]): void;
}

const MapContext = React.createContext<IMapContextState & IMapContextActions>({} as any);

export default MapContext;