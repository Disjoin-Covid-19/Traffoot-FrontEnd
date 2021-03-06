import React from "react";
import { IGeoStore } from "api/api.foottrack";
interface IMapContextState {
  center: [number, number] | undefined; // long, lat used to control map
  location: string; // location entered by user to be looked up
  rangeInMiles: number; // radius
  stores: IGeoStore[] | undefined; // stores
}

interface IMapContextActions {
  setCenter(v: IMapContextState["center"]): void;
  setLocation(v: IMapContextState["location"]): void;
  setRangeInMiles(v: IMapContextState["rangeInMiles"]): void;
}

const MapContext = React.createContext<IMapContextState & IMapContextActions>({} as any);

export default MapContext;
