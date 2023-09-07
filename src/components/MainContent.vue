<script setup lang="ts">
// vite-env.d.ts
/// <reference types="@modyfi/vite-plugin-yaml/modules" />
import { ref } from 'vue'
import type { Ref } from 'vue'
import ProjectItem from './ProjectItem.vue'
import ProjectsYAML from '@/assets/projects.yaml'

export interface Project {
  title: string
  image: undefined
  description?: string
  year: string
  tags: Array<string>
  link: string
}

const projects: Ref<Array<Project>> = ref([...ProjectsYAML[0].projects])
</script>

<template>
  <h2 class="font-black 2xl:text-5xl text-3xl text-center antialiased mb-4 text-sky-600 hover:text-sky-400 transition-all drop-shadow-sm">Projects</h2>
  <div class="grid grid-cols-3 gap-2 overflow-scroll">
    <ProjectItem
      v-for="(project, i) in projects"
      v-bind:title="project.title"
      v-bind:year="project.year"
      v-bind:link="project.link"
      v-bind:card-image="project.image"
      v-bind:description="project.description"
      v-bind:tags="project.tags"
      v-bind:key="i"
    />
  </div>
</template>
