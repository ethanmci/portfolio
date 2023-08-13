<script setup lang="ts">
const props = defineProps<{
    imgSrc: string,
    hoverColor?: string
}>()
</script>

<template>
    <div>
        <img :src="imgSrc"/>
    </div>
</template>