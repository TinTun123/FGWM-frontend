<template>
    <div class="border border-[#CCCCCC]/60">
        <div v-if="editor" class='flex flex-col gap-y-2 bg-[#CCCCCC]/40 px-4 py-2'>

            <div  class="flex-none flex gap-x-2">
                
                <div class="flex gap-x-1 border-r border-black/20">
                    <button
                    @click="editor.chain().focus().setTextAlign('left').run()"
                    :class="{ 'bg-[#A6A6A6]/80': editor.isActive({ textAlign: 'left' }) }" 
                    class="px-2 
                    py-1  
                    rounded-[8px]">
                        <div class="w-3 h-3">
                            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2857 1.14286C10.2857 1.775 9.775 2.28571 9.14286 2.28571H1.14286C0.510714 2.28571 0 1.775 0 1.14286C0 0.510714 0.510714 0 1.14286 0H9.14286C9.775 0 10.2857 0.510714 10.2857 1.14286ZM10.2857 10.2857C10.2857 10.9179 9.775 11.4286 9.14286 11.4286H1.14286C0.510714 11.4286 0 10.9179 0 10.2857C0 9.65357 0.510714 9.14286 1.14286 9.14286H9.14286C9.775 9.14286 10.2857 9.65357 10.2857 10.2857ZM0 5.71429C0 5.08214 0.510714 4.57143 1.14286 4.57143H14.8571C15.4893 4.57143 16 5.08214 16 5.71429C16 6.34643 15.4893 6.85714 14.8571 6.85714H1.14286C0.510714 6.85714 0 6.34643 0 5.71429ZM16 14.8571C16 15.4893 15.4893 16 14.8571 16H1.14286C0.510714 16 0 15.4893 0 14.8571C0 14.225 0.510714 13.7143 1.14286 13.7143H14.8571C15.4893 13.7143 16 14.225 16 14.8571Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </button>

                    <button
                    @click="editor.chain().focus().setTextAlign('center').run()"
                    :class="{ 'bg-[#A6A6A6]/80': editor.isActive({ textAlign: 'center' }) }" 
                    class="px-2 
                    py-1 
                    rounded-[8px]">
                        <div class="w-3 h-3">
                            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5714 1.14286C12.5714 0.510714 12.0607 0 11.4286 0H4.57143C3.93929 0 3.42857 0.510714 3.42857 1.14286C3.42857 1.775 3.93929 2.28571 4.57143 2.28571H11.4286C12.0607 2.28571 12.5714 1.775 12.5714 1.14286ZM16 5.71429C16 5.08214 15.4893 4.57143 14.8571 4.57143H1.14286C0.510714 4.57143 0 5.08214 0 5.71429C0 6.34643 0.510714 6.85714 1.14286 6.85714H14.8571C15.4893 6.85714 16 6.34643 16 5.71429ZM0 14.8571C0 15.4893 0.510714 16 1.14286 16H14.8571C15.4893 16 16 15.4893 16 14.8571C16 14.225 15.4893 13.7143 14.8571 13.7143H1.14286C0.510714 13.7143 0 14.225 0 14.8571ZM12.5714 10.2857C12.5714 9.65357 12.0607 9.14286 11.4286 9.14286H4.57143C3.93929 9.14286 3.42857 9.65357 3.42857 10.2857C3.42857 10.9179 3.93929 11.4286 4.57143 11.4286H11.4286C12.0607 11.4286 12.5714 10.9179 12.5714 10.2857Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </button>

                    <button 
                    @click="editor.chain().focus().setTextAlign('right').run()"
                    :class="{ 'bg-[#A6A6A6]/80': editor.isActive({ textAlign: 'right' }) }"
                    class="px-2 
                    py-1 
                    rounded-[8px]">
                        <div class="w-3 h-3">
                            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1.14286C16 1.775 15.4893 2.28571 14.8571 2.28571H6.85714C6.225 2.28571 5.71429 1.775 5.71429 1.14286C5.71429 0.510714 6.225 0 6.85714 0H14.8571C15.4893 0 16 0.510714 16 1.14286ZM16 10.2857C16 10.9179 15.4893 11.4286 14.8571 11.4286H6.85714C6.225 11.4286 5.71429 10.9179 5.71429 10.2857C5.71429 9.65357 6.225 9.14286 6.85714 9.14286H14.8571C15.4893 9.14286 16 9.65357 16 10.2857ZM0 5.71429C0 5.08214 0.510714 4.57143 1.14286 4.57143H14.8571C15.4893 4.57143 16 5.08214 16 5.71429C16 6.34643 15.4893 6.85714 14.8571 6.85714H1.14286C0.510714 6.85714 0 6.34643 0 5.71429ZM16 14.8571C16 15.4893 15.4893 16 14.8571 16H1.14286C0.510714 16 0 15.4893 0 14.8571C0 14.225 0.510714 13.7143 1.14286 13.7143H14.8571C15.4893 13.7143 16 14.225 16 14.8571Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </button>
                </div>

                <div 
                class="flex 
                gap-x-1 
                border-r 
                border-black/20">
                    <button
                    :class="{ 'bg-[#A6A6A6]/80 ': editor.isActive('bold') }"
                    @click="editor.chain().focus().toggleBold().run()"
                    class="px-2 
                    py-1 
                    rounded-[8px]">
                        <div class="w-3 h-3">
                            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.14286C0 0.510714 0.595833 0 1.33333 0H3.33333H4H9.33333C12.2792 0 14.6667 2.04643 14.6667 4.57143C14.6667 5.68929 14.1958 6.71786 13.4167 7.51071C14.9625 8.31071 16 9.76429 16 11.4286C16 13.9536 13.6125 16 10.6667 16H4H3.33333H1.33333C0.595833 16 0 15.4893 0 14.8571C0 14.225 0.595833 13.7143 1.33333 13.7143H2V8V2.28571H1.33333C0.595833 2.28571 0 1.775 0 1.14286ZM9.33333 6.85714C10.8042 6.85714 12 5.83214 12 4.57143C12 3.31071 10.8042 2.28571 9.33333 2.28571H4.66667V6.85714H9.33333ZM4.66667 9.14286V13.7143H10.6667C12.1375 13.7143 13.3333 12.6893 13.3333 11.4286C13.3333 10.1679 12.1375 9.14286 10.6667 9.14286H9.33333H4.66667Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </button>

                    <button
                    :class="{ 'bg-[#A6A6A6]/80 ': editor.isActive('italic') }"
                    @click="editor.chain().focus().toggleItalic().run()" 
                    class="px-2 
                    py-1 
                    rounded-[8px]">
                        <div class="w-3 h-3">
                            <svg class="w-full h-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6667 0H6.66667C6.31305 0 5.97391 0.140476 5.72386 0.390525C5.47381 0.640573 5.33333 0.979711 5.33333 1.33333C5.33333 1.68696 5.47381 2.02609 5.72386 2.27614C5.97391 2.52619 6.31305 2.66667 6.66667 2.66667H8.69333L4.42667 13.3333H1.33333C0.979711 13.3333 0.640573 13.4738 0.390525 13.7239C0.140476 13.9739 0 14.313 0 14.6667C0 15.0203 0.140476 15.3594 0.390525 15.6095C0.640573 15.8595 0.979711 16 1.33333 16H9.33333C9.68696 16 10.0261 15.8595 10.2761 15.6095C10.5262 15.3594 10.6667 15.0203 10.6667 14.6667C10.6667 14.313 10.5262 13.9739 10.2761 13.7239C10.0261 13.4738 9.68696 13.3333 9.33333 13.3333H7.30667L11.5733 2.66667H14.6667C15.0203 2.66667 15.3594 2.52619 15.6095 2.27614C15.8595 2.02609 16 1.68696 16 1.33333C16 0.979711 15.8595 0.640573 15.6095 0.390525C15.3594 0.140476 15.0203 0 14.6667 0Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </button>

                    <button
                    @click="addImage" 
                    class="px-2 
                    py-1 
                    rounded-[8px]">
                        <div class="w-4 h-4">
                            <svg class="w-full h-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2857 0H1.71429C1.25978 0.000579017 0.824034 0.211479 0.502651 0.586426C0.181267 0.961373 0.000496301 1.46974 0 2V10C0.000496301 10.5303 0.181267 11.0386 0.502651 11.4136C0.824034 11.7885 1.25978 11.9994 1.71429 12H10.2857C10.7402 11.9994 11.176 11.7885 11.4973 11.4136C11.8187 11.0386 11.9995 10.5303 12 10V2C11.9995 1.46974 11.8187 0.961373 11.4973 0.586426C11.176 0.211479 10.7402 0.000579017 10.2857 0ZM8.14286 2C8.39715 2 8.64573 2.08797 8.85716 2.2528C9.0686 2.41762 9.23339 2.65189 9.3307 2.92597C9.42802 3.20006 9.45348 3.50166 9.40387 3.79264C9.35426 4.08361 9.23181 4.35088 9.05199 4.56066C8.87218 4.77044 8.64309 4.9133 8.39369 4.97118C8.14428 5.02906 7.88577 4.99935 7.65084 4.88582C7.4159 4.77229 7.2151 4.58003 7.07382 4.33336C6.93255 4.08668 6.85714 3.79667 6.85714 3.5C6.8575 3.1023 6.99307 2.72101 7.23411 2.4398C7.47515 2.15858 7.80197 2.00041 8.14286 2ZM1.71429 11C1.48696 11 1.26894 10.8946 1.10819 10.7071C0.947449 10.5196 0.857143 10.2652 0.857143 10V7.88656L3.3975 5.25219C3.6426 4.99858 3.96136 4.86354 4.28883 4.87457C4.6163 4.8856 4.92785 5.04188 5.16 5.31156L6.89973 7.33687L3.75991 11H1.71429ZM11.1429 10C11.1429 10.2652 11.0526 10.5196 10.8918 10.7071C10.7311 10.8946 10.513 11 10.2857 11H4.97223L8.22455 7.20562C8.45482 6.97717 8.74703 6.8513 9.0493 6.85039C9.35158 6.84947 9.64435 6.97356 9.87563 7.20063L11.1429 8.4325V10Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <editor-content class="mx-4 min-h-[40vh]" :editor="editor"/>
    </div>

