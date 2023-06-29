<template>
  <CoverComponentVue />

  <div id="sticky-nav" 
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

  <div 
  class="mr-auto 
  mt-0
  pt-4
  talbet:mt-4
  lg-table:mt-8 
  lg-table:w-[840px] 
  lg-table:mx-auto 
  laptop:mt-8 
  laptop:mx-auto 
  laptop:w-[1200px] 
  lg-laptop:w-[1020px] 
  lg-laptop:mx-auto
  bg-secondary-yel-02/20 ">

  <h1 class="text-lg px-4 inline-block mb-4 border-b-[3px] border-primary-red-01 tablet:text-xlg font-semibold">
    OUR STORY
  </h1>
    
    <div 
    class="px-4 
    pb-4 
    tablet:pb-8
    tablet:px-8 
    text-center 
    m-auto 
    laptop:flex 
    laptop:items-center 
    laptop:justify-center">
        <div 
        class="float-right 
        w-24 
        h-24 
        tablet:w-28 
        tablet:h-28 
        laptop:w-1/5 
        laptop:h-1/5 
        laptop:float-none 
        laptop:flex-none 
        laptop:order-last 
        rounded-full">
          <img src="../assets/logo_optimized.svg" class="w-full h-full rounded-full" alt="">  
        </div>

        <p 
        class="text-primary 
        tablet:text-lg 
        leading-[1.5rem] 
        tablet:leading-[2.34375rem]">
          <span class="text-lg tablet:text-xlg">“In</span> September 2019, <span class="font-bold">20 labor unions</span> of various industrial sector established <span class="font-bold">Federation of General Workers Myanmar</span>, an independent self-sustained organization aim for promoting solidarity among workers&#39; communities and fighting on-going injustices, defending workers &#39; rights and their welfare.<span class="text-lg tablet:text-xlg">”</span>
        </p>
    </div>

  </div>  

  <div 
    class="mt-8 
    mx-4 
    relative 
    rounded-[10px]
    tablet:mx-8
    lg-table:w-[840px]
    lg-table:mx-auto
    laptop:mx-auto
    laptop:w-1/2">

    <div 
      class="w-full 
      h-full 
      z-10 
      first-protest-grad 
      rounded-[10px] 
      absolute 
      top-0
      bg-gradient-to-tr from-black from-0% via-black/30 via-60% to-black/0">
    </div>

    <div class="aspect-[1.33]">
      <img src="../assets/cover.jpg" class="w-full h-full rounded-[10px]" alt="">
    </div>
      
    <div id="" class="
    absolute 
    rounded-[10px] 
    left-0 
    bottom-2
    flex 
    items-center
    tablet:bottom-4
    laptop:rounded-l-[10px]
    laptop:pl-4
    ">
      <div 
      class="xxs:w-full 
      mx-4 
      z-30 
      w-3/5 
      ">
        <p id="first-protest-para" 
        class="px-2 
        text-sm 
        tablet:text-primary 
        tablet:leading-[1.5rem] 
        relative 
        leading-[1.2rem] 
        font-medium 
        first-letter:text-xxlg 
        text-white">
          Amidst the time of apprehension, <span class="font-bold">FWGM</span>    , along with thousand of workers bravely embrace  the uncertainty and took to the street on the 6<sup>th</sup> of February, became the very first protest in the history of <span class="font-bold">Burmese Spring Revolution</span> igniting series of resistant movements later across the country.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-12 inline-block py-1 px-2 tablet:py-2 tablet:px-4 bg-primary-red-01 laptop:mt-16">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
      <!-- <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg> -->

      <div class="w-4 h-4 tablet:w-8 tablet:h-8">
        <img src="../assets/logo_optimized.svg" class="w-full h-full rounded-full" alt="">  
      </div>
    
    <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap">UNION STRIKES</h3>
    </div>
  </div>

  <div class="
  mt-12
  flex
  flex-nowrap
  px-4
  space-x-4
  overflow-x-scroll
  scroll-container
  tablet:mx-8
  tablet:grid
  tablet:grid-cols-3
  tablet:space-x-0
  tablet:px-0
  tablet:gap-x-2
  tablet:gap-y-2
  lg-table:w-[840px]
  lg-table:mx-auto
  laptop:grid-cols-4
  laptop:w-[1200px]
  laptop:mx-auto
  laptop:overflow-visible
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto">

    <div class=" 
    relative
    flex-none
    w-[267px]
    h-[202px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:w-auto
    rounded-[10px]
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow
    "
    v-for="(protest, index) in protestImages"
    :key="index"
    @click="navigate('Articles',protest.id, 'protest')"
    :class="[protest.isProtrait ? 'tablet:row-span-2' : 'tablet:row-span-1']">

    <div 
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">
    </div>

      <img :src="protest.url"  class="rounded-[10px] h-full w-full "  alt="">
      <div class="
      absolute 
      w-full
      px-2
      pb-2 
      bottom-0 
      flex 
      items-end 
      left-0
    rounded-[10px]
      ">
        <div class="w-full">

          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/80
            font-bold
            ">
              <span class="mt-auto align-top">
                {{ protest.date }}
              </span>
            </div>

            <div class="flex gap-x-1 items-center">
                <span class="text-xx-sm align-baseline tablet:text-sm text-white/80 laptop:text-xx-sm">Photo</span>
                <div class="w-1 h-1 flex items-center justify-center">
                  <svg class="w-full h-full" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#ffffff"/>
                  </svg>
                </div>
                <span class="text-xx-sm align-baseline tablet:text-sm laptop:text-xx-sm text-white/80">
                  AungKhantZaw
                </span>
            </div>
          </div>

          <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          line-clamp-2" lang="my">
          {{ protest.title }}
        </h2>

        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

  </div>


  <div class="mt-12 inline-block py-1 px-2 tablet:py-2 tablet:px-4 bg-primary-red-01 laptop:mt-16">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
      <!-- <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg> -->

      <div class="w-4 h-4 tablet:w-8 tablet:h-8">
        <img src="../assets/logo_optimized.svg" class="w-full h-full rounded-full" alt="">  
      </div>
    
    <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap">Campaigns</h3>
    </div>
  </div>



  <div class="
  mt-12
  flex
  flex-nowrap
  px-4
  space-x-4
  overflow-x-scroll
  scroll-container
  tablet:mx-8
  tablet:grid
  tablet:grid-cols-3
  tablet:space-x-0
  tablet:px-0
  tablet:gap-x-2
  tablet:gap-y-2
  lg-table:w-[840px]
  lg-table:mx-auto
  laptop:grid-cols-4
  laptop:w-[1200px]
  laptop:mx-auto
  laptop:overflow-visible
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto
  ">

  <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:w-auto
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow"

    v-for="(article, index) in activitiesImages" :key="index"
    @click="navigate('Articles', article.id, 'activities')"
    :class="[article.isProtrait ? 'tablet:row-span-2' : 'tablet:row-span-1']">

    <div
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">
    </div>
      <img :src="article.url" class="rounded-[10px] h-full w-full"  alt="">
      <div class="
      absolute 
      h-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0
      ">
        <div>

        <div class="flex gap-x-1 items-center">

          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/80
            font-bold
            ">
              <span class="mt-auto align-top">
                {{ article.date }}
              </span>
            </div>
          </div>

        </div>

        <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          pb-[1px]
          line-clamp-2
          "
          lang="my">
          {{ article.title }}
        </h2>

        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

  </div>


  <div class="mt-12 inline-block py-1 px-2 tablet:py-2 tablet:px-4 bg-primary-red-01 laptop:mt-16">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
      <!-- <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg> -->

      <div class="w-4 h-4 tablet:w-8 tablet:h-8">
        <img src="../assets/logo_optimized.svg" class="w-full h-full rounded-full" alt="">  
      </div>
    
    <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap">Articles</h3>
    </div>
  </div>



  <div class="
  mt-12
  flex
  flex-nowrap
  px-4
  space-x-4
  overflow-x-scroll
  scroll-container
  tablet:mx-8
  tablet:grid
  tablet:grid-cols-3
  tablet:space-x-0
  tablet:px-0
  tablet:gap-x-2
  tablet:gap-y-2
  lg-table:w-[840px]
  lg-table:mx-auto
  laptop:grid-cols-4
  laptop:w-[1200px]
  laptop:mx-auto
  laptop:overflow-visible
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto">

  <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:w-auto
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow"
    v-for="(article, index) in articlesImages" :key="index"
    @click="navigate('Articles', article.id, 'articles')"
    :class="[article.isProtrait ? 'tablet:row-span-2 tablet:h-[404px]' : 'tablet:row-span-1']">

    <div 
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">

    </div>


      <img :src="article.url" class="rounded-[10px] h-full w-full"  alt="">
      
      <div class="
      absolute 
      h-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0
      ">
        <div>

        <div class="flex gap-x-1 items-center">

          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/60
            font-bold
            ">
              <span class="mt-auto align-top">
                {{article.date}}
              </span>
            </div>
          </div>

        </div>

        <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          pb-[1px]
          line-clamp-2
          "
          lang="my">
          {{ article.title }}
        </h2>

        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

    <!-- <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:row-span-1
    tablet:w-auto
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow
    "
    @click="navigate('Activities')">

    <div 
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">

    </div>


      <img src="../assets/thai02.jpg" class="rounded-[10px] h-full w-full"  alt="">
    
      <div class="
      absolute 
      h-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0
      ">
        <div>

        <div class="flex gap-x-1 items-center">

          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/60
            font-bold
            ">
              <span class="mt-auto align-top">
                20 May 2023
              </span>
            </div>
          </div>

        </div>

        <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          pb-[1px]
          line-clamp-2
          "
          lang="my">
          ထိုင်းနိုင်ငံကိုရောက်ရှိနေသည့် မြန်မာရွှေ့ပြောင်းအလုပ်သမားများလုပ်ငန်းခွင်အတွင်း ခွဲခြားဆက်ဆံခံရမှု နှင့် မတရားခေါင်းပုံဖြတ်ခြင်းများစွာနဲ့ ရင်ဆိုင်နေရ
        </h2>

        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

    <div class=" 
    relative
    flex-none
    w-[267px]
    h-[202px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:row-span-2
    tablet:w-auto
    tablet:h-[412px]
    rounded-[10px]
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow
    "
    @click="navigate('Activities')">

    <div 
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">
    </div>

      <img src="../assets/amava_aperal.jpg" class="rounded-[10px] h-full w-full"  alt="">
      <div class="
      absolute 
      w-full
      px-2
      pb-2 
      bottom-0 
      flex 
      items-end 
      left-0
    rounded-[10px]
      ">
        <div class="w-full">

          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/60
            font-bold
            ">
              <span class="mt-auto align-top">
                4 May 2023
              </span>
            </div>

          </div>

          <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          line-clamp-2" lang="my">
          ပုသိမ် Amava Apparel အထည်ချုပ်စက်ရုံတွင်အလုပ်သမားများ စုပေါင်းတောင်းဆိုမှုဖြစ်ပွား
        </h2>

        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

    <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:row-span-2
    tablet:w-auto
    tablet:h-[412px]
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow
    "
    @click="navigate('Activities')">
      <img src="../assets/junta_business.jpg" class="rounded-[10px] h-full w-full"  alt="">
      <div 
      class="
      w-full 
      h-full 
      absolute 
      top-0
      rounded-[10px] 
      bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">

      </div>

      <div class="
      absolute 
      w-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0

      ">
        <div class="w-full">

          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/60
            font-bold
            ">

              <span class="mt-auto align-top">
                5 February 2023
              </span>

            </div>

            </div>

          <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          pb-[1px]
          fa-font
          line-clamp-2">
          စစ်တပ်စီးပွား ဒိုငြင်းဆန် တော်လှန်သင်္ကြန် ပြည်သူ့အသံ 
        </h2>



        </div>
      </div>
      

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

    <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:w-auto
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow"
    @click="navigate('Activities')">

    <div 
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">

    </div>


      <img src="../assets/uniqlo.jpg" class="rounded-[10px] h-full w-full"  alt="">
      
      <div class="
      absolute 
      h-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0
      ">
        <div>

          <div class="flex gap-x-1 items-center">

            <div class="flex gap-x-1 items-center">

              <div 
              class="text-x-sm 
              tablet:text-sm 
              laptop:text-xx-sm 
              text-white/60
              font-bold
              ">
                <span class="mt-auto align-top">
                  30 March 2023
                </span>
              </div>
            </div>

          </div>

          <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          pb-[1px]
          line-clamp-2
          "
          lang="my">
          နာမည်ကျော် Uniqlo အမှတ်တံဆိပ် အထည်ချုပ်လုပ်ငန်း မြန်မာနိုင်ငံမှထွက်ခွာ
        </h2>



        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>

    <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:w-auto
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow"
    @click="navigate('Activities')">
      <img src="../assets/hell_factory.jpg" class="rounded-[10px] h-full w-full"  alt="">
      
      <div 
    class="
    w-full 
    h-full 
    absolute 
    top-0
    rounded-[10px] 
    bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">

    </div>


      <div class="
      absolute 
      h-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0
      ">

      <div>

        <div class="flex gap-x-1 items-center">

          <div 
          class="text-x-sm 
          tablet:text-sm 
          laptop:text-xx-sm 
          text-white/60
          font-bold
          ">
            <span class="mt-auto align-top">
              14 March 2022
            </span>
          </div>
        </div>
        <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          fa-font
          line-clamp-2
          pb-[1px]
          ">
          Hell factory where the employer hires thugs as daily laborers and beats the workers intentionally and dismiss them
        </h2>
        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div>    

    <div class=" 
    relative  
    w-[267px]
    h-[202px]
    flex-none 
    rounded-[10px] 
    shadow-drop-sha
    group
    tablet:col-span-1
    tablet:w-auto
    laptop:hover:shadow-drop-sha-hover
    laptop:transition-shadow"
    @click="navigate('Activities')">
      <img src="../assets/fitex.jpg" class="rounded-[10px] h-full w-full"  alt="">
      
      <div 
      class="
      w-full 
      h-full 
      absolute 
      top-0
      rounded-[10px] 
      bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 from-0% to-black/0">

      </div>

      <div class="
      absolute 
      w-full
      px-2
      pb-2 
      bottom-0 
      rounded-[10px] 
      flex 
      items-end 
      left-0

      ">
        <div class="w-full">
          <div class="flex gap-x-1 items-center">

            <div 
            class="text-x-sm 
            tablet:text-sm 
            laptop:text-xx-sm 
            text-white/60
            font-bold
            ">

              <span class="mt-auto align-top">
                21 May 2023
              </span>

            </div>

            </div>
          <h2 
          class="text-sm 
          tablet:text-sm 
          text-white 
          laptop:text-primary
          mb-1
          pb-[1px]
          fa-font
          line-clamp-2">
          Fitex (Myanmar), the garment factory, dismissed more than 400 workers
        </h2>

        </div>
      </div>

      <div class="absolute 
      top-4 
      right-0 
      text-sm
      tablet:text-primary 
      rounded-l-[16.326px] 
      font-medium 
      text-secondary-yel-02 
      bg-primary-red-01 
      px-2 
      py-1
      group-active:bg-secondary-yel-01 group-active:text-primary-red-01">
        Read more
      </div>

    </div> -->

  </div>



  <div 
  class="mt-12 
  inline-block 
  py-1 px-2 
  tablet:py-2 
  tablet:px-4 
  bg-primary-red-01 
  laptop:mt-16">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
      <!-- <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg> -->

      <div class="w-4 h-4 tablet:w-8 tablet:h-8">
        <img src="../assets/logo_optimized.svg" class="w-full h-full rounded-full" alt="">  
      </div>
    
    <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap">Statements</h3>
    </div>
  </div>

    <div 
    class="flex 
    flex-nowrap 
    justify-center 
    overflow-visible 
    mx-4 
    mt-12
    tablet:mx-8
    tablet:gap-x-4
    lg-table:flex-wrap
    lg-table:gap-y-4
    lg-table:w-[840px]
    lg-table:mx-auto 
    laptop:w-[1200px]
    laptop:justify-evenly
    laptop:mx-auto
    laptop:overflow-visible
    lg-laptop:w-[1020px]
    lg-laptop:mx-auto
    ">
        <div v-for="(statement, i) in statementStore.statement" :key="i" class="flex-none">
          <div 
          class="
          border-l
          border-primary-red-02
          pl-4
          flex justify-between items-center">

            <span class="text-sm 
          text-primary-red-02 
            font-bold">
              Date - {{ statement.date }}
            </span>
            
            <div v-if="userStore.token" @click="deleteStatement(statement.id)" class="w-4 h-4 group">
              <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-black/40 group-hover:fill-black/60 group-active:fill-black/40" d="M6.08929 1.6125L5.41071 2.5H10.5893L9.91071 1.6125C9.85714 1.54375 9.76786 1.5 9.67143 1.5H6.325C6.22857 1.5 6.13929 1.54062 6.08571 1.6125H6.08929ZM11.3393 0.78125L12.65 2.5H13.1429H14.8571H15.1429C15.6179 2.5 16 2.83437 16 3.25C16 3.66563 15.6179 4 15.1429 4H14.8571V13.5C14.8571 14.8813 13.5786 16 12 16H4C2.42143 16 1.14286 14.8813 1.14286 13.5V4H0.857143C0.382143 4 0 3.66563 0 3.25C0 2.83437 0.382143 2.5 0.857143 2.5H1.14286H2.85714H3.35L4.66071 0.778125C5.03214 0.29375 5.65714 0 6.325 0H9.67143C10.3393 0 10.9643 0.29375 11.3357 0.778125L11.3393 0.78125ZM2.85714 4V13.5C2.85714 14.0531 3.36786 14.5 4 14.5H12C12.6321 14.5 13.1429 14.0531 13.1429 13.5V4H2.85714ZM5.71429 6V12.5C5.71429 12.775 5.45714 13 5.14286 13C4.82857 13 4.57143 12.775 4.57143 12.5V6C4.57143 5.725 4.82857 5.5 5.14286 5.5C5.45714 5.5 5.71429 5.725 5.71429 6ZM8.57143 6V12.5C8.57143 12.775 8.31429 13 8 13C7.68571 13 7.42857 12.775 7.42857 12.5V6C7.42857 5.725 7.68571 5.5 8 5.5C8.31429 5.5 8.57143 5.725 8.57143 6ZM11.4286 6V12.5C11.4286 12.775 11.1714 13 10.8571 13C10.5429 13 10.2857 12.775 10.2857 12.5V6C10.2857 5.725 10.5429 5.5 10.8571 5.5C11.1714 5.5 11.4286 5.725 11.4286 6Z"/>
              </svg>
            </div>
          </div>

          <div class="w-[343px] h-[433px] rounded-[10px] shadow-drop-sha mt-6">
            


            <img :src="statement.img_url" class="w-full h-full rounded-[10px]" alt="">
          </div>
        </div>

    </div>


  <div 
  class="flex 
  gap-x-4 
  justify-end
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto
  mt-6
  mx-4
  tablet:mx-8
  lg-table:w-[840px]
  lg-table:mx-auto
  laptop:w-[1200px]">
    <button 
    @click="statementStore.prePage" 
    :disabled="!statementStore.preUrl" 
    class="px-3 
    py-1 
    bg-white 
    rounded-[16px]
    border
    border-black/40 
    active:bg-black/20">
      <span>
        Previous
      </span>
    </button>

    <button 
    @click="statementStore.nextPage" 
    :disabled="!statementStore.nextUrl" 
    class="px-3 
    py-1 
    bg-white 
    rounded-[16px] 
    border 
    border-black/40 
    active:bg-black/20">
      <span>
        Next
      </span>
    </button>

    <button
    v-if="userStore.token"
    @click="open = true"  
    class="px-3 
    py-1 
    bg-white 
    rounded-[16px] 
    border 
    border-black/40 
    active:bg-black/20">
      <span>
        Add statement
      </span>
    </button>
  </div>


              <Teleport to="body">
                <transition name="modalState">
                    <div v-if="open" class="modalState-mask">
                        <div class="modalState-container relative rounded-[10px] overflow-visible">
                            <button @click="closeModel" class="absolute left-[-16px] top-[-16px] group" type="button">
                              <div class="w-8 h-8">
                                <svg class="w-full h-full" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.2376 11.2624L8.5008 9ZM10.7632 6.7376L8.5008 9ZM8.5008 9L6.2376 6.7376ZM8.5008 9L10.7632 11.2624ZM8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="fill-white/80 group-hover:fill-white/40 group-active:fill-white/60"/>
                                  <path d="M6.2376 11.2624L8.5008 9M8.5008 9L10.7632 6.7376M8.5008 9L6.2376 6.7376M8.5008 9L10.7632 11.2624M8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="stroke-black/60" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              </div>
                            </button>

                            <div class="flex items-center gap-x-2 overflow-visible">
                              <!-- <ImageInput :coverStr="coverStr" class="flex-none w-[300px] aspect-[0.8]" @updateImg="updateStatementImg"></ImageInput> -->
                              
                              <div class="flex-none flex items-center justify-center w-[150px] h-[250px] tablet:w-[250px] tablet:h-[350px]">
                                <img v-if="currentThumb" :src="currentThumb" class="w-full h-full" alt="">

                                <h3 v-if="!currentThumb" class="text-center">Add statement Image.</h3>

                              </div>

                              <div 
                              class="flex flex-col 
                              gap-y-2 
                              h-[375px] 
                              overflow-x-visible overflow-y-scroll 
                              scroll-container">

                                <div v-for="(thumb, index) in thumbnails" :key="index" 
                                class="w-[100px] 
                                aspect-[0.8] 
                                cursor-pointer
                                border
                                relative
                                overflow-visible
                                "
                                :class="[id === index ? 'border-black/40' : 'border-black/20']"
                                @click="getCurrentThumbnail(index)">
                        
                                <div @click.stop="removeStateThumb(index)" class="w-8 h-8 group absolute top-0 right-0">
                                    <svg class="w-full h-full" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="fill-black/40 group-hover:fill-black/20 group-active:fill-black/60" d="M6.2376 11.2624L8.5008 9ZM10.7632 6.7376L8.5008 9ZM8.5008 9L6.2376 6.7376ZM8.5008 9L10.7632 11.2624ZM8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z"/>
                                        <path d="M6.2376 11.2624L8.5008 9M8.5008 9L10.7632 6.7376M8.5008 9L6.2376 6.7376M8.5008 9L10.7632 11.2624M8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                                  <img :src="thumb" class="w-full h-full" alt="">

                                </div>
                                <div v-if="!currentThumb"
                                class="w-[100px]
                                
                                aspect-[0.8]
                                bg-black/20"></div>
                                

                              </div>
                              <input @input="onSelectFile" ref="statementInput" type="file" id="thumbnails" class="hidden">
                            </div>
                            <div class="flex items-center" :class="[error ? 'justify-between' : 'justify-end']">
                              <span class="text-sm text-red-400 font-semibold">{{error}}</span>
                              <div class="flex gap-x-2">
                                <button 
                                class="modalState-footer 
                                modal-default-button 
                                text-black/80 
                                bg-secondary-yel-02 
                                mt-4 px-4 py-2 
                                rounded-[20px] 
                                font-semibold" 
                                @click="chooseImage">
                                Add
                              </button>

                                <button 
                                class="modalState-footer 
                                modal-default-button 
                                text-black/80 
                                bg-secondary-yel-02 
                                mt-4 px-4 py-2 
                                rounded-[20px] 
                                font-semibold" 
                                @click="proseece">
                                Next
                              </button>
                              </div>

                            </div>

                        </div>

                    </div>                
                </transition>
              </Teleport>

              <Teleport to="body">

                <transition name="modalDate">
                    <div v-if="openDate" class="modalDate-mask">
                        <div class="modalDate-container rounded-[10px] relative">
                            <button @click="openDate = false" class="absolute left-[-16px] top-[-16px] group" type="button">
                              <div class="w-8 h-8">
                                <svg class="w-full h-full" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.2376 11.2624L8.5008 9ZM10.7632 6.7376L8.5008 9ZM8.5008 9L6.2376 6.7376ZM8.5008 9L10.7632 11.2624ZM8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="fill-white/80 group-hover:fill-white/40 group-active:fill-white/60"/>
                                  <path d="M6.2376 11.2624L8.5008 9M8.5008 9L10.7632 6.7376M8.5008 9L6.2376 6.7376M8.5008 9L10.7632 11.2624M8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="stroke-black/60" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              </div>
                            </button>

                            <div class="flex flex-col gap-y-2">
                              <label for="date">Announce Date:</label>
                              <input type="date" name="date" v-model="date" class="focus:outline-none border pl-2 py-1 rounded-[10px] text-primary text-black/80 focus:border-black/40">
                            </div>
                  
                            <span v-if="error && !date" class="text-sm text-red-300">{{error}}</span>
                            <button class="modalDate-footer modal-default-button text-black/80 bg-secondary-yel-02 mt-4 px-4 py-2 rounded-[20px] font-semibold" @click="sendState">Upload</button>
                        </div>

                    </div>                
                </transition>

              </Teleport>

             


  <div 
  class="relative 
  mt-8 
  tablet:mx-8 
  lg-table:rounded-[10px] 
  lg-table:flex 
  lg-table:justify-between 
  lg-table:gap-x-4 
  lg-table:w-[840px] 
  lg-table:mx-auto
  laptop:w-[1200px]
  laptop:mx-auto
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto">
    <div class="w-full h-full z-10 bg-gradient-to-tr from-black/80 from-0% to-black/0 lg-table:hidden lg-table:rounded-[10px] absolute top-0">
    
    </div>

    <div 
    class="absolute 
    top-[50%] 
    z-50 
    w-3/5 
    -translate-y-[50%] 
    left-4 
    tablet:w-2/5 
    lg-table:relative 
    lg-table:left-0 
    lg-table:translate-y-0
    lg-table:bg-white
    lg-table:border-l-[3px]
    lg-table:border-primary-red-02
    lg-table:p-4
    lg-table:flex
    lg-table:items-center
    lg-table:justify-center">
      <p 
      class="text-white 
      text-primary
      font-semibold 
      leading-[30px] 
      tablet:text-xlg 
      lg-table:text-primary-red-01
      lg-table:leading-[40px]
      fa-font
      ">
        <span class="lg-table:text-xlg">"</span>တို အလုပ်သမားတွေ သွေးရဲပြခဲ့ပြီး အလုပ်သမားထုနဲ့ စတဲ့ တော်လှန်ရေးကို အလုပ်သမားထုနဲ့ အတူ အောင်ပွဲရသည်အထိ ဆက်လက်တိုက်ပွဲဝင်သွားမယ်။<span class="lg-table:text-xlg">"</span>
      </p>
    </div>

    <div class="aspect-[1.5] mx-auto lg-table:rounded-[10px] z-0 lg-table:w-2/3 lg-table:mx-0">
      <img src="../assets/resize.jpg" class="w-full h-full lg-table:rounded-[10px]" alt="">
    </div>


  </div>

  <div class="mt-12 inline-block p-1 tablet:py-2 tablet:px-4 bg-primary-red-01">
      <div class="flex items-center gap-x-1 tablet:gap-x-2">
        <!-- <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
        </svg> -->

        <div class="w-4 h-4 tablet:w-8 tablet:h-8">
          <img src="../assets/logo_optimized.svg" class="w-full h-full rounded-full" alt="">  
        </div>
        
      <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold">OUR VISION</h3>
    </div>
  </div>

  <div 
  class="mt-12 
  relative 
  bg-secondary-yel-01 
  lg-table:w-[840px] 
  lg-table:mx-auto 
  laptop:w-[1200px] 
  laptop:mx-auto 
  lg-laptop:w-[1020px] 
  lg-laptop:mx-auto">
    <ul class="list-disc px-4 py-4 font-medium tablet:py-8 tablet:px-8 laptop:px-16 text-sm leading-[1.2rem] tablet:text-primary tablet:leading-[1.5rem] relative text-primary-red-01">
      <div id="fist" class="float-right w-1/2 laptop:w-auto">
        <svg class="laptop:w-[15vw]" viewBox="0 0 201 204" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M119.219 47.173L119.546 46.6548L118.972 46.4386L96.7899 38.0679L116.196 18.3003L139.022 31.7198L110.935 60.3148L119.219 47.173ZM166.669 117.387L167.004 117.579L167.274 117.303L172.178 112.294L166.788 130.957L147.182 151.989L147.048 152.133V152.33V203.485H44.3413L56.8841 141.228L56.9322 140.989L56.7736 140.804L0.66961 75.3214L45.1461 27.331L106.125 50.3433L97.1031 64.6451L77.1821 66.0567L55.3001 57.7136L54.4846 57.4027L54.6289 58.2635L56.8603 71.5753L56.9096 71.8692L57.1915 71.9657L79.329 79.5452L111.413 134.849L111.575 135.13L111.897 135.096L121.113 134.125L121.881 134.044L121.493 133.376L86.8168 73.6243L86.7227 73.4621L86.5451 73.4018L86.3489 73.3352L89.2583 73.1287L166.669 117.387ZM165.127 106.668L142.105 93.1194L176.433 58.1536L199.455 71.6856L165.127 106.668ZM109.828 74.2648L146.376 37.0161L170.591 51.2347L134.042 88.4834L109.828 74.2648ZM58.6714 23.6769L81.2908 0.628946L106.421 15.3997L87.5891 34.5872L58.6714 23.6769Z" fill="#5D5D72" stroke="#5D5D72"/>
        </svg>
      </div>
      <li>
        FGWM shall facilitate Establishment of labor unions throughout the 
        Country regardless of race, gender, religion and line of work.
      </li>

      <li>
        FWGM shall pursue the viability of fellow Union members.
      </li>

      <li>
        FGWM shall work toward better quality of life for workers, ensuring
      fair and adequate living wage as well as social compensation.
      </li>

      <li>
        FGWM shall be committed to ensuring that all workplace are 
        safe, non-discriminatory, free of sexual harassment and non-violent.
      </li>
      <li>
        FGWM shall continuously work to protect and promote the workers &#39; 
        rights and their well-being.
      </li>

      <li>
        The voices of worker communities must be involved at making labor 
        related legislation and government policies
      </li>
      <li>
        Labor exploitation must come to an end.
      </li>
      <li>
        The true value and indispensability of blue-collar workers class must 
        be bought to light and recognized by the society.
      </li>
      <li>
        Corporate numerous labor advocates across the globe.
      </li>
    </ul>
  </div>

  <div class="mt-12 
  pl-4 
  tablet:mx-8 
  flex 
  flex-nowrap 
  tablet:flex-wrap 
  tablet:justify-center 
  items-center 
  overflow-x-scroll 
  scroll-container 
  gap-x-4
  tablet:gap-4
  lg-table:w-[840px]
  lg-table:mx-auto
  laptop:w-[1200px]
  laptop:mx-auto
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto">
    <div class="flex-row flex-none">

      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm font-medium">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm font-medium">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm font-medium">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm font-medium">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm font-medium">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>

    <div class="flex-row flex-none">
      <svg class="m-auto w-16 h-16" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
      <h3 class="text-sm">MEMBER LOGO</h3>
    </div>


    
  </div>

  <div class="mt-12
  mb-12 
  mx-4 
  tablet:mx-8 
  lg-table:w-[840px] 
  lg-table:mx-auto 
  laptop:w-auto 
  laptop:mx-[200px] 
  lg-laptop:w-[1020px] 
  lg-laptop:mx-auto">

  <div 
  class="flex 
  justify-between 
  tablet:justify-center 
  items-center 
  rounded-[10px] 
  ">
    <p class="
    text-sm 
    leading-[24px] 
    font-medium 
    mb-4 
    text-primary-red-01/80 
    mx-auto 
    text-left
    border-l-[3px]
    border-primary-red-02
    pl-4
    flex-1
    tablet:flex-none
    laptop:text-primary">
      We WILL KEEP YOU POSTED!
    </p>
    <div class="form mx-auto flex-1 tablet:w-1/4 max-w-[18.75rem] laptop:w-auto">

      <form @submit.prevent="subscribed">

        <input type="mail" name="email" placeholder="Email" class="text-sm 
        text-black
        border 
        border-black/60 
        rounded-[14.6px] 
        px-2 
        py-1
        mb-4 
        w-full 
        h-full
        placeholder-black/40
        placeholder:font-bold
        laptop:text-primary">

        <button class="
        text-sm
        text-white
        bg-fist
        font-bold
        w-full
        py-1
        mb-4
        rounded-[9.78335rem]
        active:bg-fist/80
        laptop:text-primary" type="submit">Subscribe</button>

      </form>
      
    </div>
  </div>
</div>
<FooterComponentVue />

</template>

<script setup>
import { useRouter } from 'vue-router';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useStatementStore } from '../sotre/statementStore';
import { useBreakPoints } from '../composible/useBreakPoints.js';
import CoverComponentVue from './CoverComponent.vue';
import FooterComponentVue from './FooterCOmponent.vue';
import { useArticleStore } from '../sotre/articleStore';
import { useUserStore } from '../sotre/userStore';

const statementStore = useStatementStore();
const articleStore = useArticleStore();
const userStore = useUserStore();
const protestImages = ref([]);
const activitiesImages = ref([]);
const articlesImages = ref([]);
const statementImg = ref([]);
const date = ref();
const open = ref(false);
const openDate = ref(false);
const router = useRouter();
const page = ref();
const cur_page = ref(1);
const error = ref("");
const statementInput = ref(null);
const thumbnails = ref([]);
const currentThumb= ref('');
const id = ref('');

function navigate(link, id, type) {
  router.push({
    name : link,
    params : {
      id : id,
      type : type
    }
  });

  articleStore.chooseArticle(id, type);
}

const {type} = useBreakPoints();

 
onMounted(async () => {

  if (type.value === 'phone') {
    page.value = 1;
  } else if (type.value === 'tablet') {
    page.value = 2;
  } else if (type.value === 'lg-tablet') {
    page.value = 3;
  } else if (type.value === 'desktop') {
    page.value = 6;
  } else {
    page.value = 6;
  }

  
  statementStore.getStatements(page.value, cur_page.value);
  



})

onBeforeMount(async () => {

  if(!articleStore.protest.length) {
    await articleStore.fetchProtest('protest');
  }

  if(!articleStore.camgpains.length) {
    await articleStore.fetchProtest('activities');
  }

  if(!articleStore.articles.length) {
    await articleStore.fetchProtest('articles');
  }
  
  const portestimagesLoadPromises =  articleStore.protest.map(protest => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const isProtrait = (img.width / img.height) < 1;
        protestImages.value.push({
          url : img.src,
          isProtrait : isProtrait,
          title : protest.title,
          date : protest.date,
          id : protest.id
        });
        resolve();
      };
      img.src = protest.imgURL;
    });
  });

  await Promise.all(portestimagesLoadPromises);

  const activitiesimagesLoadPromises =  articleStore.camgpains.map(camg => {
    
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const isProtrait = (img.width / img.height) < 1;
        activitiesImages.value.push({
          url : img.src,
          isProtrait : isProtrait,
          title : camg.title,
          date : camg.date,
          id : camg.id
        });
        resolve();
      };
      img.src = camg.imgURL;
    });
  });

  await Promise.all(activitiesimagesLoadPromises);


  const articlesimagesLoadPromises =  articleStore.articles.map(art => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const isProtrait = (img.width / img.height) < 1;
        articlesImages.value.push({
          url : img.src,
          isProtrait : isProtrait,
          title : art.title,
          date : art.date,
          id : art.id
        });
        resolve();
      };
      img.src = art.imgURL;
    });
  });

  await Promise.all(articlesimagesLoadPromises);


})

