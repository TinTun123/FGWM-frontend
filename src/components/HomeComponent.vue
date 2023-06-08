<template>

      <div class="relative aspect-[4/3]  laptop:aspect-auto laptop:bg-black">
        <div id="cover-grad" class="w-full h-full absolute top-0 z-10">
        </div>

        <svg class="hidden absolute top-4 left-4 tablet:left-8 laptop:left-16 laptop:top-8 z-40" width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#F9C20F"/>
        </svg>

        <picture>
          <source media="(min-width: 905px)" srcset="../assets/bg_cover.jpg">
          <source media="(min-width: 600px)" srcset="../assets/bg_cover_800w.jpg">
          <img class="w-full laptop:w-auto laptop:mx-auto z-0" src="../assets/bg_cover_480.jpg" alt="">
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
        <router-link to="/Activities">
        <button class="
      mx-full
      text-sm
      tablet:text-primary
      font-semibold 
      text-secondary-yel-02
      border
      rounded-[11.95rem] 
      px-2
      py-1 
      border-secondary-yel-02/80
      active:text-white
      active:border-primary-red-01/60
      active:bg-fist/60
      ">

      Union Activities
    </button>
  </router-link>
      </div>
    </div>
      
    </div>
  </div>

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


  <!-- <div 
  class="mt-12 
  inline-block 
  py-1 
  px-2 
  tablet:y-2 
  tablet:px-4 
  bg-primary-red-01 
  p-1 
  laptop:mt-16
  laptop:w-[1200px]
  laptop:mx-auto
  laptop:block
  laptop:bg-white
  laptop:border-b-[3px]
  laptop:border-primary-red-01
