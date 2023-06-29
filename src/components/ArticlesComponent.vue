<template>
    <div class="mt-8 laptop:mt-0">
        <CoverComponent v-if="type === 'desktop'"/>
        
        <HeaderComponent />
        <TagComponent />

        <div v-if="userStore.token" class="flex gap-x-2 mx-4 mt-4 justify-end laptop:w-[1200px] laptop:mx-auto laptop:pr-4">
            <button @click="toggleComponent"
            :class="[articleStore.currebtMode === 'edit' ? 'hidden' : 'relative']" 
            class="px-4 
            py-1 
            bg-secondary-yel-02/80 
            text-black/80 
            text-x-sm 
            laptop:text-primary 
            font-semibold 
            rounded-[20px]
            flex-none">{{ articleStore.currentTag === 'BodyComponent' ? 'Add new' : 'back'  }}</button>
            <button @click="editArticle"
            :class="[articleStore.currebtMode === 'create' && articleStore.currentTag === 'CreateArticleComponent' ? 'hidden' : 'relative']"  
            class="px-4 
            py-1 
            bg-secondary-yel-02/80 
            text-black/80 
            text-x-sm 
            laptop:text-primary 
            font-semibold 
            rounded-[20px]
            flex-none">{{articleStore.currebtMode === 'edit' ? 'Back' : 'edit'}}</button>
            <button @click="deleteArticle"
            :class="[articleStore.currentTag === 'BodyComponent'? 'relative' : 'hidden']"  
            class="px-4 
            py-1
            bg-secondary-yel-02/80 
            text-x-sm 
            laptop:text-primary 
            font-semibold 
            rounded-[20px]
            flex-none">delete</button>
        </div>     

        <div 
        class="tablet:flex 
        tablet:gap-x-2 
        tablet:justify-between
        tablet:items-start
        laptop:w-[1200px] 
        laptop:mx-auto">
            <div>
                <component :is='tags[articleStore.currentTag]' class="tablet:flex-none"></component> 
            </div>

            <MoreComponent v-if="type !== 'phone'" class="lg-table:flex-none" :articles="articles"/>

        </div>

        <ThumbnailsComponentsVue v-if="articleStore.currentTag === 'BodyComponent'" class="mt-8 mb-8"/>



        <MessageComponent/>
        <MoreComponent v-if="type === 'phone'" :articles="articles"/>
        <FooterComponent/>
    </div>
</template>

<script setup>
import ThumbnailsComponentsVue from './ThumbnailsComponents.vue';
import TagComponent from './TagComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterCOmponent.vue';
import CoverComponent from './CoverComponent.vue';
import BodyComponent from './BodyComponent.vue';
import CreateArticleComponent from './CreateArticleComponent.vue';
import MessageComponent from './MessageComponent.vue';
import MoreComponent from './MoreCpmponent.vue';
import {useBreakPoints} from '../composible/useBreakPoints.js';
import { useArticleStore } from '../sotre/articleStore';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../sotre/userStore';

const router = useRouter();
const route = useRoute();
const articleStore = useArticleStore();
const userStore = useUserStore();
const articles = ref([]);

const tags = {
    BodyComponent,
    CreateArticleComponent
}
const {type} = useBreakPoints();

onMounted(async () => {

    if(!articleStore.protest.length) {
        await articleStore.fetchProtest('protest');
    }

    if(!articleStore.camgpains.length) {
        await articleStore.fetchProtest('activities');
    }

    if(!articleStore.articles.length) {
        await articleStore.fetchProtest('articles');
    }

    if (route.params.type === 'protest') {
        articles.value = articleStore.protest;
    } else if (route.params.type === 'activities') {
        articles.value = articleStore.camgpains
    } else if (route.params.type === 'articles') {
        articles.value = articleStore.articles;
    }

    articleStore.getArticle(route.params.id, route.params.type);
    
});

function toggleComponent() {
    if (articleStore.currentTag === 'BodyComponent') {
        articleStore.changeMode('create');
        articleStore.changeTag('CreateArticleComponent');
    } else if (articleStore.currentTag === 'CreateArticleComponent') {
        articleStore.changeTag('BodyComponent');
    }
}

function editArticle() {
    if (articleStore.currentTag === 'BodyComponent') {
        
        articleStore.changeMode('edit');
        articleStore.changeTag('CreateArticleComponent');

    } else if (articleStore.currentTag === 'CreateArticleComponent') {

        articleStore.changeMode('create');
        articleStore.changeTag('BodyComponent');

    }
}

function deleteArticle() {
    articleStore.deletePost(route.params.id, route.params.type).then(res => {
        console.log(res);
        router.push({
            name : 'Articles',
            params : {
                id : res,
                type : route.params.type
            }
        });
        articleStore.changeTag('BodyComponent'); 
    });
}

watch(
    [() => route.params.id, () => route.params.type],
    // eslint-disable-next-line no-unused-vars
    async ([newId, newType]) => {

        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
        
        if (newType === 'protest') {
            if(!articleStore.protest.length) {
                await articleStore.fetchProtest(newType);
            }
            articles.value = articleStore.protest;

        } else if (newType === 'activities') {
            if(!articleStore.camgpains.length) {
                await articleStore.fetchProtest(newType);
            }
            articles.value = articleStore.camgpains;
        } else if (newType === 'articles') {
            if(!articleStore.articles.length) {
                await articleStore.fetchProtest(newType);
            }
            articles.value = articleStore.articles;
        }
        articleStore.getArticle(route.params.id, route.params.type);
        articleStore.fetchMsg(route.params.id, route.params.type);
    }
    )
</script>

<style>
</style>