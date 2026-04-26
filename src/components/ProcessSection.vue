<script setup>
import BaseButton from "./UIElements/BaseButton.vue";

const steps = [
  {
    id: "01",
    title: "Immersion & Audit",
    description:
      "Analyse profonde de votre écosystème pour identifier les leviers de croissance.",
  },
  {
    id: "02",
    title: "Stratégie Sur-Mesure",
    description:
      "Conception d'une feuille de route stratégique unique et d'un angle d'attaque.",
  },
  {
    id: "03",
    title: "Déploiement Créatif",
    description:
      "Mise en œuvre des solutions : du contenu à l'activation des canaux.",
  },
  {
    id: "04",
    title: "Analyse & Optimisation",
    description:
      "Mesure des performances et ajustements pour un impact durable.",
  },
];
</script>

<template>
  <section id="process-v1" class="px-4 md:px-8">
    <div class="max-w-8xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Header Card -->
        <div
          class="lg:col-span-2 bg-brand-dark p-12 rounded-[1.25rem] text-white flex flex-col justify-between min-h-[300px]"
        >
          <span
            class="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40"
            >Méthodologie</span
          >
          <h2 class="text-4xl md:text-6xl font-serif leading-very-tight">
            Comment je <br />
            transforme <br />
            <span class="italic text-brand-muted">votre vision.</span>
          </h2>
        </div>

        <!-- Step Cards -->
        <div
          v-for="(step, index) in steps"
          :key="step.id"
          v-reveal
          class="bg-white p-10 rounded-[1.25rem] border border-black/5 flex flex-col justify-between transition-all duration-500 animate-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="font-serif text-4xl text-brand-dark/10 mb-12">
            {{ step.id }}
          </div>
          <div>
            <h3 class="text-3xl font-serif mb-4">{{ step.title }}</h3>
            <p class="text-brand-dark/50 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>

        <!-- Final CTA Card -->
        <div
          v-reveal
          class="lg:col-span-2 bg-brand-bg/50 border-2 border-brand-dark/25 p-10 rounded-[1.25rem] flex flex-col items-center justify-center gap-8 animate-fade-in"
          style="animation-delay: 0.5s"
        >
          <div class="max-w-xs text-center md:text-left">
            <h3 class="text-2xl md:text-3xl font-serif mb-2">
              Prêt à commencer ?
            </h3>
            <p class="text-brand-dark/60">
              Discutons de votre projet lors d'un premier audit offert.
            </p>
          </div>
          <BaseButton
            label="RÉSERVER UN CRÉNEAU"
            href="https://calendly.com/aliciaambroise-agency/30min?month=2025-12"
            size="sm"
            variant="primary"
          />
        </div>
      </div>
    </div>
  </section>
</template>
