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
    class="absolute md:w-5/6 md:h-3/4 md:m-0 h-full w-full overflow-auto bg-slate-50/70 p-8 border-2 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <div class="relative grid grid-cols-4 h-full gap-4">
      <div
        class="relative lg:col-span-1 col-span-4 h-full p-4 bg-slate-50 border-2 border-slate-500 rounded-lg shadow-md"
      >
        <div class="absolute top-0 w-full mt-4">
          <h1
            class="font-black font-bricolage 2xl:text-5xl text-6xl antialiased text-sky-900 hover:text-sky-700 transition-all mix-blend-hard-light drop-shadow-sm"
          >
            Ethan<br/>McIntyre
          </h1>
        </div>
        <img
          alt="A Photo of Ethan McIntyre, incredibly hirable web developer and creator of this website"
          class="rounded-full md:mt-18 mt-16 mb-4 w-full"
          src="./assets/photo_of_me.jpg"
        />

        <div class="flex flex-auto place-content-center w-full mb-2">
          <a href="https://github.com/ethanmci" class="block">
            <img
              alt="GitHub Logo"
              class="transition-all cursor-pointer md:w-10 w-12 hover:invert hover:hue-rotate-30 hover:contrast-50"
              src="./assets/icons/github-square.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/ethansndrmc/" class="block">
            <img
              alt="LinkedIn Logo"
              class="transition-all cursor-pointer md:w-10 w-12 hover:invert hover:hue-rotate-30 hover:contrast-50"
              src="./assets/icons/linkedin-square.svg"
            />
          </a>
        </div>
          <p class="font-bricolage">
            Hi I'm Ethan! I'm a Web Developer and very bad at writing good bios.
          </p>
      </div>

      <!-- contains nav menu, hidden and moved  -->
      <div
        class="md:col-span-3 md:block hidden h-full bg-slate-50 border-2 border-slate-500 rounded-lg shadow-md"
      >
        <ul class="w-full grid-cols-3">
          <li class="col-span-1">
            <a
              href="#"
              class="text-center font-bold inline-block p-4 border-x-2 border-t-2 border-slate-500 rounded-t-full hover:text-gray-600 hover:bg-gray-50"
              >Projects</a
            >
          </li>
          <li class="col-span-1">
            <a
              href="#"
              class="text-center font-bold inline-block p-4 border-x-2 border-t-2 border-slate-500 rounded-t-full hover:text-gray-600 hover:bg-gray-50"
              >Contact</a
            >
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