function deleteStatement(id) {
  statementStore.deleteStatement(id).then(res => {
    if (!statementStore.statement.length) {
      statementStore.getStatements(page.value);
    }
    return res;
  })
}

function closeModel() {

  open.value = false;
  openDate.value = false;
  date.value = "";
  statementImg.value = [];
  thumbnails.value = [];
  currentThumb.value = '';
  
}


function proseece() {

  if(statementImg.value) {
    open.value = false;
    openDate.value = true;
  } else {
    error.value = 'Statement image required!';
  }

}

function sendState() {
  if (date.value && statementImg.value) {
    const formData = new FormData();
    error.value = "";

    const files = statementImg.value;

    for (let i = 0; i < files.length; i++) {
      formData.append('image[]', files[i]);
    }

    formData.append('date', date.value);
    
    statementStore.sendStatement(formData).then(res => {

      statementStore.getStatements(page.value, cur_page.value);
      closeModel();
      statementImg.value = [];
      date.value = '';
      return res;
    })
  }
}

function chooseImage () {
    statementInput.value.click();
}

function removeStateThumb(index) {
  statementImg.value.splice(index, 1);
  thumbnails.value.splice(index, 1);
  currentThumb.value = thumbnails.value[index - 1] || '';
}

function getCurrentThumbnail(i) {
  if(thumbnails.value[i]) {
    currentThumb.value = thumbnails.value[i];
  } else {
    currentThumb.value = "";
  }

  id.value = i;
}

