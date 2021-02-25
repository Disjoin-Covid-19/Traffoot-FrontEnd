import { useCallback, useState } from "react";
import { searchLocation, IOSMSearchPlace } from "api/api.openstreetmaps";

const useGeoLocations = () => {

    const [places, setPlaces] = useState<IOSMSearchPlace[]>([]);
    const [error, setError] = useState(false);

    const findLocations = useCallback(async (query: string) => {
        try {
            const response = await searchLocation(query);
            setPlaces(response.data.slice(0, 5));
        } catch (error) {
            setError(true);
        }
    }, []);

    const clearPlaces = useCallback(() => {
        setPlaces([])
    }, [setPlaces])

    return {
        places, findLocations, clearPlaces, error
    }
}

export default useGeoLocations;