<script setup lang="ts">
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

const TagColour = (tag: string) => {
  switch (tag) {
    case 'Web':
      return 'bg-orange-600'
    case 'Game Development':
      return 'bg-green-600'
    case 'School':
      return 'bg-red-600'
    default: 
      return 'bg-sky-600'
  }
}
 
const placeholderFn = () => { console.log('accessible') }
</script>
<template>
  <a href="#" :on-click="() => placeholderFn()">
    <div
      class="md:col-span-1 col-span-full h-80 p-2 border-2 border-slate-500 rounded-lg shadow-md hover:bg-slate-300 cursor-pointer"
    >
      <!-- cover image -->
      <img :src="cardImage" class="object-cover h-44 w-full mx-auto rounded-md mb-2" />
      <div class="grid grid-cols-2">
        <h2 class="font-bold col-span-1">{{ title }}</h2>
        <h3 class="col-span-1 text-right">{{ year }}</h3>
      </div>
      <span v-for="(tag, i) in tags" v-bind:key="i" class="text-white p-1 mr-1 rounded-md" :class="TagColour(tag)">{{ tag }}</span>
      <p class="mt-2 text-ellipsis">{{ description }}</p>
    </div>
  </a>
</template>
