<template>
  <header :class="headerClass" :style="backgroundStyle">
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
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },
  fullScreen: { type: Boolean, default: false },
  sticky: { type: Boolean, default: true },
  parallax: { type: Boolean, default: true },
  collapseOffset: { type: Number, default: 60 },
  collapseDelayMs: { type: Number, default: 200 },
  collapseOnScroll: { type: Boolean, default: false },
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${props.image}')`,
}))

const collapsed = ref(false)
let collapseTimer

function onScroll() {
  if (window.scrollY > props.collapseOffset && !collapsed.value) {
    window.clearTimeout(collapseTimer)
    collapseTimer = window.setTimeout(() => {
      collapsed.value = true
    }, props.collapseDelayMs)
  } else if (window.scrollY <= props.collapseOffset && collapsed.value) {
    window.clearTimeout(collapseTimer)
    collapsed.value = false
  }
}

onMounted(() => {
  if (props.collapseOnScroll) {
    window.addEventListener('scroll', onScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  if (props.collapseOnScroll) {
    window.removeEventListener('scroll', onScroll)
    window.clearTimeout(collapseTimer)
  }
})

const headerClass = computed(() => [
  'w-full',
  collapsed.value ? 'h-0' : props.fullScreen ? 'h-screen' : 'h-64 md:h-80',
  'bg-center bg-cover',
  props.parallax ? 'bg-fixed' : '',
  props.sticky ? 'sticky top-0' : '',
  'flex items-center justify-center relative select-none z-0',
  'hero-sticky',
  props.collapseOnScroll && collapsed.value ? 'hero-collapsed' : '',
])
</script>

<style scoped>
.hero-sticky {
  transition:
    height 400ms ease,
    transform 400ms ease,
    opacity 300ms ease;
  will-change: height, transform, opacity;
}
.hero-collapsed {
  transform: translateY(-24px);
  opacity: 0.85;
  overflow: hidden;
}
</style>
