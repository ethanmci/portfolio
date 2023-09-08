<script setup lang="ts">
// vite-env.d.ts
/// <reference types="@modyfi/vite-plugin-yaml/modules" />
import ResumeYAML from '@/assets/resume.yaml'
import resumeUrl from '../assets/Ethan_McIntyre_Resume.pdf'
import ExperienceResumeItem from '@/components/ExperienceResumeItem.vue';
import EducationResumeItem from '@/components/EducationResumeItem.vue';
import { ref } from 'vue'
import type { Ref } from 'vue'
import { type Experience, type Education } from '@/assets/types'

const experience: Ref<Array<Experience>> = ref([...ResumeYAML[0].experience])
const education: Ref<Array<Education>> = ref([...ResumeYAML[1].education])
</script>

<template>
  <main class="h-max">
    <h2
      class="font-black 2xl:text-5xl text-3xl text-center antialiased mb-4 text-sky-600 hover:text-sky-400 transition-all drop-shadow-sm"
    >
    Resume
    </h2>
    <div class="overflow-y-auto h-full">
      <h3 class="text-2xl font-bold text-center mb-2">Experience</h3>
      <ExperienceResumeItem v-for="(job, i) in experience" :key="i"
        :title="job.title"
        :company="job.company"
        :start-end="job.startEnd"
        :location="job.location"
        :tasks="job.tasks"
      />
      <br>
      <h3 class="text-2xl font-bold text-center mb-2">Education</h3>
      <EducationResumeItem v-for="(edu, i) in education" :key="i"
        :school="edu.school"
        :program="edu.program"
        :start-end="edu.startEnd"
        :location="edu.location"
      />
    </div>
    <a :href="resumeUrl" download>
      <button class="p-4 bg-orange-600 hover:bg-orange-700 rounded-md text-white font-bold mx-auto">Download the PDF version!</button>
    </a>
  </main>
</template>