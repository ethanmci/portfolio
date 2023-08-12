<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div
    class="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
  ></div>
  <img id="name-stacked" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="./assets/name-stacked.png">
  <div id="main-container" class="absolute w-2/3 h-2/3 bg-white border-2 p-4 border-slate-800 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    <header>
      <h1 class="">Ethan McIntyre</h1>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
