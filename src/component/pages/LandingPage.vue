<!-- src/component/layout/BasePage.vue -->
<template>
  <HeroHeader
    title="Willkommen im Wald der Pilze"
    :image="heroImage"
    :fullScreen="true"
    :sticky="true"
    :parallax="false"
    :enableScrollEffects="true"
    :maxScale="1.2"
    :baseOverlayOpacity="0.35"
    :maxExtraOverlayOpacity="0.55"
    :scrollText="true"
    :textScrollFactor="0.4"
    :maxTextShiftPx="150"
    :fadeTextOnScroll="true"
    :textFadeStrength="1.2"
  />
  <!--
    Konfiguration für HeroHeader:
    - fullScreen: Nimmt 100vh ein
    - sticky: Bleibt fixiert, während der Inhalt darüber scrollt
    - enableScrollEffects: Aktiviert Skalierungs- und Opazitätsänderungen beim Scrollen
    - scrollText/fadeTextOnScroll: Animiert den Titeltext beim Scrollen
  -->
  <main class="parallax-main">
    <div class="relative z-10 pt-[120px] sm:pt-[180px]">
      <section class="max-w-5xl mx-auto px-4 py-10">
        <p class="text-m mb-6 text-white">
          Fungi Forager ist ein interaktives Lernspiel, das dich in eine 3D-Waldwelt entführt. So lernst du auf spielerische Art Pilzarten zu bestimmen.
        </p>
        <div class="flex justify-center gap-16 mt-16">
          <Button variant="white" @click="router.push({ name: 'ueberuns' })">Über Uns</Button>
          <Button variant="red" @click="router.push({ name: 'spielinformation' })">Zum Spiel</Button>
        </div>
      </section>
      <section class="max-w-5xl mx-auto px-4 py-10 mt-24">
        <h2 class="text-3xl font-bold mb-6 text-white">Unsere Mission</h2>
        <p class="text-m mb-6 text-white">
          Immer weniger junge Menschen verbringen Zeit in der Natur und kennen sich so dann weniger mit der Natur aus. Mit Fungi Forager möchten wir einen Teil von diesem Wissen zurückbringen.
        </p>
      </section>
      <div class="max-w-5xl mx-auto px-4 py-10 mt-24">
        <NewsSection title="Neuigkeiten aus dem Wald" :articles="articles" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NewsSection from '../News.vue'
import HeroHeader from '../HeroHeader.vue'
import Button from '../Button.vue'
import { newsItems } from '../../data/news.ts'
import heroImage from '../../assets/hintergrundbild/wald_von_oben.png'

const router = useRouter()
const articles = ref(newsItems)
</script>
