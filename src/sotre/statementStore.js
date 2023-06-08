
import { defineStore } from 'pinia'
import axiosClient from '../axios'


export const useStatementStore = defineStore('Statements', {
    state : () => {
        return {
         statement : [
        ],
        preUrl : '',
        nextUrl : '',
    }
    },

    actions : {
        getStatements(page) {
            axiosClient.get(`statement/${page}`).then((res) => {
                this.statement = res.data.data;
                this.preUrl = res.data.prev_page_url;
                this.nextUrl = res.data.next_page_url;
                
            }).catch(err => {
                console.log(err.response);
            })
        },
        nextPage() {
            axiosClient.get(this.nextUrl).then(res => {
                
                this.statement = res.data.data;
                this.preUrl = res.data.prev_page_url;
                this.nextUrl = res.data.next_page_url;
                
            
                
            }).catch(err => {
                console.log(err.response);
            })
        },

        prePage() {
            axiosClient.get(this.preUrl).then(res => {
                this.statement = res.data.data;
                this.preUrl = res.data.prev_page_url;
                this.nextUrl = res.data.next_page_url;
                
            }).catch(err => {
                console.log(err.response);
            })
        }
    }

})