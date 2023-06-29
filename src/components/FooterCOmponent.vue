<template>
<div id="footer" 
class="w-full 
relative  
px-4
py-8
gap-y-4 
gap-x-4
laptop:w-full
laptop:h-[50vh]
laptop:flex
laptop:itmes-center
mt-8
">
  <div class="text-center z-[100] relative tablet:hidden">
    <p class="motteo inline-block relative text-white/80 text-primary laptop:text-lg font-semibold leading-[24px]">
      INJURY TO ONE IS <br/>
      INJURT TO ALL 
    </p>
  </div>
  
  <div 
  class="flex 
  justify-between 
  mt-4 
  tablet:mx-8 
  tablet:justify-between 
  lg-table:w-[840px] 
  lg-table:mx-auto 
  laptop:mx-auto 
  lg-laptop:w-[1020px] 
  lg-laptop:mx-auto
  laptop:mt-0
  laptop:w-[1200px]
  laptop:items-center
  ">
  
    <div class="z-[100]">
      <ul class="space-y-1">
        
            <li 
            class="text-sm 
            text-white 
            border-l-[2px] 
            border-white/80 
            pl-2
            laptop:text-primary">
            <router-link to="/Story">
              OUR STORY
            </router-link>
            
          </li>

        <li @click="navigate('articles')" class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">BLOG</li>
        <li @click="navigate('activities')" class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">UNION ACTIVITIES</li>
        
          <li class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">
            <router-link to="/Advocates">ADVOCATES</router-link>
            
          </li>

          <li class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">
            <router-link to="/Women">WOMEN COMMITEE</router-link>
          </li>

        <li class="cursor-pointer laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white" @click="open = true;">Admin Login</li>
      </ul>
    </div>

      <div class="motteo text-center z-[100] hidden relative tablet:block tablet:self-center">
        <p 

        class="text-white/80 
        text-lg 
        font-semibold 
        leading-[24px]">
          INJURY TO ONE IS 
          <br/>
          INJURY TO ALL 
        </p>

      </div>

    <div class="z-[100]">
      <ul class="space-y-1">
        <li class="text-sm laptop:text-primary text-white border-l-[2px] border-white/80 pl-2">CONTACT</li>
        <li class="flex gap-x-1 items-center">
          <div class="w-2 h-2">
            <svg class="w-full h-full" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.91957 6.8114L5.88254 4.77421C5.83881 4.73097 5.78191 4.70356 5.72084 4.69632C5.65978 4.68907 5.59804 4.70241 5.54541 4.73421C5.17796 4.95653 4.90381 5.30482 4.77403 5.71423C4.70831 5.91995 4.46833 6.01424 4.28262 5.90281L4.27977 5.89995L4.27691 5.89709C3.38462 5.3619 2.6379 4.61512 2.10274 3.72276C2.10274 3.7199 2.09989 3.71705 2.09989 3.71705C1.98561 3.53133 2.07989 3.29132 2.28559 3.22561C2.69583 3.09742 3.04461 2.82285 3.26554 2.45416C3.33125 2.34559 3.31411 2.20844 3.22554 2.11701L1.18851 0.0798211C1.14478 0.0365828 1.08788 0.00917019 1.02681 0.00192471C0.965749 -0.00532078 0.904012 0.00801511 0.851382 0.0398202C0.602289 0.189276 0.394302 0.398378 0.246172 0.648274C0.098041 0.89817 0.0144234 1.181 0.00285698 1.47128V1.47414C-2.66078e-09 1.50271 0 1.53128 0 1.55985C0 1.59986 0.00285698 1.637 0.00571397 1.67414C0.0397129 2.80555 0.363343 3.90932 0.945663 4.87993C1.47992 5.77138 2.22845 6.51997 3.11983 7.05426L3.12269 7.05712C4.10549 7.64856 5.22543 7.97143 6.37108 7.99714C6.39394 7.99714 6.41679 8 6.43965 8H6.59964V7.99429C6.87738 7.97076 7.14563 7.88187 7.38247 7.73489C7.61931 7.58791 7.81804 7.387 7.96242 7.14855C8.02528 7.03998 8.00814 6.89997 7.91957 6.8114Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </div>
          <span class="laptop:text-sm text-x-sm text-white">+669-123-456-8</span>
        </li>

        <li class="flex gap-x-1 items-center">
          <div class="w-2 h-2">
            <svg class="w-full h-full" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.55556 0H0.444444C0.32657 0 0.213524 0.0468252 0.130175 0.130175C0.0468252 0.213524 0 0.32657 0 0.444444V7.55556C0 7.67343 0.0468252 7.78648 0.130175 7.86983C0.213524 7.95318 0.32657 8 0.444444 8H4.27333V4.90667H3.23422V3.69556H4.27333V2.80667C4.27333 1.77333 4.90444 1.21022 5.82889 1.21022C6.13956 1.20933 6.45067 1.22533 6.76 1.25778V2.33333H6.12222C5.62089 2.33333 5.52311 2.57244 5.52311 2.92222V3.69333H6.72178L6.56622 4.90444H5.52267V8H7.55556C7.67343 8 7.78648 7.95318 7.86983 7.86983C7.95318 7.78648 8 7.67343 8 7.55556V0.444444C8 0.32657 7.95318 0.213524 7.86983 0.130175C7.78648 0.0468252 7.67343 0 7.55556 0Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </div>
          <span class="laptop:text-sm text-x-sm text-white">FGWM.Facebook.Page</span>
        </li>


        <li class="flex gap-x-1 items-center">
          <div class="w-2 h-2">
            <svg class="w-full h-full" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V1C8 0.446667 7.68489 0 7.29453 0H0.705467C0.315109 0 0 0.446667 0 1V7C0 7.55333 0.315109 8 0.705467 8H7.29453C7.68489 8 8 7.55333 8 7ZM7.38389 0.926667C7.53909 1.14667 7.45444 1.37333 7.36978 1.48667L5.46032 3.96667L7.29453 6.67333C7.35097 6.76667 7.38859 6.91333 7.32275 7.01333C7.26161 7.12 7.12052 7.11333 7.05938 7.04667L5.00412 4.56L3.99765 5.86L2.99588 4.56L0.940623 7.04667C0.879483 7.11333 0.738389 7.12 0.677249 7.01333C0.611405 6.91333 0.64903 6.76667 0.705467 6.67333L2.53968 3.96667L0.630217 1.48667C0.545561 1.37333 0.460905 1.14667 0.616108 0.926667C0.771311 0.706667 0.931217 0.813333 1.0629 0.973333L3.99765 4.33333L6.9371 0.973333C7.06878 0.813333 7.22869 0.706667 7.38389 0.926667Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </div>

          <span class="laptop:text-sm text-x-sm text-white">fgwm.mail.prg</span>
        </li>
      </ul>
    </div>  
  </div>

  <div class="z-[100] absolute bottom-0 laptop:bottom-4 left-[50%] -translate-x-[50%] flex items-center justify-between">
    <span class="text-white/80 text-x-sm">All</span>
    <div class="w-2 h-2 mx-1">
      <svg class="w-full h-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" />
        <path stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 7.75004C11.4171 7.23777 10.6592 6.96989 9.88383 7.00211C9.10848 7.03434 8.37539 7.36417 7.837 7.92304C7.2994 8.48083 6.99902 9.22535 6.99902 10C6.99902 10.7747 7.2994 11.5192 7.837 12.077C8.37539 12.6359 9.10848 12.9657 9.88383 12.998C10.6592 13.0302 11.4171 12.7623 12 12.25" />
      </svg>
    </div>
    <span class="text-white/80 text-x-sm">right reserved FGWM.org</span>
  </div>
