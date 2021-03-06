import { useContext, useState, useCallback } from "react"
import MapContext from "./map.context";
import type { IGeoStore } from 'api/api.foottrack';
import * as FootTrackAPI from "api/api.foottrack";



export const useMapContext = () => {
    const ctx = useContext(MapContext);
    return ctx;
}

export const useGeofenceStores = () => {
    const [stores, setStores] = useState<IGeoStore[] | undefined>();
    const [loading, setLoading] = useState(false);

    const getStores = useCallback(async (center: [number, number], radius: number) => {
        setLoading(true);
        const response = await FootTrackAPI.getStores(center, radius);

        if (response.status === 200) {
            setStores(response.data);
        };

        setLoading(false);

    }, [setLoading, setStores])

    return {
        getStores,
        stores,
        loading
    }

}