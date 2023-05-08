<template>

      <div class="relative h-[40vh] laptop:h-[100vh]">
        <div id="cover-grad" class="w-full h-full absolute top-0 z-10">
        </div>

        <svg class="absolute top-4 left-4 tablet:left-8 laptop:left-16 laptop:top-8 z-40" width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#F9C20F"/>
        </svg>

        <picture>
          <source media="(min-width: 1000px)" srcset="../assets/myanmar-labour-protest.png">
          <source media="(min-width: 600px)" srcset="../assets/myanmar-labour-protest-800w.jpg">
          <img class="w-full h-full brightness-[0.7] z-0" src="../assets/myanmar-labour-protest-480w.jpg" alt="">
        </picture>
    <div  class="
    bg-primary-red-01/60 
    p-4 
    w-3/5 
    tablet:p-4 
    min-w-[157px] 
    absolute 
    left-0 
    bottom-8
    laptop:top-[50%]
    laptop:bottom-[50%]
    laptop:left-[50%]
    laptop:right-[50%]
    laptop:max-w-[455px]
    laptop:translate-x-[-50%]
    laptop:translate-y-[-50%]
    z-50
    laptop:h-1/3
    laptop:w-1/3
    flex items-center
    ">

    <div class="">

      <h3 class="
      text-primary 
      tablet:text-lg 
      laptop:text-xlg 
      text-secondary-yel-02 
      text-center 
      leading-[1.5625rem] 
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
      border-secondary-yel-02
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

  <div id="sticky-nav" class="mt-12 mx-4 tablet:mx-8 flex gap-x-4 justify-end z-50 laptop:mt-0">

    <div class="bg-secondary-yel-02 p-1 px-2 rounded-[0.86875rem] shadow-drop-sha active:bg-secondary-yel-02/80">
      <router-link to="/Advocates">
        <h3 class="text-sm tablet:text-primary text-primary-red-01 font-semibold">Advocates</h3>
      </router-link>
    </div>

    <div class="bg-secondary-yel-02 p-1 px-2 rounded-[0.86875rem] shadow-drop-sha active:bg-secondary-yel-02/80">
      <router-link to="/Blog">
        <h3 class="text-sm tablet:text-primary text-primary-red-01 font-semibold">Blogs</h3>
      </router-link>
      
    </div>

    <div class="bg-secondary-yel-02 p-1 px-2 rounded-[0.86875rem] shadow-drop-sha active:bg-secondary-yel-02/80">
      <router-link to="/Story">
        <h3 class="text-sm tablet:text-primary text-primary-red-01 font-semibold">Our Story</h3>
      </router-link>
      
    </div>

  </div>

  <div class="mt-12 inline-block py-1 px-2 tablet:y-2 tablet:px-4 bg-primary-red-01 p-1 laptop:mt-16">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
      <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#F9C20F"/>
      </svg>
    
    <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap">OUR STORY</h3>
  </div>
  </div>

  <div class="mr-auto mt-12 laptop:px-16 laptop:mt-16">
    <div class="px-4 py-4 tablet:py-8 tablet:px-8 text-center m-auto bg-secondary-yel-02/20 laptop:flex laptop:items-center laptop:justify-center">
      <svg id="story-logo" class="float-right w-24 h-24 tablet:w-28 tablet:h-28 laptop:w-1/5 laptop:h-1/5 laptop:float-none laptop:flex-none laptop:order-last" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#F9C20F"/>
      </svg>
      <p class="text-primary tablet:text-lg leading-[1.5rem] tablet:leading-[2.34375rem] laptop:max-w-md">
        <span class="text-lg tablet:text-xlg">“In</span> September 2019, <span class="font-bold">20 labor unions</span> of various industrial sector established <span class="font-bold">Federation of General Workers Myanmar</span>, an independent self-sustained organization aim for promoting solidarity among workers&#39; communities and fighting on-going injustices, defending workers &#39; rights and their welfare.<span class="text-lg tablet:text-xlg">”</span>
      </p>
    </div>
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
  tablet:gap-4">
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


  <div class="mt-12 inline-block py-1 px-2 tablet:py-2 tablet:px-4 bg-primary-red-01 laptop:mt-16">
    <div class="flex items-center gap-x-1 tablet:gap-x-2">
      <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
      </svg>
    
    <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold whitespace-nowrap">UNION STRIKES</h3>
    </div>
  </div>

  <div class="
  mt-12  
  mx-4
  tablet:px-8
  tablet:mx-0
  flex-row 
  items-center 
  tablet:flex 
  tablet:flex-nowrap 
  tablet:overflow-x-scroll 
  tablet:space-y-0 
  tablet:gap-x-4 
  space-y-4
  scroll-container
  laptop:mt-16
  laptop:gap-y-4
  laptop:grid
  laptop:grid-cols-12
  laptop:mx-16
  laptop:px-0">

    <div class=" 
    relative  
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-auto
    laptop:col-span-3
    group"
    @click="navigate('Activities')">
      <img src="../assets/labour-protest-07-resize.jpg" class="rounded-[10px] laptop:rounded-t-[10px] laptop:rounded-b-none h-full w-full "  alt="">
      <div class="
      absolute 
      h-full 
      bottom-0 
      rounded-b-[10px] 
      flex 
      items-end 
      left-0 
      px-2 
      pb-2 
      tablet:px-4 
      tablet:pb-4
      bg-gradient-to-t from-black from-0% via-black/0 via-40% to-black/0
      laptop:bg-black
      laptop:block
      laptop:relative
      laptop:p-4
      laptop:pt-2">
        <div>
          <h2 class="text-primary tablet:text-lg text-white font-bold mb-[-2px] laptop:text-primary">Protest Title</h2>
          <div class="date flex items-center mb-1">
            <span class="date text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">May 21<sup>st</sup></span>
              <i class="">
                <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
                </svg>
              </i>
              <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">2021</span>
          </div>

          <p class="text-white text-sm leading-[0.86875rem] tablet:text-primary tablet:leading-[1.5rem] laptop:text-sm laptop:leading-[0.86875rem] font-medium line-clamp-3 mb-1">
            Along with 20 labor Unions, FWGM organised a protest participating more than 7000 worker of various sector demanding minimun wages reform and ...
          </p>

          <div class="flex items-center">
            <span class="text-x-sm tablet:text-sm text-white/60 laptop:text-xx-sm">Photo</span>
            <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
            </svg>
            <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60">
              Splunch
            </span>
          </div>
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
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-auto
    laptop:col-span-3
    group"
    @click="navigate('Activities')">
      <img src="../assets/labour-protest-07-resize.jpg" class="rounded-[10px] laptop:rounded-t-[10px] laptop:rounded-b-none h-full w-full"  alt="">
      <div class="
      absolute 
      h-full 
      bottom-0 
      rounded-b-[10px] 
      flex 
      items-end 
      left-0 
      px-2 
      pb-2 
      tablet:px-4 
      tablet:pb-4
      bg-gradient-to-t from-black from-0% via-black/0 via-40% to-black/0
      laptop:bg-black
      laptop:h-auto
      laptop:relative
      laptop:p-4
      laptop:pt-2">
        <div>
          <h2 class="text-primary tablet:text-lg text-white font-bold mb-[-2px] laptop:text-primary">Protest Title</h2>
          <div class="date flex items-center mb-1">
            <span class="date text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">May 21<sup>st</sup></span>
              <i class="">
                <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
                </svg>
              </i>
              <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">2021</span>
          </div>

          <p class="text-white text-sm leading-[0.86875rem] tablet:text-primary tablet:leading-[1.5rem] laptop:text-sm laptop:leading-[0.86875rem] font-medium line-clamp-3 mb-1">
            Along with 20 labor Unions, FWGM organised a protest participating more than 7000 worker of various sector demanding minimun wages reform and ...
          </p>

          <div class="flex items-center">
            <span class="text-x-sm tablet:text-sm text-white/60 laptop:text-xx-sm">Photo</span>
            <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
            </svg>
            <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60">
              Splunch
            </span>
          </div>
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
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-auto
    laptop:col-span-3
    group"
    @click="navigate('Activities')">
      <img src="../assets/labour-protest-03-resize.jpg" class="rounded-[10px] laptop:rounded-t-[10px] laptop:rounded-b-none h-full w-full"  alt="">
      <div class="
      absolute 
      h-full 
      bottom-0 
      rounded-b-[10px] 
      flex 
      items-end 
      left-0 
      px-2 
      pb-2 
      tablet:px-4 
      tablet:pb-4
      bg-gradient-to-t from-black from-0% via-black/0 via-40% to-black/0
      laptop:bg-black
      laptop:h-auto
      laptop:relative
      laptop:p-4
      laptop:pt-2">
        <div>
          <h2 class="text-primary tablet:text-lg text-white font-bold mb-[-2px] laptop:text-primary">Protest Title</h2>
          <div class="date flex items-center mb-1">
            <span class="date text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">May 21<sup>st</sup></span>
              <i class="">
                <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
                </svg>
              </i>
              <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">2021</span>
          </div>

          <p class="text-white text-sm leading-[0.86875rem] tablet:text-primary tablet:leading-[1.5rem] laptop:text-sm laptop:leading-[0.86875rem] font-medium line-clamp-3 mb-1">
            Along with 20 labor Unions, FWGM organised a protest participating more than 7000 worker of various sector demanding minimun wages reform and ...
          </p>

          <div class="flex items-center">
            <span class="text-x-sm tablet:text-sm text-white/60 laptop:text-xx-sm">Photo</span>
            <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
            </svg>
            <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60">
              Splunch
            </span>
          </div>
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
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-auto
    laptop:col-span-3
    group"
    @click="navigate('Activities')">
      <img src="../assets/labour-protest-08.jpg" class="rounded-[10px] laptop:rounded-t-[10px] laptop:rounded-b-none h-full w-full"  alt="">
      <div class="
      absolute 
      h-full 
      bottom-0 
      rounded-b-[10px] 
      flex 
      items-end 
      left-0 
      px-2 
      pb-2 
      tablet:px-4 
      tablet:pb-4
      bg-gradient-to-t from-black from-0% via-black/0 via-40% to-black/0
      laptop:bg-black
      laptop:h-auto
      laptop:relative
      laptop:p-4
      laptop:pt-2">
        <div>
          <h2 class="text-primary tablet:text-lg text-white font-bold mb-[-2px] laptop:text-primary">Protest Title</h2>
          <div class="date flex items-center mb-1">
            <span class="date text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">May 21<sup>st</sup></span>
              <i class="">
                <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
                </svg>
              </i>
              <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">2021</span>
          </div>

          <p class="text-white text-sm leading-[0.86875rem] tablet:text-primary tablet:leading-[1.5rem] laptop:text-sm laptop:leading-[0.86875rem] font-medium line-clamp-3 mb-1">
            Along with 20 labor Unions, FWGM organised a protest participating more than 7000 worker of various sector demanding minimun wages reform and ...
          </p>

          <div class="flex items-center">
            <span class="text-x-sm tablet:text-sm text-white/60 laptop:text-xx-sm">Photo</span>
            <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
            </svg>
            <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60">
              Splunch
            </span>
          </div>
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
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-auto
    laptop:col-span-3
    group"
    @click="navigate('Activities')">
      <img src="../assets/labour-protest-07-resize.jpg" class="rounded-[10px] laptop:rounded-t-[10px] laptop:rounded-b-none h-full w-full"  alt="">
      <div class="
      absolute 
      h-full 
      bottom-0 
      rounded-b-[10px] 
      flex 
      items-end 
      left-0 
      px-2 
      pb-2 
      tablet:px-4 
      tablet:pb-4
      bg-gradient-to-t from-black from-0% via-black/0 via-40% to-black/0
      laptop:bg-black
      laptop:h-auto
      laptop:relative
      laptop:p-4
      laptop:pt-2">
        <div>
          <h2 class="text-primary tablet:text-lg text-white font-bold mb-[-2px] laptop:text-primary">Protest Title</h2>
          <div class="date flex items-center mb-1">
            <span class="date text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">May 21<sup>st</sup></span>
              <i class="">
                <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
                </svg>
              </i>
              <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">2021</span>
          </div>

          <p class="text-white text-sm leading-[0.86875rem] tablet:text-primary tablet:leading-[1.5rem] laptop:text-sm laptop:leading-[0.86875rem] font-medium line-clamp-3 mb-1">
            Along with 20 labor Unions, FWGM organised a protest participating more than 7000 worker of various sector demanding minimun wages reform and ...
          </p>

          <div class="flex items-center">
            <span class="text-x-sm tablet:text-sm text-white/60 laptop:text-xx-sm">Photo</span>
            <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
            </svg>
            <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60">
              Splunch
            </span>
          </div>
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
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-auto
    laptop:col-span-3
    xxs:hidden
    group"
    @click="navigate('Activities')">
      <img src="../assets/labour-protest-07-resize.jpg" class="rounded-[10px] laptop:rounded-t-[10px] laptop:rounded-b-none h-full w-full"  alt="">
      <div class="
      absolute 
      h-full 
      bottom-0 
      rounded-b-[10px] 
      flex 
      items-end 
      left-0 
      px-2 
      pb-2 
      tablet:px-4 
      tablet:pb-4
      bg-gradient-to-t from-black from-0% via-black/0 via-40% to-black/0
      laptop:bg-black
      laptop:h-auto
      laptop:relative
      laptop:p-4
      laptop:pt-2">
        <div>
          <h2 class="text-primary tablet:text-lg text-white font-bold mb-[-2px] laptop:text-primary">Protest Title</h2>
          <div class="date flex items-center mb-1">
            <span class="date text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">May 21<sup>st</sup></span>
              <i class="">
                <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
                </svg>
              </i>
              <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60 font-bold tracking-tighter">2021</span>
          </div>

          <p class="text-white text-sm leading-[0.86875rem] tablet:text-primary tablet:leading-[1.5rem] laptop:text-sm laptop:leading-[0.86875rem] font-medium line-clamp-3 mb-1">
            Along with 20 labor Unions, FWGM organised a protest participating more than 7000 worker of various sector demanding minimun wages reform and ...
          </p>

          <div class="flex items-center">
            <span class="text-x-sm tablet:text-sm text-white/60 laptop:text-xx-sm">Photo</span>
            <svg width="13" height="3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#ffffff"/>
            </svg>
            <span class="text-x-sm tablet:text-sm laptop:text-xx-sm text-white/60">
              Splunch
            </span>
          </div>
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
    h-[40vh] 
    rounded-[10px] 
    shadow-drop-sha
    tablet:flex-none
    laptop:h-full
    laptop:col-span-3
    bg-red/50
    flex items-center justify-center
    bg-black
    group
    focus:bg-red
    hover:shadow-drop-sha-hover">
    <p class="text-center
    text-white 
    text-primary 
    block 
    p-4 
    rounded-[28px] 
    border 
    border-white/50
    bg-gradient-to-t from-white/10 to-black/0 group-hover:white/10 group-hover:to-white/50 group-active:to-black
    font-bold
    ">More</p>
    </div>
  </div>


  <div class="mt-12 h-[40vh] mr-4 relative rounded-r-[10px] laptop:mx-16 laptop:h-[80vh] laptop:rounded-l-[10px]">
      <picture>
        <source media="(min-width: 1000px)" srcset="./assets/first-protest-february-06.jpg">
        <img src="../assets/first-protest-february-06-resize.jpg" class="w-full h-full rounded-r-[10px] laptop:rounded-l-[10px]" alt="">
      </picture>
      
      <div id="" class="
      absolute 
      rounded-r-[10px] 
      left-0 
      top-0 
      bottom-0 
      flex 
      items-center
      bg-gradient-to-r from-black from-0% via-black/0 via-60% to-black/0
      tablet:bg-gradient-to-r tablet:from-black tablet:from-0% tablet:via-black/5 tablet:via-60% tablet:to-black/0
      laptop:rounded-l-[10px]
      laptop:pl-4
      ">
        <div class="xxs:w-2/3 ml-4 w-3/5 tablet:w-2/5">
          <p id="first-protest-para" class="px-2 text-sm tablet:text-primary tablet:leading-[1.5rem] relative leading-[1.2rem] font-medium first-letter:text-xxlg text-white">
            Amidst the time of apprehension, <span class="font-bold">FWGM</span>    , along with thousand of workers bravely embrace  the uncertainty and took to the street on the 6<sup>th</sup> of February, became the very first protest in the history of <span class="font-bold">Burmese Spring Revolution</span> igniting series of resistant movements later across the country.
          </p>
        </div>
      </div>
  </div>

  <div class="mt-12 inline-block p-1 tablet:py-2 tablet:px-4 bg-primary-red-01">
      <div class="flex items-center gap-x-1 tablet:gap-x-2">
        <svg class="w-4 h-4 tablet:w-8 tablet:h-8" viewBox="0 0 8.5 8.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#F9C20F"/>
        </svg>
      
      <h3 class="text-lg tablet:text-xlg text-secondary-yel-02 font-bold">OUR VISION</h3>
    </div>
  </div>

  <div class="mt-12 relative bg-secondary-yel-01">
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

  <div class="mt-12 mx-4 px-8 tablet:mx-8 laptop:mx-auto  laptop:w-1/4">

      <div class="bg-primary-red-5/50 py-4 laptop:px-4  rounded-[10px]">
        <p class="text-sm mb-4 text-white mx-auto text-center">
          We will keep you posted our on-going activities!
        </p>
        <div class="form mx-auto w-3/4 tablet:w-1/3 max-w-[18.75rem] laptop:w-auto">
          <form>
            <input type="mail" name="email" placeholder="email" class="text-sm 
            text-white 
            bg-transparent 
            border 
            border-secondary-yel-01 
            rounded-[10.78335px] 
            px-2 
            py-1
            mb-4 
            w-full 
            h-full
            placeholder-secondary-yel-01">
            <button class="
            text-sm
            text-white
            bg-fist/60
            w-full
            py-1
            mb-4
            rounded-[9.78335rem]" type="submit">Subscribe</button>
          </form>
          
        </div>
      </div>

  </div>


  <div class="mt-12 flex flex-col bg-footer-red pb-2 gap-y-2 laptop:h-[30vh]">
    <div class="flex items-start justify-between laptop:justify-center laptop:items-center laptop:gap-x-16 gap-x-4 mt-6 px-4">
      <div class="flex-none">
        <svg class="w-16 h-16 tablet:w-20 tablet:h-20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#F9C20F"/>
        </svg>
      </div>

      <div class="flex-none">
        <ul class="text-x-sm  text-white space-y-1">
          <li class="border-b border-secondary-yel-01"><a href="#">ADVOCATES</a></li>
          <li class="border-b border-secondary-yel-01"><a href="#">OUR STORY</a></li>
          <li class="border-b border-secondary-yel-01"><a href="#">UNION STRIKES</a></li>
          <li class="border-b border-secondary-yel-01"><a href="#">BLOGS</a></li>
        </ul>
      </div>

      <div class="flex-none">
        <ul class="text-x-sm text-white space-y-1">
          <li class="border-b border-secondary-yel-01">CONTACT</li>
          <li class="text-xx-sm flex items-center gap-x-1">
            <span>
              <svg class="w-2 h-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7V1C8 0.446667 7.68489 0 7.29453 0H0.705467C0.315109 0 0 0.446667 0 1V7C0 7.55333 0.315109 8 0.705467 8H7.29453C7.68489 8 8 7.55333 8 7ZM7.38389 0.926667C7.53909 1.14667 7.45444 1.37333 7.36978 1.48667L5.46032 3.96667L7.29453 6.67333C7.35097 6.76667 7.38859 6.91333 7.32275 7.01333C7.26161 7.12 7.12052 7.11333 7.05938 7.04667L5.00412 4.56L3.99765 5.86L2.99588 4.56L0.940623 7.04667C0.879483 7.11333 0.738389 7.12 0.677249 7.01333C0.611405 6.91333 0.64903 6.76667 0.705467 6.67333L2.53968 3.96667L0.630217 1.48667C0.545561 1.37333 0.460905 1.14667 0.616108 0.926667C0.771311 0.706667 0.931217 0.813333 1.0629 0.973333L3.99765 4.33333L6.9371 0.973333C7.06878 0.813333 7.22869 0.706667 7.38389 0.926667Z" fill="white"/>
              </svg>
            </span>
            <i class="text-center align-bottom">FWGM.org </i>
            </li>
          <li class="text-xx-sm flex items-center gap-x-1">
            <span>
              <svg class="w-2 h-2"  viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.55556 0.5H0.444444C0.32657 0.5 0.213524 0.546825 0.130175 0.630175C0.0468252 0.713524 0 0.82657 0 0.944444V8.05556C0 8.17343 0.0468252 8.28648 0.130175 8.36983C0.213524 8.45318 0.32657 8.5 0.444444 8.5H4.27333V5.40667H3.23422V4.19556H4.27333V3.30667C4.27333 2.27333 4.90444 1.71022 5.82889 1.71022C6.13956 1.70933 6.45067 1.72533 6.76 1.75778V2.83333H6.12222C5.62089 2.83333 5.52311 3.07244 5.52311 3.42222V4.19333H6.72178L6.56622 5.40444H5.52267V8.5H7.55556C7.67343 8.5 7.78648 8.45318 7.86983 8.36983C7.95318 8.28648 8 8.17343 8 8.05556V0.944444C8 0.82657 7.95318 0.713524 7.86983 0.630175C7.78648 0.546825 7.67343 0.5 7.55556 0.5Z" fill="white"/>
              </svg>
            </span>
            <i class="text-center align-bottom">FWGM.facebook.page </i>
          </li>
          <li class="text-xx-sm flex items-center justify-start gap-x-1">
            <span>
              <svg class="w-2 h-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.91957 6.8114L5.88254 4.77421C5.83881 4.73097 5.78191 4.70356 5.72084 4.69632C5.65978 4.68907 5.59804 4.70241 5.54541 4.73421C5.17796 4.95653 4.90381 5.30482 4.77403 5.71423C4.70831 5.91995 4.46833 6.01424 4.28262 5.90281L4.27977 5.89995L4.27691 5.89709C3.38462 5.3619 2.6379 4.61512 2.10274 3.72276C2.10274 3.7199 2.09989 3.71705 2.09989 3.71705C1.98561 3.53133 2.07989 3.29132 2.28559 3.22561C2.69583 3.09742 3.04461 2.82285 3.26554 2.45416C3.33125 2.34559 3.31411 2.20844 3.22554 2.11701L1.18851 0.0798211C1.14478 0.0365828 1.08788 0.00917019 1.02681 0.00192471C0.965749 -0.00532078 0.904012 0.00801511 0.851382 0.0398202C0.602289 0.189276 0.394302 0.398378 0.246172 0.648274C0.098041 0.89817 0.0144234 1.181 0.00285698 1.47128V1.47414C-2.66078e-09 1.50271 0 1.53128 0 1.55985C0 1.59986 0.00285698 1.637 0.00571397 1.67414C0.0397129 2.80555 0.363343 3.90932 0.945663 4.87993C1.47992 5.77138 2.22845 6.51997 3.11983 7.05426L3.12269 7.05712C4.10549 7.64856 5.22543 7.97143 6.37108 7.99714C6.39394 7.99714 6.41679 8 6.43965 8H6.59964V7.99429C6.87738 7.97076 7.14563 7.88187 7.38247 7.73489C7.61931 7.58791 7.81804 7.387 7.96242 7.14855C8.02528 7.03998 8.00814 6.89997 7.91957 6.8114Z" fill="white"/>
              </svg>
            </span>            
            <i class="text-center align-bottom">+669-123-456-1</i>
          </li>
        </ul>

      </div>

    </div>
    <span class="text-xx-sm text-white bg-footer-red laptop:mt-auto text-center">@All rights reserved FEDERATION of GENERAL WORKERS MYANMAR</span>
  </div>


</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function navigate(link) {
  router.push({
    name : link
  });
  // console.log(link);
}
</script>

<style>
#cover-grad {
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%); 
}

#story-logo {
  clip-path: url(../assets/story-logo.svg);
  shape-outside: url(../assets/story-logo.svg);  
}

#first-protest {
  /* background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0.2) 100%); */
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%); 
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
  position: sticky;
  position: -webkit-sticky;
  top: 16px;
}

@media only screen and (min-width : 1000px) {
  #sticky-nav {
    position: fixed;
    top: 48px;
    right: 16px;
  }
}
</style>

