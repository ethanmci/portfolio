<script setup lang="ts">
export interface Props {
  school: string
  program: string
  startEnd: string
  location: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {})
</script>
<template>
  <div class="mb-2 p-2">
    <div class="grid grid-cols-2 border-b mb-1">
      <span class="col-span-1 font-bold">{{ school }}</span>
      <span class="col-span-1 text-right font-bold">{{ location }}</span>
    </div>
    <div class="grid grid-cols-2">
      <span class="col-span-1 ">{{ program }}</span>
      <span class="col-span-1 text-right">{{ startEnd }}</span>
    </div>
  </div>
</template>
