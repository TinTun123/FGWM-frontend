import axios from 'axios';


const token = window.localStorage.getItem('token');

const axiosClient = axios.create({

    baseURL : 'http://localhost:8000/api'

})

axiosClient.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${token}`;
    return config;

})

export default axiosClient;