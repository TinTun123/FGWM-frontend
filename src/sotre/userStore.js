import { defineStore } from 'pinia'

export const useUserStore = defineStore('Users', {
    state : () => {
        return {
            user_id : '',
            token : ''
        }
    },

    actions  : {
        storeToken(token) {
            localStorage.setItem('token', token);
            this.token = token;
        }
    }
})