<template>
    
        <div class="w-1/5 p-4">
            <div v-if="error[0]">
                <ul>
                    <li v-for="(err_msg, i) in error" :key="i">
                        {{ err_msg }}
                    </li>
                </ul>
            </div>
            <form @submit.prevent="handleSubmit" class="flex flex-col gao-y-2" enctype="multipart/form-data">
            
                <div>
                    <label for="date">Date</label>            
                    <input type="date" v-model="date" name="date" id="date">
                </div>

                <div>
                    <label for="file">image</label>
                    <input ref="fileInput" type="file" name="image" id="file">
                </div>


                <button type="submit" class="w-2/5 bg-white rounded-[12px] mt-2 shadow-drop-sha active:shadow-drop-sha-hover">Login</button>
            </form>
        </div>

        <div class="w-1/5 p-4">
            <form @submit.prevent="login" class="flex flex-col gao-y-2" enctype="multipart/form-data">
            
                <div>
                    <label for="email">email</label>            
                    <input type="mail" v-model="email" name="email" id="email">
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" v-model="pwd" name="password" id="password">
                </div>

                <button type="submit" class="w-2/5 bg-white rounded-[12px] mt-2 shadow-drop-sha active:shadow-drop-sha-hover">Login</button>
            </form>
        </div>
</template>

<script setup>
import axioClient from '../axios.js';
import {ref} from 'vue';
import { useUserStore } from '../sotre/userStore';

const email = ref('');
const pwd = ref('');
const date = ref('');
const fileInput = ref(null);
const userStore = useUserStore();

const error = ref([]);

function login() {
    const formData = {
        email : email.value,
        password : pwd.value
    }

    axioClient.post('/login', formData).then(response => {
        userStore.storeToken(response.data.token);
    }).catch(error => {
        console.log('before error');
        console.error('Login error', error.response.data);
});
    
}

function handleSubmit() {
    const formData = new FormData();
    const file = fileInput.value.files[0];
    error.value = "";
    formData.append('image', file);
    formData.append('date', date.value);
    
    axioClient.post('/statement', formData)
    .then((res) => {
        console.log(res.data);
    }).catch((res) => {
        if(res.response.data.errors.image) {
            error.value = res.response.data.errors.image

        }
    })
}

</script>

<style>
</style>