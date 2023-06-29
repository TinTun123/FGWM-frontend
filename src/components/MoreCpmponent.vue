<template>
    <div class="flex flex-col gap-y-2 mt-8">
        <div class="inline-flex justify-end items-center mx-4">
            <label class="absolute p-3 bg-white text-sm text-black/40 font-medium">MORE</label>
            <hr class="w-full h-px my-8 bg-gray-300 border-0">
        </div>
        <div 
        class="flex 
        overflow-x-scroll 
        scroll-container 
        gap-x-4 
        px-4 
        tablet:flex-col 
        tablet:overflow-y-scroll 
        tablet:h-[80vh] 
        tablet:gap-y-4
        ">
            <div
            v-for="(article, index) in articles"
            :key="index"
            @click="chooseArticle(article.id, route.params.type)" 
            class="w-[164px]
            h-[164px] 
            flex-none 
            rounded-[10px]
            relative
            lg-table:flex
            lg-table:w-[288px]
            lg-table:h-auto
            tablet:gap-x-2
            laptop:w-[388px]
            laptop:h-auto">
            <div v-if="type === 'phone' || type === 'tablet'"
            class="
            w-full 
            h-full 
            absolute 
            top-0
            rounded-[10px] 
            bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">
            </div>

            <img :src="article.imgURL" 
            class="w-full h-full 
            flex-none 
            lg-table:w-[133px] 
            rounded-[10px] 
            lg-table:h-[101px]" alt="">

            <div 
            class="absolute 
            laptop:flex 
            laptop:flex-col 
            gap-y-2 
            lg-table:relative 
            bottom-0 
            p-2 
            laptop:py-0 
            laptop:justify-center
            ">
                <span 
                class="lg-table:text-black/60 
                laptop:order-last 
                text-x-sm
                text-white 
                font-semibold 
                laptop:text-sm">
                    {{ article.date }}
                </span>
                <p 
                class="lg-table:text-black/80 
                text-sm
                text-white 
                line-clamp-2 
                fa-font 
                laptop:text-primary">
                    {{ article.title }}
                </p>
            </div>

            </div>
        </div>
    </div>

</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useArticleStore } from '../sotre/articleStore';
import { defineProps } from 'vue';
import { useBreakPoints } from '../composible/useBreakPoints';


const route = useRoute();
const articleStore = useArticleStore();
const router = useRouter();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    articles : Array
});
const {type} = useBreakPoints();

function chooseArticle(id, type) {
    articleStore.chooseArticle(id, type);
    router.push({
        name : 'Articles',
        params : {
            id : id,
            type : type
        }
    });
}
</script>

<style>
</style>