function onSelectFile() {

const input = statementInput.value;
const files = input.files;
if(files && files[0]) {
    for(let i = 0; i < files.length; i++) {
        statementImg.value.push(files[i]);
        const reader = new FileReader();
        const img = new Image();
        reader.onload = (e) => {
            img.src = e.target.result;
            img.onload = () => {
                thumbnails.value.push(img.src);
                currentThumb.value = img.src;
                id.value = thumbnails.value.length;
                
            }
        }
        reader.readAsDataURL(files[i]);
    }
}

}

</script>

<style>


#story-logo {
  clip-path: url(../assets/story-logo.svg);
  shape-outside: url(../assets/story-logo.svg);  
}

.content {
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%); 
}

#first-protest-para::before {
  content : " ";
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: -4px;
  left: -8px;
  background-image: url(../assets/start-quote.svg);
  background-position: center;
  background-repeat: no-repeat;
}

#first-protest-para::after {
  content : " ";
  width: 1rem;
  height: 1rem;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-image: url(../assets/end-quote.svg);
  background-position: center;
  background-repeat: no-repeat;
}

#fist {

clip-path: url(../assets/fist-path.svg);
shape-outside: url(../assets/fist-path.svg);

}

#sticky-nav {
  position: fixed;
  position: -webkit-sticky;
  top: 0;
  right: 0;
}

