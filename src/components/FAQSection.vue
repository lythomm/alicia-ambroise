<script setup>
import { ref } from "vue";

const faqs = [
  {
    question: "Combien de temps dure une mission type ?",
    answer:
      "La durée varie selon vos besoins : une stratégie globale de communication prend généralement 3 à 4 semaines de conception. Les missions d'accompagnement réseaux sociaux ou SEO s'inscrivent souvent sur le long terme pour garantir des résultats durables.",
  },
  {
    question: "Quelles sont vos méthodes de travail ?",
    answer:
      "Je privilégie une approche collaborative. Chaque projet commence par une phase d'immersion dans votre univers de marque, suivie de recommandations stratégiques précises et d'une mise en œuvre créative rigoureuse.",
  },
  {
    question: "Proposez-vous un accompagnement mensuel ?",
    answer:
      "Tout à fait. Je propose des forfaits mensuels pour la gestion de vos réseaux sociaux, la rédaction de contenus SEO ou le conseil stratégique continu, afin d'assurer la cohérence de votre image de marque.",
  },
  {
    question: "Comment débuter notre collaboration ?",
    answer:
      "Nous commençons par un appel découverte gratuit pour échanger sur vos objectifs. Si nos visions s'alignent, je vous fais parvenir une proposition détaillée pour lancer la phase stratégique.",
  },
];

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="px-4 md:px-8 flex flex-col items-center">
    <div
      class="max-w-8xl w-full bg-white rounded-[1.25rem] p-8 md:p-20 shadow-sm border border-black/5 relative overflow-hidden"
    >
      <!-- Premium Texture Overlay -->
      <div
        class="absolute inset-0 opacity-[0.02] pointer-events-none bg-grain mix-blend-multiply"
      ></div>

      <div class="relative z-10">
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <!-- Left: Title & Intro -->
          <div v-reveal class="lg:w-1/3 animate-fade-in-up">
            <div v-reveal class="overflow-hidden mb-6">
              <span
                class="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dark/30 block animate-slide-up-text"
                >Assistance</span
              >
            </div>
            <h2
              class="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-8"
            >
              Questions <br class="hidden lg:block" />
              <span class="italic text-brand-dark/80">fréquemment</span>
              <br class="hidden lg:block" />
              posées
            </h2>
            <p
              class="text-xl text-brand-dark/50 font-light leading-relaxed max-w-sm"
            >
              Tout ce que vous devez savoir sur notre future collaboration et
              mon processus stratégique.
            </p>
          </div>

          <!-- Right: FAQ Accordion -->
          <div class="lg:w-2/3">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              v-reveal
              class="border-b border-brand-dark/5 animate-fade-in-up last:border-none"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <button
                @click="toggle(index)"
                class="w-full flex justify-between items-center py-8 text-left group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              >
                <span
                  class="text-xl md:text-2xl font-serif tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  :class="
                    activeIndex === index
                      ? 'text-brand-dark'
                      : 'text-brand-dark/70'
                  "
                >
                  {{ faq.question }}
                </span>
                <div
                  class="relative w-8 h-8 flex items-center justify-center rounded-full border border-brand-dark/10 group-hover:border-brand-dark/30 transition-colors duration-500"
                >
                  <div
                    class="absolute w-3 h-[1.5px] bg-brand-dark transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  ></div>
                  <div
                    class="absolute w-3 h-[1.5px] bg-brand-dark transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    :class="
                      activeIndex === index
                        ? 'rotate-0 opacity-0'
                        : 'rotate-90 opacity-100'
                    "
                  ></div>
                </div>
              </button>

              <div
                class="grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                :class="
                  activeIndex === index
                    ? 'grid-rows-[1fr] opacity-100 mb-10'
                    : 'grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <p
                    class="text-lg md:text-xl text-brand-dark/50 font-light leading-relaxed max-w-2xl"
                  >
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
