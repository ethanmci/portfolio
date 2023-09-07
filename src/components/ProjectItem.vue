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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  cardImage: defaultImg,
  title: 'Project Title',
  year: '202X',
  description: 'No project description.'
})

const placeholderFn = () => { console.log('accessible') }
</script>
<template>
  <a href="#" :on-click="() => placeholderFn()">
    <div
      class="md:col-span-1 col-span-full h-72 p-2 border-2 border-slate-500 rounded-lg shadow-md hover:bg-slate-300 cursor-pointer"
    >
      <!-- cover image -->
      <img :src="cardImage" class="object-cover h-44 w-full mx-auto rounded-md mb-2" />
      <div class="grid grid-cols-2">
        <h2 class="font-bold col-span-1">{{ title }}</h2>
        <h3 class="col-span-1 text-right">{{ year }}</h3>
      </div>

      <p class="text-ellipsis">{{ description }}</p>
    </div>
  </a>
</template>
