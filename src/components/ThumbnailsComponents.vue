<template>
    <div 
    class="flex 
    gap-x-2 
    overflow-x-scroll 
    px-4 mt-4 
    tablet:grid 
    tablet:grid-cols-4 
    tablet:gap-x-4 
    tablet:gap-y-4 
    laptop:grid-cols-6 
    scroll-container
    tablet:px-8
    laptop:w-[1200px]
    laptop:mx-auto
    laptop:px-0">
        <div v-for="(image, index) in images" :key="index" :class="[getImageClass(image) ? 'tablet:row-span-2 aspect-auto' : 'tablet:row-span-1 aspect-[1.56]']" class="flex-none aspect-[1.56] w-[50%] tablet:w-auto tablet:col-span-1">
            <img :src="image.url" class="w-full h-full" alt="">
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useArticleStore } from '../sotre/articleStore';
import { useRoute } from 'vue-router';
const articleStore = useArticleStore();
const images = ref([]);
const route = useRoute();

function preloadImages() {
    const promises = articleStore.thumbnails.map((url) => {
        
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const aspectRatio = img.width / img.height;
                resolve({url, aspectRatio});
            };
            img.onerror = () => {
                reject(new Error(`Failed to load image ${url}`));
            };
            img.src = url;
        });
    });
    Promise.all(promises).then((imgs) => {

        images.value = imgs;
    })
    .catch((error) => {
        console.log(error);
    })
}

function getImageClass(image) {
    const isProtrait = image.aspectRatio < 1;
    return isProtrait;
}

onMounted(async () => {
    await articleStore.fetchThumbnails(route.params.type, route.params.id);
    preloadImages();
});

watch(
    [() => route.params.id, () => route.params.type],
    async ([newId, newType]) => {
        await articleStore.fetchThumbnails(newType, newId);
        preloadImages();
        articleStore.fetchMsg(newId, newType);
    }
    )

</script>

<style>
</style>