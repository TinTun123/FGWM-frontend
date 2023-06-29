<template>
    
    <div>
        <div class="relative aspect-[4/3] laptop:h-[100vh] laptop:aspect-auto laptop:bg-black">
            <div id="cover-grad" class="w-full h-full absolute top-0 z-10">
            </div>

            <svg class="hidden absolute top-4 left-4 tablet:left-8 laptop:left-16 laptop:top-8 z-40" width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#F9C20F"/>
            </svg>

            <picture>
            <source media="(min-width: 905px)" srcset="../assets/bg_cover.jpg">
            <source media="(min-width: 600px)" srcset="../assets/bg_cover_800w.jpg">
            <img class="w-full h-full z-0" src="../assets/bg_cover_480.jpg" alt="">
            </picture>

            <div  class="
            bg-primary-red-01/60
            w-[225px]
            p-4
            absolute
            top-[50%]
            left-[50%]
            -translate-x-[50%]
            -translate-y-[50%] 
            tablet:w-[304px]
            tablet:p-8
            laptop:w-[356px]
            z-50
            
            ">
                <div class="">

                    <h3 class="
                    text-primary 
                    tablet:text-lg 
                    laptop:text-xlg 
                    text-secondary-yel-02 
                    text-center 
                    leading-[24px] 
                    tablet:leading-[1.875rem] 
                    font-semibold">
                    FEDERATION OF GENERAL WORKERS MYANMAR
                    </h3>

                    <div class="flex items-center justify-center laptop:h-auto mt-[13px]">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>


<style>
</style>