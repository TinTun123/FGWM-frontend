<template>
    <div class="w-full">

        <div class="mx-4">

            <div class="mt-4 flex flex-col gap-y-2">
                <div class="inline-flex justify-start items-center w-full">
                    <label class="absolute pr-3 bg-white text-black/80 font-semibold" for="title">Article Title:</label>
                    <hr class="w-full h-px my-8 bg-gray-300 border-0">
                </div>

                <input
                placeholder="Protest Title" 
                class="focus:outline-none 
                p-4 
                border 
                rounded-l-[10px] 
                rounded-tr-[10px] 
                border-black/40 
                tablet:text-primary
                w-full
                h-10" type="text" name="title" id="title" v-model="title">
            </div>

            <div class="mt-4 flex flex-col gap-y-2">
                <div class="inline-flex justify-start items-center w-full">
                    <label class="absolute pr-3 bg-white text-black/80 font-semibold" for="title">Date:</label>
                    <hr class="w-full h-px my-8 bg-gray-300 border-0">
                </div>
                <input type="date" name="date" id="date" v-model="date">
            </div>

            <div class="mt-4 flex flex-col gap-y-2">
                
                <div class="inline-flex justify-start items-center w-full">
                    <label class="absolute pr-3 bg-white text-black/80 font-semibold" for="title">Cover Photo:</label>
                    <hr class="w-full h-px my-8 bg-gray-300 border-0">
                </div>
                <ImageInput class="" :imgrul="article.imgURL" @update-img="updateImg"/>
            </div>



            <div class="mt-4 flex flex-col gap-y-2">
                <div class="inline-flex justify-start items-center w-full">
                    <label class="absolute pr-3 bg-white text-black/80 font-semibold" for="title">Body Text:</label>
                    <hr class="w-full h-px my-8 bg-gray-300 border-0">
                </div>
                <TiptapComponent v-model="content" :body-text="article.bodyText"/>
            </div>
            
            <div class="mt-4 flex flex-col gap-y-2">
                <div class="inline-flex justify-start items-center w-full">
                    <label class="absolute pr-3 bg-white text-black/80 font-semibold" for="title">Additional Images:</label>
                    <hr class="w-full h-px my-8 bg-gray-300 border-0">
                </div>
                <div class="mx-4 grid grid-cols-3 gap-x-4 gap-y-4 mt-4">
                    <div v-for="(img, index) in thumbnails" :key="index" :class="[img.isProtrait ? 'row-span-2 aspect-auto' : 'row-span-1 aspect-[1.56]']" class="col-span-1 relative">
                        <div @click="removeImg(index)" class="w-8 h-8 group absolute top-[-8px] right-[-8px]">
                            <svg class="w-full h-full" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-black/40 group-hover:fill-black/20 group-active:fill-black/60" d="M6.2376 11.2624L8.5008 9ZM10.7632 6.7376L8.5008 9ZM8.5008 9L6.2376 6.7376ZM8.5008 9L10.7632 11.2624ZM8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z"/>
                                <path d="M6.2376 11.2624L8.5008 9M8.5008 9L10.7632 6.7376M8.5008 9L6.2376 6.7376M8.5008 9L10.7632 11.2624M8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <img :src="img.url" class="w-full h-full" alt="">
                    </div>

                    <div @click="chooseImage" class="col-span-1 relative group" id="more-button">

                        <div class="aspect-[1.568]">
                            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-black/40 group-hover:fill-black/20 group-active:fill-black/10" d="M13 2H3C2.46974 2.00058 1.96137 2.21148 1.58643 2.58643C1.21148 2.96137 1.00058 3.46974 1 4V12C1.00058 12.5303 1.21148 13.0386 1.58643 13.4136C1.96137 13.7885 2.46974 13.9994 3 14H13C13.5303 13.9994 14.0386 13.7885 14.4136 13.4136C14.7885 13.0386 14.9994 12.5303 15 12V4C14.9994 3.46974 14.7885 2.96137 14.4136 2.58643C14.0386 2.21148 13.5303 2.00058 13 2ZM10.5 4C10.7967 4 11.0867 4.08797 11.3334 4.2528C11.58 4.41762 11.7723 4.65189 11.8858 4.92597C11.9994 5.20006 12.0291 5.50166 11.9712 5.79264C11.9133 6.08361 11.7704 6.35088 11.5607 6.56066C11.3509 6.77044 11.0836 6.9133 10.7926 6.97118C10.5017 7.02906 10.2001 6.99935 9.92597 6.88582C9.65189 6.77229 9.41762 6.58003 9.2528 6.33336C9.08797 6.08668 9 5.79667 9 5.5C9.00041 5.1023 9.15858 4.72101 9.4398 4.4398C9.72101 4.15858 10.1023 4.00041 10.5 4ZM3 13C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12V9.88656L4.96375 7.25219C5.2497 6.99858 5.62159 6.86354 6.00364 6.87457C6.38569 6.8856 6.74916 7.04188 7.02 7.31156L9.04969 9.33687L5.38656 13H3ZM14 12C14 12.2652 13.8946 12.5196 13.7071 12.7071C13.5196 12.8946 13.2652 13 13 13H6.80094L10.5953 9.20562C10.864 8.97717 11.2049 8.8513 11.5575 8.85039C11.9102 8.84947 12.2517 8.97356 12.5216 9.20063L14 10.4325V12Z"/>
                            </svg>
                        </div>
                        
                        <span 
                        class="absolute 
                        top-[50%] 
                        left-[50%] 
                        -translate-x-[50%] 
                        -translate-y-[50%] 
                        text-primary 
                        font-semibold
                        text-white/80
                        bg-black/60
                        group-hover:bg-black/40
                        group-active:bg-black/20
                        px-4
                        py-2
                        rounded-[20px]">
                            Add
                        </span>
                        <input @input="onSelectFile" ref="thumbInput" type="file" id="thumbnails" class="hidden">
                    </div>
                </div>
            </div>



            <button @click="sendPost" type="button" 
            class="text-black/80 
            rounded-[20px] 
            text-primary 
            px-8 py-2 
            font-medium 
            bg-secondary-yel-02 
            mt-8">
                Post
            </button>
            

        </div>
    </div>
