<template>
  <footer class="px-4 md:px-8">
    <div
      v-reveal
      class="relative max-w-8xl mx-auto bg-brand-dark rounded-t-[1.25rem] p-12 md:p-24 lg:p-32 text-brand-bg overflow-hidden shadow-2xl flex flex-col items-center text-center animate-slide-up"
    >
      <!-- Grain Overlay pour texture premium -->
      <div
        class="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"
      ></div>

      <!-- Subtle Gradient Glow -->
      <div
        class="absolute -top-24 -left-24 w-96 h-96 bg-brand-bg/5 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <!-- Main Content -->
      <div class="relative z-10 max-w-5xl">
        <h2
          v-reveal
          class="text-5xl md:text-6xl lg:text-8xl font-serif font-extralight leading-[1.05] tracking-tighter mb-16 animate-slide-up"
        >
          Sublimons votre <br />
          <span class="italic font-normal text-brand-bg/90"
            >communication.</span
          >
        </h2>

        <div class="flex flex-col items-center gap-12">
          <BaseButton
            label="Réserver un appel gratuit"
            size="md"
            variant="white"
            href="https://calendly.com/aliciaambroise-agency/30min?month=2025-12"
          />

          <!-- Separator -->
          <div class="flex items-center gap-6 opacity-20">
            <div class="w-12 md:w-36 h-[0.5px] bg-brand-bg"></div>
            <span
              class="text-[10px] font-sans font-bold tracking-[0.4em] uppercase"
              >ou</span
            >
            <div class="w-12 md:w-36 h-[0.5px] bg-brand-bg"></div>
          </div>

          <div class="flex flex-col items-center">
            <p
              class="text-[10px] font-sans font-bold tracking-[0.5em] uppercase opacity-30 mb-2"
            >
              Me contacter
            </p>
            <a
              href="mailto:aliciaambroise.agency@gmail.com"
              class="group relative text-xl md:text-4xl font-serif italic tracking-tight"
            >
              aliciaambroise.agency@gmail.com
              <span
                class="absolute -bottom-3 left-0 w-full h-[0.5px] bg-brand-bg/20 scale-x-100 transition-transform duration-700 ease-in-out group-hover:scale-x-0"
              ></span>
              <span
                class="absolute -bottom-3 left-0 w-full h-[0.5px] bg-brand-bg scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100 origin-left"
              ></span>
            </a>
          </div>
        </div>
      </div>

      <!-- Discreet Footer Links -->
      <div
        class="relative z-10 mt-16 w-full pt-16 border-t border-brand-bg/5 grid grid-cols-1 md:grid-cols-2 gap-12 items-start opacity-60 text-xs font-sans tracking-widest uppercase"
      >
        <div class="flex flex-col gap-4">
          <p class="opacity-40 font-bold">Réseaux</p>
          <div class="flex justify-center gap-8">
            <a href="#" class="hover:opacity-100 transition-opacity"
              >LinkedIn</a
            >
            <a href="#" class="hover:opacity-100 transition-opacity"
              >Instagram</a
            >
            <a href="#" class="hover:opacity-100 transition-opacity">Twitter</a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <p class="opacity-40 font-bold">Crédits</p>
          <p>
            Site développé par
            <span class="underline">Thomas LY</span>.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseButton from "./UIElements/BaseButton.vue";
// L'épure par excellence
</script>

<style scoped></style>
