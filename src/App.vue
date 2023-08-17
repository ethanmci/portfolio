<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'

const route = useRouter()
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
    class="absolute z-10 w-1/3 flex items-center justify-center p-3 rounded-md bg-yellow-600/50 top-2 left-1/2 transform -translate-x-1/2"
  >
    <div class="inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-2 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <p class="inline">
        This site is currently under construction, thanks for checking it out though!
      </p>
    </div>
  </div>
  <div
    id="main-container"
    class="absolute md:w-5/6 md:h-5/6 md:m-0 h-full w-full overflow-auto bg-slate-50/70 p-4 border-2 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bricolage"
  >
    <div class="relative grid grid-cols-4 h-full gap-4">
      <div
        class="relative lg:col-span-1 col-span-4 h-full p-4 bg-slate-50 border-2 border-slate-500 rounded-lg shadow-md"
      >
        <div class="absolute top-0 w-full mt-4">
          <h1
            class="font-black 2xl:text-5xl text-6xl antialiased text-sky-900 hover:text-sky-700 transition-all mix-blend-hard-light drop-shadow-sm"
          >
            Ethan<br />McIntyre
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
        <p class="text-stone-800">
          Hi I'm Ethan! I'm a Web Developer and very bad at writing good bios.
        </p>
      </div>

      <!-- contains nav menu, hidden and moved to one  on small screens -->
      <div
        class="md:col-span-3 md:block hidden h-full bg-slate-50 border-2 border-slate-500 rounded-lg shadow-md"
      >
        <header>
          <ul class="w-full grid grid-cols-3 gap-2 pt-2 px-2 rounded-lg text-stone-800">
            <li class="col-span-1">
              <RouterLink
                to="/"
                :class="{
                  'bg-sky-600 border-sky-600 text-white': route.currentRoute.value.path == '/',
                  'border-slate-200': route.currentRoute.value.path != '/'
                }"
                class="w-full text-center font-bold inline-block p-2 border-x-2 border-t-2 rounded-t-full hover:text-white hover:bg-sky-600 hover:border-sky-600 transition-all"
                >Home</RouterLink
              >
            </li>
            <li class="col-span-1">
              <RouterLink
                to="/resume"
                :class="{
                  'bg-sky-600 border-sky-600 text-white':
                    route.currentRoute.value.path == '/resume',
                  'border-slate-200': route.currentRoute.value.path != '/resume'
                }"
                class="w-full text-center font-bold inline-block p-2 border-x-2 border-t-2 rounded-t-full hover:text-white hover:bg-sky-600 hover:border-sky-600 transition-all"
                >Resume</RouterLink
              >
            </li>
            <li class="col-span-1">
              <RouterLink
                to="/contact"
                :class="{
                  'bg-sky-600 border-sky-600 text-white':
                    route.currentRoute.value.path == '/contact',
                  'border-slate-200': route.currentRoute.value.path != '/contact'
                }"
                class="w-full text-center font-bold inline-block p-2 border-x-2 border-t-2 rounded-t-full hover:text-white hover:bg-sky-600 hover:border-sky-600 transition-all"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </header>
        <RouterView class="border-t-2 border-slate-200 font-bricolage p-4 text-stone-800" />
      </div>
    </div>
  </div>
</template>
