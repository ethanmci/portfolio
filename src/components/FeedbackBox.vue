<script setup lang="ts">
export interface Props {
  type?: string
  message: string
}

// TODO: finish implementing this so the contact form can have live feedback

const TypeHandler = (type: string | undefined) => {
  switch (type) {
    case 'warn':
      return 'bg-yellow-600/70'
    case 'danger':
      return 'bg-red-600/70'
    default: 
      return 'bg-sky-600/70'
  }
} 

const props = withDefaults(defineProps<Props>(), {
  message: 'The dialog text!'
})

</script>
<template>
  <div
    class="flex items-center justify-center p-3 rounded-md"
    :class="TypeHandler(type)"
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
        {{ message }}
      </p>
    </div>
  </div>
</template>