</template>


<script setup>

import { onBeforeMount, ref } from 'vue';
import ImageInput from './ImageInput.vue';
import TiptapComponent from './TiptapComponent.vue';
import {useArticleStore} from '../sotre/articleStore';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();
const route = useRoute();
const coverImg = ref(null);
const date = ref();
const title = ref('');
const content = ref('');
const thumbInput = ref(null);
const thumbnails = ref([]);
const images = ref([]);
const article = ref({});
const articleStore = useArticleStore();

function chooseImage () {
    thumbInput.value.click();
}

function updateImg(file) {
    coverImg.value = file;
}

function sendPost() {

    const formData = new FormData();

    if(articleStore.currebtMode === 'edit') {
        formData.append('_method', 'PUT');
    }
    formData.append('title', title.value);
    formData.append('date', date.value);
    formData.append('coverImg', coverImg.value);
    formData.append('content', content.value);
    
    for(let i = 0; i < images.value.length; i++) {
        formData.append('images[]', images.value[i]);
    } 
    
    formData.append('type', route.params.type);

    if(articleStore.currebtMode === 'create') { 
        
        articleStore.createPost(formData, route.params.type).then(res => {
        chooseArticle(res.id, route.params.type);
        articleStore.changeTag('BodyComponent');
        return res;

    })

    } else if (articleStore.currebtMode === 'edit') {
        
        articleStore.editPost(formData, route.params.id, route.params.type).then(res => {
            chooseArticle(res.id, route.params.type);
            articleStore.changeTag('BodyComponent'); 
            return res.data;
        });
    }

}


function onSelectFile() {

    const input = thumbInput.value;
    const files = input.files;
    if(files && files[0]) {
        for(let i = 0; i < files.length; i++) {
            images.value.push(files[i]);
            const reader = new FileReader();
            const img = new Image();
            reader.onload = (e) => {
                img.src = e.target.result;
                img.onload = () => {
                    const isProtrait = (img.width / img.height) < 1;
                    thumbnails.value.push({
                        url : img.src,
                        isProtrait : isProtrait
                    });
                }
            }
            reader.readAsDataURL(files[i]);
        }
    }

}

function removeImg(index) {
    thumbnails.value.splice(index, 1);
}

onBeforeMount(() => {
    if(articleStore.currebtMode === 'edit') {
        article.value = articleStore.currentArticle;
        title.value = article.value.title;
        date.value = article.value.date;
    }
});

function chooseArticle(id, type) {
    articleStore.chooseArticle(id, type);
    router.push({
        name : 'Articles',
        params : {
            id : articleStore.currentId,
            type : articleStore.currentType
        }
    });
}



</script>

<style lang="css">
</style>