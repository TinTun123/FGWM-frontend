<template>

    
    <div class="">
        <h1 v-if="!articleStore.currentArticle.date">{{ articleStore.currentArticle.title }}</h1>
         <div v-if="articleStore.currentArticle.date" 
         class="mt-4 
         mx-4
         tablet:mx-8 
         laptop:ml-0">
           <h1 
            class="text-lg
            fa-font 
            tablet:text-xlg 
            tablet:leading-[37.5px]" lang="my">
                {{ articleStore.currentArticle.title }}
            </h1>


            <div class="laptop:w-[481px]">
                <div class="mt-8 flex justify-between">
                    <div>
                        <span class="text-sm font-semibold text-black/60">{{ articleStore.currentArticle.date }}</span>
                    </div>

                    <div class="flex gap-x-1 items-center">
                        <div class="w-6 h-6 rounded-[12px] overflow-hidden">
                            <img :src="articleStore.currentArticle.user.img_url" class="w-full h-full" alt="">
                        </div>
                        <span class="text-sm font-medium text-black/60">
                            {{ articleStore.currentArticle.user.name }}
                        </span>
                    </div>
                </div>

                <div class="aspect-[1.59] mt-2">
                    <img :src="articleStore.currentArticle.imgURL" class="w-full h-full" alt="">
                </div>

                <div class="mt-2 flex justify-between">

                    <div>
                        <span class="text-x-sm font-bold text-black/60">Post</span>
                    </div>

                    <div class="flex gap-x-2 items-center">
                        <div class="flex items-center gap-x-1">
                            <div>
                                <span class="text-sm font-semibold text-black/60">
                                    +{{ articleStore.currentArticle.total_view }}
                                </span>
                            </div>
                            <div class="w-4 h-4">
                                <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5473 8.28667C14.492 8.20733 13.1726 6.324 11.352 5.03667C10.408 4.368 9.2173 4 7.99996 4C6.7833 4 5.59263 4.368 4.64663 5.03667C2.82596 6.324 1.50796 8.20733 1.45263 8.28667C1.37507 8.39833 1.3335 8.53104 1.3335 8.667C1.3335 8.80296 1.37507 8.93567 1.45263 9.04733C1.50796 9.12667 2.82596 11.01 4.64663 12.2973C5.59263 12.9653 6.7833 13.3333 7.99996 13.3333C9.2173 13.3333 10.408 12.9653 11.352 12.2967C13.1726 11.0093 14.492 9.126 14.5473 9.04667C14.6251 8.93521 14.6668 8.80258 14.6668 8.66667C14.6668 8.53076 14.6251 8.39812 14.5473 8.28667ZM7.99996 11C6.71063 11 5.66663 9.95333 5.66663 8.66667C5.66663 7.37733 6.71063 6.33333 7.99996 6.33333C9.28663 6.33333 10.3333 7.37733 10.3333 8.66667C10.3333 9.95333 9.28663 11 7.99996 11ZM9.3333 8.66667C9.3333 9.40133 8.73463 10 7.99996 10C7.73626 10 7.47847 9.9218 7.2592 9.77529C7.03994 9.62878 6.86904 9.42055 6.76813 9.17691C6.66721 8.93328 6.6408 8.66519 6.69225 8.40655C6.7437 8.14791 6.87069 7.91033 7.05716 7.72386C7.24363 7.53739 7.4812 7.4104 7.73984 7.35895C7.99849 7.30751 8.26657 7.33391 8.51021 7.43483C8.75384 7.53574 8.96208 7.70664 9.10859 7.92591C9.2551 8.14517 9.3333 8.40296 9.3333 8.66667Z" fill="black" fill-opacity="0.4"/>
                                </svg>
                            </div>
                        </div>

                        <div class="flex items-center gap-x-1">
                            <div>
                                <span class="text-sm font-semibold text-black/60">
                                    {{ articleStore.currentArticle.messages_count }}
                                </span>
                            </div>

                            <div class="w-4 h-4">
                                <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 14C9.30862 13.9997 10.5813 13.5716 11.624 12.7809C12.6667 11.9902 13.4224 10.8803 13.7758 9.62027C14.1291 8.36026 14.0609 7.01927 13.5814 5.80165C13.102 4.58403 12.2376 3.55655 11.12 2.87579C10.0023 2.19502 8.69281 1.89831 7.39092 2.03086C6.08903 2.16341 4.86617 2.71796 3.90869 3.61C2.95122 4.50203 2.31163 5.68264 2.0874 6.97191C1.86317 8.26118 2.06659 9.58841 2.66667 10.7513L2 14L5.24867 13.3333C6.07267 13.7593 7.00867 14 8 14Z" fill="black" fill-opacity="0.4"/>
                                    <path d="M5 8H5.00667V8.00667H5V8ZM8 8H8.00667V8.00667H8V8ZM11 8H11.0067V8.00667H11V8Z" stroke="white" stroke-width="2.25" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>




            <div v-html="articleStore.currentArticle.bodyText" class="fa-font">

            </div>

            

            <div class="mt-8">
                <div class="flex flex-col">
                    <span class="text-black/60 text-x-sm">UPLOAD</span>
                    <span class="text-black/60 text-x-sm font-bold">{{ articleStore.currentArticle.created_at }}</span>
                </div>
            </div>
            
        </div>
    </div>



</template>

<script setup>
import { useArticleStore } from '../sotre/articleStore';
// import ThumbnailsComponent from './ThumbnailsComponents.vue';


const articleStore = useArticleStore();




</script>


<style>
</style>