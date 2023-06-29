<template>
    <div class="laptop:w-[1200px] laptop:mx-auto ml-4 tablet:mx-8">
        <div class="flex justify-between">
            <div class="mt-4">
                <ul class="flex gap-x-2 bg-primary-red-01/60">
                    <li 
                    class='flex-none 
                    text-sm 
                    laptop:text-primary 
                    font-semibold 
                    px-2 py-2 
                    text-secondary-yel-02
                    hover:bg-secondary-yel-02/40
                    '
                    :class="[route.params.type === 'protest' ? 'border-b-4 border-b-secondary-yel-02/80' : 'border-none']">
                        <button @click="changeTag('protest')">
                        Protests
                        </button>
                    </li>
                    <li 
                    class='flex-none 
                    text-sm 
                    laptop:text-primary 
                    font-semibold 
                    px-2 py-2 
                    text-secondary-yel-02
                    hover:bg-secondary-yel-02/40'
                    :class="[route.params.type === 'activities' ? 'border-b-4 border-b-secondary-yel-02/80' : 'border-none']">
                        <button @click="changeTag('activities')">
                            Activities
                        </button>
                    </li>
                    <li 
                    class='flex-none 
                    text-sm 
                    laptop:text-primary 
                    font-semibold 
                    px-2 py-2 
                    text-secondary-yel-02
                    hover:bg-secondary-yel-02/40'
                    :class="[route.params.type === 'articles' ? 'border-b-4 border-b-secondary-yel-02/80' : 'border-none']">
                        <button @click="changeTag('articles')">
                            Acticles
                        </button>
                    </li>
                    <li 
                    class='flex-none 
                    text-sm 
                    laptop:text-primary 
                    font-semibold 
                    px-2 py-2 
                    text-secondary-yel-02
                    hover:bg-secondary-yel-02/40'>
                        <button @click="changeTag('home')">
                            Home
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useArticleStore } from '../sotre/articleStore';

const route = useRoute();
const articleStore = useArticleStore();
const router = useRouter();
function changeTag(type) {

    if (type === 'home') {
        router.push({
            name : 'home'
        });
    }
    
    if (type === 'protest') {
            router.push({
            name : 'Articles',
            params : {
                id : articleStore.protest[0].id,
                type : type
            }
        })
    } else if (type === 'activities') {
            router.push({
            name : 'Articles',
            params : {
                id : articleStore.camgpains[0].id,
                type : type
            }
        })
    } else if (type === 'articles') {
            router.push({
            name : 'Articles',
            params : {
                id : articleStore.articles[0].id,
                type : type
            }
        })
    }

    articleStore.currentTag = 'BodyComponent';
    articleStore.currebtMode = 'create';



}
</script>

<style>
</style>