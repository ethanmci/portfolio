<script setup lang="ts">
const props = defineProps<{
    imgSrc: string,
    hoverColor?: string
}>()
</script>

<template>
    <div>
        <img class="social-icon" :src="imgSrc"/>
    </div>
</template>