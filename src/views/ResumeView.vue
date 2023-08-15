<script setup lang="ts">
import resumeUrl from '../assets/Ethan_McIntyre_Resume.pdf'
</script>

<template>
  <main>
    <p>This will contain my job experience!</p>
    <a :href="resumeUrl" download>
      <button class="p-4 bg-orange-600 hover:bg-orange-700 rounded-md text-white font-bold">Download the PDF version!</button>
    </a>
  </main>
</template>