">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
    
      <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap laptop:text-primary-red-01">OUR STORY</h3>
    </div>
  </div> -->


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
    bottom-4
    flex 
    items-center
    py-4
    laptop:rounded-l-[10px]
    laptop:pl-4
    ">
      <div 
      class="xxs:w-2/3 
      ml-4 
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

      <img src="../assets/18_5_23_p_267w.jpg" class="rounded-[10px] h-full w-full "  alt="">
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
                18 May 2013
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
          ပြည်သူရှိသရွေ့ အမေစုရှိတယ်
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
      <img src="../assets/icu.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
            text-white/80
            font-bold
            ">
              <span class="mt-auto align-top">
                17 February 2020
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
          မြန်မာနိုင်ငံ အထွေထွေအလုပ်သမားသမဂ္ဂများအဖွဲချုပ် FGWM အဖွဲရဲ့ အပြည်ပြည်ဆိုင်ရာ အလုပ်သမားရေးရာ အဖွဲ ILO ရုံးရှေ့မှ ဗဟိုဘဏ် ရှေ့ သိုချီတက် ဆန္ဒဖော်ထုတ် မှု အားတွေ့ရစဥ်။
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
      <img src="../assets/february_5.jpg" class="rounded-[10px] h-full w-full "  alt="">
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
            text-white/80
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
          ပြည်သူ့နွေဦးတော်လှန်ရေး ၂ နှစ်ပြည့်တွင် မြန်မာနိုင်ငံအထွေထွေအလုပ်သမား သမဂ္ဂများအဖွဲချုပ်၊ Federation of General Workers, Myanmar အဖွဲဝင်အလုပ်သမားပြည်သူများ၏ စစ်အာဏာရှင်အမြစ်ဖြတ်ရေးလှုပ်ရှားမှု
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
      <img src="../assets/pro_02.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
            text-white/80
            font-bold
            ">

              <span class="mt-auto align-top">
                7 July 2022
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
          မင်္ဂလာဒုံ စက်မှုဇုန် JW (ADK) အထည်ချုပ်စက်ရုံအလုပ်သမားများ ယနေ့စုပေါင်းတောင်းဆိုချက် ၁၀ ချက်
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
      <img src="../assets/pro_02.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
            text-white/80
            font-bold
            ">

              <span class="mt-auto align-top">
                7 July 2022
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
          မင်္ဂလာဒုံ စက်မှုဇုန် JW (ADK) အထည်ချုပ်စက်ရုံအလုပ်သမားများ ယနေ့စုပေါင်းတောင်းဆိုချက် ၁၀ ချက်
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


      <img src="../assets/jun03_campagin.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
                3 Jun 2023
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
          ILO ညီလာခံတွင်  NUG ကိုယ်စားလှယ်အဖွဲကို လက်ခံပေးဖို  မြန်မာ့ဒီမိုကရေစီ နှင့် အလုပ်သမားအခွင့်အရေး (အိုင်အယ်အို)အသိအမှတ်ပြုပေး စာသားများကိုင်ဆောင်ပြီး မြန်မာနိုင်ငံအထွေထွေအလုပ်သမား သမဂ္ဂများအဖွဲချုပ်  သမဂ္ဂခေါင်းဆောင်များမှ   အွန်လိုင်း ကမ်ပိန်းပြုလုပ်ပြီးတောင်းဆိုနေကြသည်
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


      <img src="../assets/campagin03.jpeg" class="rounded-[10px] h-full w-full "  alt="">
      
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
                5 August 2023
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
        အမျိုးသမီးအလုပ်သမားထုသည်လည်း လူသားစစ်စစ်ဧကန်ဖြစ်သည်
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
    tablet:w-auto
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

      <img src="../assets/protest_06.jpg" class="rounded-[10px] h-full w-full "  alt="">
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
                22 August 2022
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
          ဘယ်(/)မျဥ်းစောင်းထိထိ၊ ငါတိုနဲ့ငြိတာပဲ
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


      <img src="../assets/woman_day.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
                  18 May 2013
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
          ၁၃၃ ကြိမ်မြောက် ကမ္ဘာ့အလုပ်သမားနေ့ (မေးဒေး)နေ့မှာ ‘ဖူလုံသောလုပ်ခလစာ၊ ကောင်းမွန်သော လုပ်ငန်းခွင်နှင့် ဖက်ဒရယ်ဒီမိုကရေစီ ပြည်ထောင်စုဆီသို’ ဆိုတဲ့ ဆောင်ပုဒ်ကို ဆွဲကိုင်ရင်း မြန်မာပြည်ဒီမိုကရေစီရေးမှာ ကျရာအခန်းကဏ္ဍကနေပါဝင်နေတဲ့ မြန်မာနိုင်ငံအထွေထွေအလုပ်သမားသမဂ္ဂများ အဖွဲချုပ် FGWM သည် မြေပြင်တွင် မေဒေးနေ့ ဂုဏ်ပြုသည့် အခမ်းအနား ပြုလုပ်ခဲ့ပါသည်။
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
      <img src="../assets/campagin02.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
          text-white/80
          font-bold
          ">
            <span class="mt-auto align-top">
              7 July 2022
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
          နိုင်ငံရေးအကျဉ်းသားများအတွက် တရားမျှတမှုနှင့် ထောင်တွင်း၌ တရားမဲ့ သတ်ဖြတ်မှုများ ရပ်တန့်နိုင်ရေးတိုအတွက်နိုင်ငံတကာကို တောင်းဆိုရန် ဓာတ်ပုံကမ်ပိန်း တစ်ခုကို GMSR- Global Myanmar Spring Revolution နှင့် General Strike Coordination Body- GSCBတို ပူးပေါင်း၍ စီစဉ်သွားမည် ဖြစ်ပါသဖြင့် ပူးပေါင်းပါဝင်နိုင်မည်ဖြစ်သည်။
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
      <img src="../assets/us_forigen_affire.jpg" class="rounded-[10px] h-full w-full "  alt="">
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
            text-white/80
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
          Women’s  Committee -FGWM  နှင့် Burmese Women’s Union-BWU တို  ပူးပေါင်း၍ကျင်းပပြုလုပ်ခဲ့သော စိတ်ကျန်းမာရေးနှင့် စိတ်ပိုင်းဆိုင်ရာလူမှုရေးပံ့ပိုးမှ
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
      <img src="../assets/ILO_refuse_campagin01.jpg" class="rounded-[10px] h-full w-full "  alt="">
      
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
            text-white/80
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
          The military council is not allowed to 
          attend the ILO conference at all
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


      <img src="../assets/cdm-teacher.jpg" class="rounded-[10px] h-full w-full"  alt="">
      
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
                24 May 2023
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
          အမျိုးသမီးကော်မတီဝင်နိုင်ငံဝန်ထမ်း CDM ဆရာမများ၏ကြုံတွေ့နေရသောအခက်အခဲနှင့်ရင်တွင်းစကားသံ
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

    </div>

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
          class="text-sm 
          text-primary-red-02 
          font-bold
          border-l
          border-primary-red-02
          pl-4">
            Date - {{ statement.date }}
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
  laptop:w-auto
  laptop:mx-[200px]
  lg-laptop:w-[1020px]
  lg-laptop:mx-auto
  mt-6
  mx-4
  tablet:mx-8
  lg-table:w-[840px]
  lg-table:mx-auto ">
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
  </div>



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
      <ul class="laptop:space-y-1">
        <li> <a href="#" 
          class="text-sm 
          text-white 
          border-l-[2px] 
          border-white/80 
          pl-2
          laptop:text-primary">OUR STORY</a> </li>
        <li><a href="#" class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">BLOG</a></li>
        <li><a href="#" class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">UNION ACTIVITIES</a></li>
        <li><a href="#" class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">ADVOCATES</a></li>
        <li><a href="#" class="laptop:text-primary text-sm text-white/80 border-l-[2px] border-white/80 pl-2 laptop:hover:text-white">WOMEN COMMITEE</a></li>
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




</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStatementStore } from '../sotre/statementStore';
import { useBreakPoints } from '../composible/useBreakPoints.js';



const statementStore = useStatementStore();
const router = useRouter();
const page = ref();
const cur_page = ref(1);
function navigate(link) {
  router.push({
    name : link
  });
  // console.log(link);
}

 const {type} = useBreakPoints();
 
onMounted(() => {

  if (type.value === 'phone') {
    page.value = 1;
  } else if (type.value === 'tablet') {
    page.value = 2;
  } else if (type.value === 'lg-tablet') {
    page.value = 3;
  } else if (type.value === 'desktop') {
    page.value = 4;
  } else {
    page.value = 4;
  }
  statementStore.getStatements(page.value, cur_page.value);

  
})
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
  bottom: -8px;
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

</style>

