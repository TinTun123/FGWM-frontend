<template>
        <div 
        class="image-input" 
        :style="{ 'background-image' : `url(${imageData})` }" 
        @click="chooseImage">
            <span v-if="!imageData"
            class="placeholder">
                Choose image
            </span>   
        
            <input
            class="file-input"
            ref="inputfile"
            @input="onSelectFile"
            type="file">
        </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
const imageData = ref('');
const inputfile = ref(null);

const props = defineProps({
    imgrul : String,
});

function chooseImage() {
    inputfile.value.click();
}
const emit = defineEmits(['updateImg']);


// eslint-disable-next-line no-unused-vars


function onSelectFile() {
    const input = inputfile;
    const files = input.value.files;

    if(files && files[0]) {
        const reader = new FileReader;
        reader.onload = e => {
            imageData.value = e.target.result;
        }
        reader.readAsDataURL(files[0]);
        // console.log(files[0]);
        emit('updateImg', files[0]);
    }
}

onMounted(() => {
    imageData.value = props.imgrul;
    console.log(props.coverStr);
})

</script>

<style>
.image-input {
    display: block;
    width: 300px;
    height: 150px;
    cursor: pointer;
    background-size : contain;
    background-repeat: no-repeat;
    background-position : center center;
}


.placeholder {
    background: #d3d2d2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 18px;
    font-family : Helvetica;
}


.placeholder:hover {
    background: #6e6d6d;
}


.file-input {
    display : none;
}

</style>