<template>
<router-view></router-view>

</template>


<script setup>
// import { useRouter } from 'vue-router';

// const router = useRouter();
</script>

<style>
#cover-grad {
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%); 
}

#story-logo {
  clip-path: url(./assets/story-logo.svg);
  shape-outside: url(./assets/story-logo.svg);  
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
  background-image: url(./assets/start-quote.svg);
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
  background-image: url(./assets/end-quote.svg);
  background-position: center;
  background-repeat: no-repeat;
}

#fist {

clip-path: url(./assets/fist-path.svg);
shape-outside: url(./assets/fist-path.svg);

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