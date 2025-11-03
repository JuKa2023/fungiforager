<template>
  <header
    class="w-full h-64 md:h-80 bg-center bg-cover flex items-center justify-center relative"
    :style="backgroundStyle"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Title -->
    <div class="relative text-center px-4">
      <h1 class="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
        {{ title }}
      </h1>

      <p v-if="subtitle" class="mt-2 text-lg md:text-xl text-white drop-shadow">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${props.image}')`,
}))
</script>
