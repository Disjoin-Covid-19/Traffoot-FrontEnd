import Axios, { AxiosResponse } from 'axios';

const axios = Axios.create({
    baseURL: "https://sample-disjoin1.herokuapp.com/api"
})

interface IGeoStore {}


export const getStores = async () => {
    const response = await axios({
        url: "/geofence_stores",   
    });

    return response as AxiosResponse<IGeoStore[]>
}