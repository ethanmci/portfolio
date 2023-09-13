<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import FeedbackBox from '@/components/FeedbackBox.vue'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const subject: Ref<string> = ref('')
const message: Ref<string> = ref('')
const submitted: Ref<boolean> = ref(false)
const status: Ref<boolean> = ref(false)
const statusMessage: Ref<string> = ref('')

function NewMessage() {
  // resetting the value
  submitted.value = false
}

function ValidateEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return (regex.test(email))
}

function HandleContactUpdate(): void {
  let subOut: Array<string> = []
  if (!name.value) subOut.push('Name')
  if (!ValidateEmail(email.value)) subOut.push('Email')
  if (!message.value) subOut.push('Message')

  if (subOut.length == 0) {
    status.value = true
    statusMessage.value = ''
  } else {
    let out: string = ''
    for(let i = 0; i < subOut.length; i++) {
      if(i != 0) out += ", "
      out += subOut[i]
    }
    statusMessage.value = `${out} field${subOut.length > 1 ? 's are' : ' is'} empty or invalid.`
    status.value = false
  }
} 

async function SubmitContact(event: Event) {
  event.preventDefault()
  if (!name.value) return
  if (!email.value) return
  if (!message.value) return

  // converting the entered and validated date to JSON
  const json: string = JSON.stringify({
    access_key: WEB3FORMS_ACCESS_KEY,
    name: name.value,
    email: email.value,
    subject: subject.value.length > 0 ? subject.value : 'Message',
    message: message.value
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
    submitted.value = true
  }
}

watch([name, email, subject, message], () => HandleContactUpdate())

onMounted(() => HandleContactUpdate())
</script>

<template>
  <main class="transition-all">
    <div v-if="!submitted">
      <h2
        class="font-black 2xl:text-5xl text-3xl text-center antialiased text-sky-600 hover:text-sky-400 transition-all drop-shadow-sm"
      >
        Contact!
      </h2>
      <p class="text-sm text-center text-slate-500">(feel free to contact me on linkedin also)</p>
      <br />
      <FeedbackBox v-if="!status" type="danger" :message="statusMessage" />
      <form class="grid grid-cols-2">
        <div class="md:col-span-1 col-span-2 md:mr-4 mb-2">
          <label for="name"><span class="text-red-500">*</span>Name</label>
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
          <label for="email"><span class="text-red-500">*</span>Email</label>
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
          <label for="email"><span class="text-red-500">*</span>Message</label>
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
            :class="{
              'bg-orange-600 hover:bg-orange-700': status,
              'bg-slate-600 cursor-not-allowed': !status
            }"
            class="p-4 rounded-md text-white font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div v-else class="flex flex-col items-center">
      <p class="text-center antialiased text-xl">Thanks for contacting me!</p>
      <br />
      <button
        @click="NewMessage()"
        class="p-4 bg-orange-600 hover:bg-orange-700 rounded-md text-white font-bold"
      >
        Submit another message
      </button>
    </div>
  </main>
</template>
