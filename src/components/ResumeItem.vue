<script setup lang="ts">
export interface Props {
    role?: string
    location?: string
    startDate?: string
    endDate?: string
    description?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {

})

</script>
<template>
<div >
    {{ role }}
    {{ location }}
    {{ startDate }}
    {{ endDate }}
    <p class="truncate">{{ description }}</p>
</div>
</template>