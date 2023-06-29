<template>
  <div v-if="articleStore.currentTag === 'BodyComponent'" class="mx-4 tablet:mx-8 laptop:w-[1200px] laptop:mx-auto z-0">
      <div class="mt-4 relative">
          <hr>
          <div class="absolute top-[-13px] right-0 bg-white px-2">
              <span class="text-sm text-black/60">COMMENTS</span>
          </div>
      </div>

      <div 
    class=" 
      mt-4 
      flex 
      flex-col 
      tablet:flex-row 
      gap-y-4
      tablet:justify-between
      tablet:mx-0
      tablet:gap-x-4">
    
        <div class="flex flex-col gap-y-2 items-start">

            <div v-for="(msg, index) in articleStore.messages" :key="index" class="relative">

                <div
                @click="triggerDelete(msg.id)" 
                class="flex 
                flex-col 
                relative 
                bg-secondary-yel-02/20 
                p-4 pl-0 pt-2 
                rounded-r-[10px] 
                rounded-bl-[10px]">
                  <div v-if="userStore.token" class="h-3 w-3 absolute right-2 top-2 group">
                    <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_428_1135)">
                      <path class="fill-black/60 group-hover:fill-black/40 group-active:fill-black/70" d="M6.08929 1.6125L5.41071 2.5H10.5893L9.91072 1.6125C9.85714 1.54375 9.76786 1.5 9.67143 1.5H6.325C6.22857 1.5 6.13929 1.54062 6.08571 1.6125H6.08929ZM11.3393 0.78125L12.65 2.5H13.1429H14.8571H15.1429C15.6179 2.5 16 2.83437 16 3.25C16 3.66563 15.6179 4 15.1429 4H14.8571V13.5C14.8571 14.8813 13.5786 16 12 16H4C2.42143 16 1.14286 14.8813 1.14286 13.5V4H0.857143C0.382143 4 0 3.66563 0 3.25C0 2.83437 0.382143 2.5 0.857143 2.5H1.14286H2.85714H3.35L4.66071 0.778125C5.03214 0.29375 5.65714 0 6.325 0H9.67143C10.3393 0 10.9643 0.29375 11.3357 0.778125L11.3393 0.78125ZM2.85714 4V13.5C2.85714 14.0531 3.36786 14.5 4 14.5H12C12.6321 14.5 13.1429 14.0531 13.1429 13.5V4H2.85714ZM5.71429 6V12.5C5.71429 12.775 5.45714 13 5.14286 13C4.82857 13 4.57143 12.775 4.57143 12.5V6C4.57143 5.725 4.82857 5.5 5.14286 5.5C5.45714 5.5 5.71429 5.725 5.71429 6ZM8.57143 6V12.5C8.57143 12.775 8.31429 13 8 13C7.68571 13 7.42857 12.775 7.42857 12.5V6C7.42857 5.725 7.68571 5.5 8 5.5C8.31429 5.5 8.57143 5.725 8.57143 6ZM11.4286 6V12.5C11.4286 12.775 11.1714 13 10.8571 13C10.5429 13 10.2857 12.775 10.2857 12.5V6C10.2857 5.725 10.5429 5.5 10.8571 5.5C11.1714 5.5 11.4286 5.725 11.4286 6Z"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_428_1135">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  
                    <h1 class="text-sm text-black/60 font-semibold pl-2">{{ msg.name }}</h1>
                    <span class="text-x-sm text-black/40 font-bold pl-2">{{ msg.created_at }}</span>
                    <h3 class="fa-font text-primary pl-4 text-black/80 mt-2">{{ msg.body }}</h3>
                </div>

            </div>
        </div>

        <div class="flex flex-col items-end gap-y-2">
            <span v-if="error && !msg" class="text-sm text-red-400">{{ error }}</span>
            <textarea 
            class="border 
            border-black/20 
            p-2
            w-auto 
            rounded-t-[10px] 
            rounded-bl-[10px] 
            focus:outline-none 
            focus:border-black/40" 
            
            name="msg" 
            id="msg" 
            rows="3" 
            placeholder="Comments" v-model="msg"></textarea>

            <button 
            class="flex-none 
            bg-secondary-yel-02 
            px-4 py-2
            mt-4 
            rounded-[20px] 
            text-primary 
            text-black/80
            hover:bg-secondary-yel-02/60
            active:bg-secondary-yel-02/80" @click="openModel" type="button">Comment</button>
        </div>
      </div>
  </div>

        
            <Teleport to="body">
                <transition name="modal">
                    <div v-if="open" class="modal-mask">
                        <div class="modal-container rounded-[10px] relative">
                            <button @click="open = false" class="absolute left-[-16px] top-[-16px] group" type="button">
                              <div class="w-8 h-8">
                                <svg class="w-full h-full" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.2376 11.2624L8.5008 9ZM10.7632 6.7376L8.5008 9ZM8.5008 9L6.2376 6.7376ZM8.5008 9L10.7632 11.2624ZM8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="fill-white/80 group-hover:fill-white/40 group-active:fill-white/60"/>
                                  <path d="M6.2376 11.2624L8.5008 9M8.5008 9L10.7632 6.7376M8.5008 9L6.2376 6.7376M8.5008 9L10.7632 11.2624M8.5 17C12.9184 17 16.5 13.4184 16.5 9C16.5 4.5816 12.9184 1 8.5 1C4.0816 1 0.5 4.5816 0.5 9C0.5 13.4184 4.0816 17 8.5 17Z" class="stroke-black/40" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              </div>
                            </button>
                            <h1 class="modal-header text-black/80">What should we call you?</h1>
                            <span v-if="error && !name" class="text-sm text-red-300">{{error}}</span>
                            <div class="mt-2 mb-2">
                                <input type="text" name="name" v-model="name" class="focus:outline-none border pl-2 py-1 rounded-[10px] text-primary text-black/80 focus:border-black/40">
                            </div>
                            <button class="modal-footer modal-default-button text-black/80" @click="sendMsg">Post</button>
                        </div>

                    </div>                
                </transition>


            </Teleport>

            <Teleport to="body">
                <transition name="modal">
                    <div v-if="confirm" class="modal-mask">
                        <div class="modal-container relative">
                            <h1 class="modal-header text-black/80">Are you sure to delete the message?</h1>
                            <div class="flex gap-x-2 justify-center mt-4">
                              <button 
                              class="modal-footer 
                              modal-default-button 
                              text-black/80 
                              bg-secondary-yel-02 
                              px-6 py-2 
                              rounded-[20px]" @click="deleteMsg">Yes</button>
                              <button 
                              class="modal-footer 
                              modal-default-button 
                              text-black/80 
                              bg-secondary-yel-02 
                              px-6 py-2 
                              rounded-[20px]" @click="confirm = false">No</button>
                            </div>

                        </div>

                    </div>                
                </transition>


            </Teleport>



