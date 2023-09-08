<script setup lang="ts">
import TagColour from '@/assets/functions/TagColour'
import defaultImg from '@/assets/project_default.jpg'
export interface Props {
  cardImage?: string | undefined
  title?: string
  year?: string
  description?: string
  tags?: Array<string>
  link?: string
}

const props = withDefaults(defineProps<Props>(), {
  cardImage: defaultImg,
  title: 'Project Title',
  year: '202X',
  description: 'No project description.'
})

const imgURL: string = new URL(`../assets/project_thumbnails/${props.cardImage}`, import.meta.url).href
 
const placeholderFn = () => { console.log('accessible') }
</script>
<template>
  <a href="#">
    <div
      class="md:col-span-1 col-span-full md:h-96 h-1/2 p-2 border-2 rounded-lg bg-white border-slate-500 hover:bg-slate-300 hover:border-sky-500 cursor-pointer transition-all"
    >
      <!-- cover image -->
      <img :src="cardImage == null ? defaultImg : imgURL" class="object-cover h-60 w-full mx-auto rounded-md mb-2 border" />
      <div class="grid grid-cols-2">
        <h2 class="font-bold col-span-1">{{ title }}</h2>
        <h3 class="col-span-1 text-right">{{ year }}</h3>
      </div>
      <span v-for="(tag, i) in tags" v-bind:key="i" class="text-white p-1 mr-1 rounded-md" :class="TagColour(tag)">{{ tag }}</span>
      <p class="mt-2 text-ellipsis">{{ description }}</p>
    </div>
  </a>
</template>
