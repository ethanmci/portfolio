<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    class="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
  ></div>
  <img
    id="name-stacked"
    class="select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    src="./assets/name-stacked.png"
  />
  <div
    id="main-container"
    class="absolute w-3/4 h-3/4 bg-slate-50/70 p-8 border-2 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <div class="grid grid-cols-4 h-full gap-4">
      <div class="relative col-span-1 h-full p-4 bg-slate-50 border-2 border-slate-500 rounded-lg shadow-md">
        <div class="absolute top-0 w-full mt-4">
          <h1 class="font-black font-bricolage 2xl:text-7xl text-5xl antialiased text-sky-900 hover:text-sky-700 transition-all mix-blend-hard-light drop-shadow-sm">Ethan McIntyre</h1>
        </div>
        <img class="rounded-full mt-24 mb-4 w-full" src="./assets/photo_of_me.jpg">
        <StarIconVue/>
        <p class="font-bricolage">Hello, my name is Ethan! I'm a graduate from the Interactive Multimedia Design program at Carleton University with a specialization in Full-Stack Web Development.</p>
      </div>

      <!-- contains nav menu -->
      <div class="col-span-3 h-full bg-slate-50 border-2 border-slate-500 rounded-lg shadow-md">
        <ul class="w-full grid-cols-3">
          <li class="col-span-1">
            <a href="#" class="text-center font-bold inline-block p-4 border-x-2 border-t-2 border-slate-500 rounded-t-full hover:text-gray-600 hover:bg-gray-50">Projects</a>
          </li>
          <li class="col-span-1">
            <a href="#" class="text-center font-bold inline-block p-4 border-x-2 border-t-2 border-slate-500 rounded-t-full hover:text-gray-600 hover:bg-gray-50">Contact</a>
          </li>
        </ul>
        <header>
          <div class="wrapper">
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/resume">Resume</RouterLink>
              <RouterLink to="/contact">Contact</RouterLink>
            </nav>
          </div>
        </header>
        <RouterView />
      </div>
    </div>
  </div>
</template>
