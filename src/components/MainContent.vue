<script setup lang="ts">
// vite-env.d.ts
/// <reference types="@modyfi/vite-plugin-yaml/modules" />
import { ref } from 'vue'
import type { Ref } from 'vue'
import ProjectItem from './ProjectItem.vue'
import CloseIcon from './icons/CloseIcon.vue'
import ProjectsYAML from '@/assets/projects.yaml'
import TagColour from '@/assets/functions/TagColour'

export interface Project {
  title: string | undefined
  image: string | undefined
  description?: string | undefined
  year: string | undefined
  tags: Array<string> | undefined
  link: string | undefined
  fullDesc?: string
}

const projects: Ref<Array<Project>> = ref([...ProjectsYAML[0].projects])
const expanded: Ref<Boolean> = ref(false)
const selectedProject: Ref<Project> = ref({
  title: undefined,
  image: undefined,
  description: undefined,
  year: undefined,
  tags: undefined,
  link: undefined
})

const expandProject = (project: Project) => {
  selectedProject.value = {} as Project
  selectedProject.value = project
  expanded.value = true
}

const closeProject: VoidFunction = () => {
  expanded.value = false
}

const parseImage = (url: string | undefined) => {
  return new URL(`../assets/project_thumbnails/${url}`, import.meta.url).href
}
</script>

<template>
  <div v-if="!expanded">
    <h2
      class="font-black 2xl:text-5xl text-3xl text-center antialiased mb-4 text-sky-600 hover:text-sky-400 transition-all drop-shadow-sm"
    >
      Projects
    </h2>
    <div class="grid grid-cols-3 gap-2 overflow-scroll">
      <ProjectItem
        v-for="(project, i) in projects"
        @click="expandProject(project)"
        :title="project.title"
        :year="project.year"
        :link="project.link"
        :card-image="project.image"
        :description="project.description"
        :tags="project.tags"
        :key="i"
      />
    </div>
  </div>
  <div v-if="expanded" class="h-full relative">
    <button
      @click="closeProject()"
      title="Back to projects"
      class="p-1 bg-red-500/50 z-30 hover:bg-red-500 hover:shadow-md rounded-md absolute transform transition-all"
    >
      <CloseIcon />
    </button>
    <h2
      class="font-black 2xl:text-3xl text-2xl text-center antialiased mb-2 text-slate-600 transition-all drop-shadow-sm"
    >
      {{ selectedProject.title }}
    </h2>
    <div class="grid grid-cols-3 gap-4 h-full mt-4">
      <div class="col-span-2">
        <img :src="parseImage(selectedProject.image)" class="w-full mx-auto rounded-lg border-2" />
        <div class="w-full border-2 rounded-lg mt-2 p-2">
          <h3>Tags:</h3>
          <div class="mt-2">
            <span
              v-for="(tag, i) in selectedProject.tags"
              v-bind:key="i"
              class="text-white text-lg p-1 mr-1 rounded-md"
              :class="TagColour(tag)"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <p v-html="selectedProject.fullDesc == undefined ? selectedProject.description : selectedProject.fullDesc"></p>
        <br />
        <a :href="selectedProject.link" target="_blank"
          ><button class="p-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg">
            Check out the project here!
          </button></a
        >
      </div>
    </div>

    <p></p>
  </div>
</template>