</template>

<script>

import { Editor, EditorContent } from '@tiptap/vue-3'
import  Document  from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Blockquote from '@tiptap/extension-blockquote'
import Paragraph from '@tiptap/extension-paragraph'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
export default {
    components : {
        EditorContent
    },
    props : {
        wId : String,
        aId : String,
        modelValue : String,
        bodyText : String
    },
    emits : [
        'update:modelValue'
    ],
    data() {
      return {
        editor: null,
      }
    },
    computed : {
    
    },
    methods: {
        addImage() {
            console.log("click");
            this.editor.chain().focus().setImage({ src : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}).run();   
        }
    },
    mounted() {
      this.editor = new Editor({
        extensions: [
          Document,
          Paragraph.configure({
            HTMLAttributes : {
                class : 'text-primary text-black/80 leading-[24px] fa-font'
            }
          }),
          Text,
        //   Heading,
        //   OrderedList,
        //   HorizontalRule,
          Blockquote,
        //   ListItem,
        //   BulletList,
          Italic,
          Bold,
          Dropcursor,
          Image.configure({
            inline : true,
            allowBase64 : true,
            HTMLAttributes : {
                class : 'w-[171px] h-[109px] float-right'
            }
          }),
        //   Underline,
        //   Strike,
          TextAlign.configure({
            types : ['paragraph']
          }),
        //   Color,
          TextStyle
        ],
        content: this.bodyText,

        editorProps :  {
            attributes : {
                class : 'outline-none'
            }
        },
        onUpdate : ({editor}) => {
            // console.log(editor.getHTML());
            this.$emit('update:modelValue', editor.getHTML());
        },
        autofocus : true,
        editable : true,
        injectCSS : true,
      })
    },

    beforeUnmount() {
      this.editor.destroy()
    },
}


</script>


<style lang="css">

    img.ProseMirror-selectednode {
        outline: 2px solid #000000;
    }

</style>
