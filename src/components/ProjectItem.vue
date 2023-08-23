<script setup lang="ts">
export interface Props {
    cardImage?: string
    title?: string
    year?: string
    description?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
    cardImage: '../assets/project_default.jpg',
    title: 'Project Title',
    year: '202X',
    projectDescription: 'No project description.'
})

</script>
<template>
<div class="md:col-span-1 col-span-full">
    <!-- cover image -->
    <img :src="cardImage">
    <p class="truncate">{{ description }}</p>
</div>
</template>