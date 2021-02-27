import Axios, { AxiosResponse } from 'axios';

const axios = Axios.create({
    baseURL: "https://sample-disjoin1.herokuapp.com/api"
})

interface IGeoStore {}
export const getStores = async (token: string) => {
    const response = await axios({
        url: '/geofence_stores',
        headers: {
            'Authorization': 'Bearer ' + token,
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
    const response = await axios({
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