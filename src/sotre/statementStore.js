
import { defineStore } from 'pinia'
import axios from '../axios'


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
            return axios.get(`statement/${page}`).then((res) => {
                this.statement = res.data.data;
                this.preUrl = res.data.prev_page_url;
                this.nextUrl = res.data.next_page_url;
                console.log(res.data.data);
                
            }).catch(err => {
                console.log(err.response);
            })
        },
        sendStatement(payload) {
            return axios.post('statement', payload)
            .then(res => {
                this.statement.push(res.data[0]);
                return res.data;
            })
        },
        deleteStatement(id) {
            return axios.delete(`statement/${id}`).then(res => {
                this.statement = this.statement.filter(stat => {
                    return stat.id !== Number(res.data[0]);
                });

                return res.data;
            })
        },
        nextPage() {
            return axios.get(this.nextUrl).then(res => {
                
                this.statement = res.data.data;
                this.preUrl = res.data.prev_page_url;
                this.nextUrl = res.data.next_page_url;
                
            
                
            }).catch(err => {
                console.log(err.response);
            })
        },

        prePage() {
            return axios.get(this.preUrl).then(res => {
                this.statement = res.data.data;
                this.preUrl = res.data.prev_page_url;
                this.nextUrl = res.data.next_page_url;
                
            }).catch(err => {
                console.log(err.response);
            })
        }
    }

})