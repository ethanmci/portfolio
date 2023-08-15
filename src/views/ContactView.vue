<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const subject: Ref<string> = ref('')
const message: Ref<string> = ref('')

async function SubmitContact(event: Event) {
  event.preventDefault()
  if (!name.value) return
  if (!email.value) return
  if (!message.value) return

  // converting the entered and validated date to JSON
  const json = JSON.stringify({
    access_key: WEB3FORMS_ACCESS_KEY,
    name: name.value,
    email: email.value,
    message: message.value,
  })

  // fetching
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: json
  })

  const result = await res.json()
  if (result.success) {
    console.log(result)
  }
}
</script>

<template>
  <main class="p-4 font-bricolage">
    <h2
      class="font-black 2xl:text-5xl text-3xl text-center antialiased text-sky-900 hover:text-sky-700 transition-all mix-blend-hard-light drop-shadow-sm"
    >
      Contact!
    </h2>
    <p class="text-sm text-center text-slate-500">(feel free to contact me on linkedin also)</p>
    <br />
    <form class="grid grid-cols-2">
      <div class="md:col-span-1 col-span-2 md:mr-4 mb-2">
        <label for="name">*Name</label>
        <input
          v-model="name"
          name="name"
          :class="{ 'border-slate-500': name, 'border-red-500': !name }"
          class="border-2 p-2 rounded-md block w-full"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div class="md:col-span-1 col-span-2 mb-2">
        <label for="email">*Email</label>
        <input
          v-model="email"
          name="email"
          :class="{ 'border-slate-500': email, 'border-red-500': !email }"
          class="border-2 p-2 rounded-md block w-full"
          type="email"
          placeholder="example@email.com"
        />
      </div>
      <div class="col-span-2 mb-2">
        <label for="subject">Subject</label>
        <input
          v-model="subject"
          name="subject"
          class="border-2 border-slate-500 p-2 rounded-md block w-full"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div class="col-span-2 mb-2">
        <label for="email">*Message</label>
        <textarea
          v-model="message"
          name="message"
          :class="{ 'border-slate-500': message, 'border-red-500': !message }"
          class="border-2 p-2 rounded-md block w-full h-28"
          type="text"
          placeholder="Your message here!"
        ></textarea>
      </div>
      <div class="col-span-2 mb-2 flex flex-col items-center">
        <button
          @click="(e) => SubmitContact(e)"
          type="submit"
          class="p-4 bg-orange-600 rounded-md text-white font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  </main>
</template>
