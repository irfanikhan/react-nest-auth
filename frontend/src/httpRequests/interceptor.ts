import axios from "axios";

export const httpService = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

httpService.interceptors.request.use(
    config => {
       const token = window.localStorage.getItem('access_token');

       if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
       }

       return config;
    }
)