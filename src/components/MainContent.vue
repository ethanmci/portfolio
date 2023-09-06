<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import ProjectItem from './ProjectItem.vue'
export interface Project {
  title: string
  image: undefined
  description?: string
  year: string
}


const projects: Ref<Array<Project>> = ref([
  {
    title: 'Capy Island',
    image: undefined,
    description: 'A party game where players, who are capybaras, play mini-games on an island to collect hats',
    year: '2023'
  },
  {
    title: 'Capy Island',
    image: undefined,
    description: '',
    year: '2023'
  },
])
</script>

<template>
  <div>
    <ProjectItem
      v-for="(project, i) in projects"
      v-bind:title="project.title"
      v-bind:card-image="project.image"
      v-bind:description="project.description"
      v-bind:year="project.year"
      v-bind:key="i"
    />
  </div>
</template>
