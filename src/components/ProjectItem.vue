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

</script>
<template>
<div class="md:col-span-1 col-span-full min-h-[24] p-2 border-2 border-slate-500 rounded-lg shadow-md">
    <!-- cover image -->
    <img :src="cardImage" class="object-contain h-44 w-44 mx-auto rounded-md">
    <h2 class="font-bold">{{ title }}</h2>
    <h3>{{ year }}</h3>
    <p class="truncate">{{ description }}</p>
</div>
</template>