@media only screen and (min-width : 1000px) {
  #sticky-nav {
    position: fixed;
    top: 48px;
    right: 16px;
  }
}

.motteo::before {

  content : " ";
  position: absolute;
  top : -16px;
  left : -16px;
  width : 16px;
  height : 16px;
  background-image: url(../assets/open_quote.svg);
  background-repeat: no-repeat;
  background-position: center;
  z-index: 100;

}

.motteo::after {

content : " ";
position: absolute;
bottom : -8px;
right : -8px;
width : 16px;
height : 16px;
background-image: url(../assets/close_qoute.svg);
background-repeat: no-repeat;
background-position: center;
z-index: 100;

}

.modalState-mask,.modalDate-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modalState-container,
.modalDate-container {
  
  margin: auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  background-color: white;
}

.modalState-header h3,
.modalDate-header h3 {
  margin-top: 0;
  color: #42b983;
}

/* .modal-body {
  margin: 20px 0;
} */

.modalState-default-button,
.modalDate-default-button {
  float: right;
}

.modalState-enter-from,
.modalDate-enter-from {
  opacity: 0;
}

.modalState-leave-to,
.modalDate-leave-to  {
  opacity: 0;
}

.modalState-enter-from .modalState-container,
.modalState-leave-to .modalState-container,
.modalDate-enter-from .modalDate-container,
.modalDate-leave-to .modalDate-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>