</div>

        
    <Teleport to="body">
      <transition name="modal">
          <div v-if="open" class="modal-mask">
              <div class="modal-container rounded-[10px] relative">
                  <button @click="open = false" class="absolute left-[-16px] top-[-16px] group" type="button">
                    <div class="w-8 h-8">
                      <svg class="w-full h-full" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2376 11.2624L8.5008 9ZM10.7632 6.7376L8.5008 9ZM8.5008 9L6.2376 6.7376ZM8.5008 9L10.7632 11.2624ZM8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="fill-white/80 group-hover:fill-white/40 group-active:fill-white/60"/>
                        <path d="M6.2376 11.2624L8.5008 9M8.5008 9L10.7632 6.7376M8.5008 9L6.2376 6.7376M8.5008 9L10.7632 11.2624M8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="stroke-black/40" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  <h1 class="modal-header text-black/80 text-center font-semibold">Admin Log in</h1>
                  
                  <div class="mt-2 mb-2 flex flex-col gap-y-2">
                      <input 
                      class="focus:outline-none 
                      border 
                      pl-2 py-1
                      rounded-[10px] 
                      text-primary 
                      text-black/80 
                      focus:border-black/40"
                      placeholder="Admin email"
                      type="mail" v-model="email" name="email" id="email">

                      <input
                      placeholder="Password" 
                      type="password" name="pwd" v-model="pwd" 
                      class="focus:outline-none 
                      border 
                      pl-2 py-1 
                      rounded-[10px] 
                      text-primary 
                      text-black/80 
                      focus:border-black/40">
                  </div>
                  <div>
                    <span v-if="error && (!email || !pwd)" class="text-sm text-red-300">{{error}}</span>
                    <button class="modal-footer modal-default-button text-black/80" @click="login">Login</button>
                  </div>

              </div>

          </div>                
      </transition>
    </Teleport>
</template>


<script setup>
import { ref } from 'vue';
import { useUserStore } from '../sotre/userStore';
import { useRouter } from 'vue-router';
import { useArticleStore } from '../sotre/articleStore';

const router = useRouter();
const userStore = useUserStore();
const articlesStore = useArticleStore();
const open = ref(false);
const email = ref('');
const pwd = ref('');
const error = ref('');

function login() {
  const formData = new FormData();
  error.value = '';
  if(email.value && pwd.value) {
    formData.append('email', email.value);
    formData.append('pwd', pwd.value);

    userStore.login(formData).then(res => {
        if (res === 200) {
          open.value = false;
        }
    });

  } else {
    error.value = 'Require admin credentials!';
  }
}

function navigate(str) {
  router.push({
    name : 'Articles',
    params : {
      type : str,
      id : str === 'articles' ? articlesStore.articles[0].id || '1' : articlesStore.camgpains[0].id || '1'
    }
  })
}
</script>

<style>
#footer::before {
  content : "";
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 100%;
  z-index : 0;
  background-image: url('../assets/cover02_retouch02.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  
}

#footer::after {
  content : "";
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.8);
  
}
</style>