//https://nominatim.org/release-docs/develop/api/

import Axios, { AxiosResponse } from 'axios';

export interface IOSMSearchPlace {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon: string;
}

const axios = Axios.create({
    baseURL: "https://nominatim.openstreetmap.org",
});

export const searchLocation = async (q: string) => {
    const response = await axios({
        url: "/search",
        params: {
            format: "json",
            q,
        }
    })

    return response as AxiosResponse<IOSMSearchPlace[]>;
}

