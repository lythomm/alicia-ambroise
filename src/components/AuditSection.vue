<script setup>
import { ref } from "vue";
import BaseButton from "./UIElements/BaseButton.vue";

const auditCards = ref([
  {
    number: "01",
    text: "Analyse stratégique : un regard expert sur votre communication actuelle et votre image de marque.",
    delay: "0.3s",
  },
  {
    number: "02",
    text: "Plan d'action : 30 min d'échange pour identifier vos priorités et définir vos prochaines étapes.",
    delay: "0.4s",
  },
]);
</script>

<template>
  <section class="px-4 md:px-8 flex flex-col items-center">
    <!-- Main Card Container -->
    <div
      class="max-w-8xl w-full bg-white rounded-[1.25rem] p-8 md:p-20 shadow-sm border border-black/5 relative overflow-hidden"
    >
      <!-- Premium Texture Overlay -->
      <div
        class="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain mix-blend-multiply"
      ></div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <!-- Subtitle -->
        <p v-reveal class="font-sans text-xl md:text-2xl animate-fade-in-up">
          Vous ne savez pas par où commencer ?
        </p>

        <!-- Main Title -->
        <h2
          v-reveal
          class="text-4xl md:text-6xl font-serif text-brand-dark leading-tight mb-12 animate-fade-in-up"
          style="animation-delay: 0.1s"
        >
          Commencez avec un
          <span class="relative inline-block">
            <span class="italic font-normal">audit offert</span>
            <svg
              class="absolute -bottom-2 left-0 w-full h-2 text-[#E8A594]/60"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,15 Q75,5 150,15 T300,15"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h2>

        <!-- Cards Grid -->
        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div
            v-for="(card, index) in auditCards"
            :key="index"
            v-reveal
            class="border border-black/30 p-5 md:p-8 rounded-[1.25rem] text-center transition-all duration-500 animate-fade-in-up"
            :style="{ animationDelay: card.delay }"
          >
            <span
              class="text-[12px] font-mono text-brand-dark leading-relaxed"
              >{{ card.number }}</span
            >
            <h3
              class="text-xl md:text-2xl font-sans! font-normal! text-brand-dark leading-relaxed"
            >
              {{ card.text }}
            </h3>
          </div>
        </div>

        <!-- CTA Button -->
        <div v-reveal class="animate-fade-in-up" style="animation-delay: 0.5s">
          <BaseButton
            label="Réserver mon audit gratuit"
            size="md"
            href="https://calendly.com/aliciaambroise-agency/30min?month=2025-12"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>
