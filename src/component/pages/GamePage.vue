<template>
  <HeroHeader
    title="Fungi Forager spielen"
    subtitle="Starte deine Expedition durch den Pilzwald"
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

  <main class="parallax-main">
    <div class="relative z-10 pt-[120px] sm:pt-[180px]">
      <section class="max-w-5xl mx-auto px-4 py-10 text-white">
        <p class="text-m mb-6">
          Schlüpfe in die Rolle einer Pilzforscher:in, streife durch den Wald und entdecke neue Arten. Am
          besten spielst du am Desktop mit Kopfhörern und einem großen Bildschirm.
        </p>
        <!-- Desktop Actions -->
        <div class="hidden lg:block">
          <div class="flex flex-wrap gap-6 mt-8">
            <Button variant="red" @click="scrollToGame">Spiel starten</Button>
            <Button variant="white" @click="openInNewTab">Im neuen Tab öffnen</Button>
          </div>
          <p class="mt-4 text-sm text-emerald-200/80">
            Tipp: In der Vollbildansicht läuft das Spiel am flüssigsten.
          </p>
        </div>

        <!-- Mobile Notice -->
        <div class="lg:hidden mt-8 p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
          <h3 class="text-xl font-bold text-emerald-300 mb-2">Nur am Laptop spielbar</h3>
          <p class="text-white text-lg leading-relaxed">
            Das Spiel kann nur auf einem Laptop oder Desktop-PC gespielt werden. Bitte besuche diese
            Seite auf einem Laptop, um das Spiel auszuprobieren.
          </p>
        </div>
      </section>

      <section ref="gameSectionRef" class="max-w-6xl mx-auto px-4 pb-16 hidden lg:block">
        <div class="game-shell">
          <iframe
            class="game-frame"
            title="Fungi Forager WebGL"
            src="/webgl/fungi-forager/index.html"
            loading="lazy"
            allowfullscreen
            allow="fullscreen"
            scrolling="no"
          ></iframe>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroHeader from '../HeroHeader.vue'
import Button from '../Button.vue'
import heroImage from '../../assets/hintergrundbild/platzhalter_wald.jpeg'

const gameSectionRef = ref<HTMLElement | null>(null)

const scrollToGame = () => {
  gameSectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const openInNewTab = () => {
  window.open('/webgl/fungi-forager/index.html', '_blank', 'noopener')
}
</script>

<style scoped>
.game-shell {
  position: relative;
  width: 100%;
  padding-top: 66.5%;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.4),
    inset 0 0 40px rgba(0, 0, 0, 0.5);
}

.game-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  overflow: hidden;
  scrollbar-width: none;
}

@media (max-width: 768px) {
  .game-shell {
    padding-top: 75%;
  }
}
</style>
