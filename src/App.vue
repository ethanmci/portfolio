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
    class="absolute w-3/4 h-3/4 bg-slate-50 p-8 border-2 border-emerald-500 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <div class="grid grid-cols-4 h-full gap-4">
      <div class="col-span-1 h-full p-4 rounded-lg shadow-md">
        <h1 class="font-black text-7xl antialiased text-emerald-500 hover:text-emerald-700 transition-all">Ethan McIntyre</h1>
        <h2 class="font-bold text-xl antialiased">Web Developer</h2>
        <img class="relative rounded-xl my-4" src="./assets/photo_of_me.jpg">
        <p>Hello, my name is Ethan! I'm a graduate from the Interactive Multimedia Design program at Carleton University with a specialization in Full-Stack Web Development</p>
      </div>

      <!-- contains nav menu -->
      <div class="col-span-3 h-full border-2 p-4 border-slate-400 rounded-lg shadow-md">
        <header>
          <div class="wrapper">
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/contact">About</RouterLink>
            </nav>
          </div>
        </header>
        <RouterView />
      </div>
    </div>
  </div>
</template>
