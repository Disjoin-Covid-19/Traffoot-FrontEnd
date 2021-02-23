import { useContext } from "react"
import MapContext from "./map.context"

export const useMapContext = () => {
    const ctx = useContext(MapContext);
    return ctx;
}