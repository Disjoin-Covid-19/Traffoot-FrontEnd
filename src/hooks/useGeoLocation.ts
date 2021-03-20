import { useCallback, useState } from "react";

const useGeoLocation = (onPosition?: (pos: [number, number]) => void) => {
    const [userPosition, setUserPosition] = useState<[number, number] | undefined>(undefined);
    const getUserPosition = useCallback(() => {
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition((e) => {
            const pos = [e.coords.latitude, e.coords.longitude] as [number, number];
            setUserPosition(pos);
            onPosition?.(pos)
        });
    }, [onPosition])

    return {
        getUserPosition,
        userPosition,
        locationSupported: !!navigator.geolocation
    }
}

export default useGeoLocation;