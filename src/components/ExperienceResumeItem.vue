<script setup lang="ts">
export interface Props {
  title: string
  company: string
  startEnd: string
  location: string
  tasks?: Array<string>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {})
</script>
<template>
  <div class="mb-2 p-2">
    <div class="grid grid-cols-2 border-b mb-1">
      <span class="col-span-1 font-bold">{{ company }}</span>
      <span class="col-span-1 text-right font-bold">{{ location }}</span>
    </div>
    <div class="grid grid-cols-2">
      <span class="col-span-1 ">{{ title }}</span>
      <span class="col-span-1 text-right">{{ startEnd }}</span>
    </div>
    <ul class="list-disc px-8 pt-2">
      <li v-for="(task, i) in tasks" :key="i" class="mb-1">{{ task }}</li>
    </ul>
  </div>
</template>
