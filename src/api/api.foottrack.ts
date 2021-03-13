import Axios, { AxiosResponse } from 'axios';

export const FTAxios = Axios.create({
    baseURL: "https://sample-disjoin1.herokuapp.com/api"
})

export interface IGeoStore {
    _id:          { $oid: string };
    sid:          number;
    sName:        string;
    username:     string;
    password:     string;
    streetName:   string;
    city:         string;
    state:        string;
    zipcode:      string;
    isActive:     boolean;
    Latitude:     number;
    Longitude:    number;
    timestampUTC: number;
}
export const getStores = async (center: [number, number], radius: number) => {
    const response = await FTAxios({
        url: '/geofence_stores',
        method: 'post',
        data: {
            center,
            radius
        }
    });

    return response as AxiosResponse<IGeoStore[]>
}

interface ILoginResponse {
    msg: string;
    status: boolean;
    token: string
}
export const login = async (email: string, password: string) => {
    const response = await FTAxios({
        url: '/userLogin',
        method: 'post',
        data: {
            email,
            password
        }
    });

    return response as AxiosResponse<ILoginResponse>;
}

export const register = async (username: string, password: string) => {

}