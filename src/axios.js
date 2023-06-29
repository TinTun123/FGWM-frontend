import axios from 'axios';
import { useUserStore } from './sotre/userStore';

// const token = window.localStorage.getItem('token');

const axiosClient = axios.create({

    baseURL : 'http://192.168.1.197:8000/api'

})

axiosClient.interceptors.request.use((config) => {
    const userStore = useUserStore();
    if(userStore.token) {
        config.headers.Authorization = `Bearer ${userStore.token}`;
    }

    return config;

})

export default axiosClient;