</template>


<script setup>
import { onBeforeMount, ref } from 'vue';
import { useArticleStore } from '../sotre/articleStore';
import { useRoute } from 'vue-router';
import { useUserStore } from '../sotre/userStore';
const route = useRoute();
const articleStore = useArticleStore();
const userStore = useUserStore();
const open = ref(false);
const name = ref("");
const msg = ref("");
const error = ref("");
const confirm = ref(false);
const toDeleteMsgId = ref('');

function openModel() {
  if(!msg.value) {
    error.value = 'Comment text required!';
    
    return "";
  } else {
    error.value = "";
  }
    open.value = true;
}

function sendMsg() {

  const formData = new FormData();

  if(!name.value) {
    error.value = "Name required!";
    return "";
  }

  if(name.value && msg.value) {
    formData.append('name', name.value);
    formData.append('msg', msg.value);
    articleStore.sendMsg(formData, route.params.id, route.params.type)
    .then(res => {
      open.value = false;
      msg.value = "";
      return res;
    })
  }
}

function triggerDelete(id) {
  
  if(userStore.token) {
    confirm.value = true;
    toDeleteMsgId.value = id;
  }

}

function deleteMsg() {

  articleStore.deleteMsg(toDeleteMsgId.value, route.params.id, route.params.type).then(res => {
    confirm.value = false;
    return res;
  });
  
}

onBeforeMount(() => {
  articleStore.fetchMsg(route.params.id, route.params.type)
  .then(res => {
    return res;
  });
})

</script>

<style lang="css">
.modal-mask {
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

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>