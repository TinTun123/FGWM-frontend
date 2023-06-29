<template>

    <div class="fixed top-0 w-full z-[999]">
        <div v-if="type !== 'desktop'"  class="flex justify-between px-4 py-2 bg-primary-red-01">

            <div @click="goHome" class="w-4 h-4">
                <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 12.6667L2 8.00001M2 8.00001L6.66667 3.33334M2 8.00001H14" stroke="#F2CAA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div class="w-4 h-4" @click="drop = !drop">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3C0 2.44687 0.510714 2 1.14286 2H14.8571C15.4893 2 16 2.44687 16 3C16 3.55313 15.4893 4 14.8571 4H1.14286C0.510714 4 0 3.55313 0 3ZM0 8C0 7.44688 0.510714 7 1.14286 7H14.8571C15.4893 7 16 7.44688 16 8C16 8.55312 15.4893 9 14.8571 9H1.14286C0.510714 9 0 8.55312 0 8ZM16 13C16 13.5531 15.4893 14 14.8571 14H1.14286C0.510714 14 0 13.5531 0 13C0 12.4469 0.510714 12 1.14286 12H14.8571C15.4893 12 16 12.4469 16 13Z" fill="#F2CAA2"/>
                </svg>
            </div>

        </div>

        <div v-if="type !== 'desktop'" :class="[drop ? 'max-h-[155px]' : 'max-h-0 py-0']" 
        class="bg-primary-red-01 px-4 overflow-y-hidden transition-[max-height] z-[9999]">
            <ul class="pb-4">

                <router-link to="/Story">
                    <li  class="py-2 border-b border-secondary-yel-02/80 text-primary text-white fonr-medium">
                        About us
                    </li>
                </router-link>

                <router-link to="/Advocates">
                    <li  class="py-2 border-b border-secondary-yel-02/80 text-primary text-white fonr-medium">
                        Advocates
                    </li>
                </router-link>


                <router-link to="/Women">
                    <li class="py-2 border-b border-secondary-yel-02/80 text-primary text-white fonr-medium">
                        Women commitee
                    </li>
                </router-link>


            </ul>
        </div>

        <div v-if="type === 'desktop'" id="sticky-nav" 
        class="mt-4 
        mx-2 
        tablet:mx-8 
        flex
        flex-wrap 
        gap-x-2 
        gap-y-2
        justify-end 
        z-50 
        laptop:mt-0
        laptop:gap-x-4">

            <div 
            class="bg-secondary-yel-02 
            p-1 
            px-2 
            rounded-[0.86875rem] 
            shadow-drop-sha 
            active:bg-secondary-yel-02/80">
            <router-link to="/Advocates">
                <h3 
                class="text-sm
                whitespace-nowrap 
                tablet:text-primary 
                text-primary-red-01 
                font-semibold">Women Commitee</h3>
            </router-link>
            </div>

            <div 
            class="bg-secondary-yel-02 
            p-1 
            px-2 
            rounded-[0.86875rem] 
            shadow-drop-sha 
            active:bg-secondary-yel-02/80">
            <router-link to="/Advocates">
                <h3 
                class="text-sm 
                tablet:text-primary 
                text-primary-red-01 
                font-semibold">Advocates</h3>
            </router-link>
            </div>

            <div 
            class="bg-secondary-yel-02 
            p-1 
            px-2 
            rounded-[0.86875rem] 
            shadow-drop-sha 
            active:bg-secondary-yel-02/80">
            <router-link to="/Blog">
                <h3 
                class="text-sm 
                tablet:text-primary 
                text-primary-red-01 
                font-semibold">Blogs</h3>
            </router-link>
            
            </div>

            <div 
            class="bg-secondary-yel-02 
            p-1 
            px-2 
            rounded-[0.86875rem] 
            shadow-drop-sha 
            active:bg-secondary-yel-02/80">
            <router-link to="/Story">
                <h3 
                class="text-sm
                whitespace-nowrap 
                tablet:text-primary 
                text-primary-red-01 
                font-semibold">Our Story</h3>
            </router-link>
            
            </div>

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useBreakPoints } from '../composible/useBreakPoints';
import { useRouter } from 'vue-router';

const router = useRouter();
const { type } = useBreakPoints();
const drop = ref(false);


function goHome() {
    router.push({
        name : 'home'
    });
}


</script>


<style>
</style>