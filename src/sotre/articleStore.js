import { defineStore } from 'pinia'
import axios from '../axios'

export const useArticleStore = defineStore('ArticleStore', {
    state : () => {
        return {
            protest : [],
            camgpains : [],
            articles : [

            ],
            thumbnails : [

            ],
            messages : [

            ],
            currentArticle : {

            },
            currentTag : 'BodyComponent',
            currebtMode : 'create',
            currentType : 'protest',
            currentId : '1'
        }
    },
    actions : {
        changeTag(str) {
            this.currentTag = str;
        },
        changeMode(str) {
            this.currebtMode = str;
        },
        createPost(payload, type) {
            return axios.post('createArticle', payload)
            .then((res) => {
                if (res.status === 200) {
                    if (type === 'protest') {

                        this.protest.push(res.data[0]);
                      
                        return res.data[0];

                    } else if (type === 'activities') {

                        this.camgpains.push(res.data[0]);
                        
                        return res.data[0];

                    } else if (type === 'articles') {
                        this.articles.push(res.data[0]);
                        return res.data[0];
                    }
                    this.getArticle(res.data[0].id, type);
                }

            })
        },
        editPost(payload, id, type) {
            const config = {
                headers : {
                    'Content-Type': 'multipart/form-data'
                },
                params : {
                    _method: 'PUT'
                }
            }
            return axios.post(`protest/${type}/${id}`, payload, config).then(res => {
                
                if(type === 'protest') {
                    for(let i = 0; i < this.protest.length; i++) {
                        if (this.protest[i].id === id) {
                            this.protest[i] = res.data[0];
                        }
                    }
                } else if (type === 'activities') {
                    for (let i = 0; i < this.camgpains.length; i++) {
                        if(this.camgpains[i].id === id) {
                            this.camgpains[i] = res.data[0];
                        }
                    }
                }
                this.currentArticle = res.data[0];
                this.currebtMode = 'create';
                this.currentTag = 'BodyComponent';
                return res.data;
            });
        },
        deletePost(id, type) {
            if(type === 'protest') {
                this.protest.splice(Number(id) - 1, 1);
            } else if (type === 'activities') {
                this.camgpains.splice(Number(id) - 1, 1);
            } else if (type === 'articles') {
                this.articles.splice(Number(id) - 1, 1);
            }
            return axios.delete(`protest/${type}/${id}`).then(res => {
                this.getArticle(res.data[0].id, type);
                return res.data[0];
            });
        },
        sendMsg(payload, id, type) {
            return axios.post(`message/${type}/${id}`, payload)
            .then(res => {
                this.messages = res.data;
                return res.data;
            })
        },
        deleteMsg(Msgid, articleId, type) {
            return axios.delete(`message/${type}/${articleId}/${Msgid}`)
            .then(res => {
                if(res.status === 200) {
                    this.messages = this.messages.filter(msg => {
                        
                        return msg.id !== Msgid;
                    });
                }
                return res.data;
                
            });
        },
        async fetchProtest(type) {
            try {
                const response = await axios.get(`protest/${type}`);
                if (type === 'protest') {
                    this.protest = response.data;
                } else if(type === 'activities') {
                    this.camgpains = response.data;
                } else if (type === 'articles') {

                    this.articles = response.data;
                }
            } catch (error) {
                console.error('Failed to fetch protests', error);
            }
        }, 
        fetchMsg(id, type) {
            this.messages = [];
            return axios.get(`message/${type}/${id}`)
            .then(res => {
                this.messages = res.data;
                return res.data
            })
        },
        chooseArticle(id, type) {
            this.currentId = id;
            this.currentType = type;
        },
        async fetchThumbnails(type, id) {
            try {
                this.thumbnails = [];
                const response = await axios.get(`protest/${type}/${id}`);
                this.thumbnails = response.data;

            } catch (error) {
                console.error('Failed to fetch protests', error);
            }
        },
        getArticle (id, type) {
            let article 
            if(type === 'protest') {
                article = this.protest.find(art => {
                   
                    return art.id === Number(id);
                });

            } else if (type === 'activities') {
                article = this.camgpains.find(art => {
                    
                    return art.id === Number(id);
                });
            } else if (type === 'articles') {
                article = this.articles.find(art => {;
                    return art.id === Number(id);
                });
            }

            if(!article) {
                this.currentArticle = {
                    title : 'No protest is posted yet!'
                }
            } else {
                this.currentArticle = article;
            }
            return [];
        }

    }
})