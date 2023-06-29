import { defineStore } from 'pinia'
import axios from '../axios'
export const useUserStore = defineStore('Users', {
    state : () => {
        return {
            user_id : '',
            token : ''
        }
    },

    actions  : {
        storeToken(token) {
            this.token = token;
        },
        login(payload) {
            return axios.post('login', payload).then(res => {
                this.storeToken(res.data.token);
                return res.status;
            });
        }
    }
})