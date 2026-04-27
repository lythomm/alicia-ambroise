<script setup>
import BaseButton from "./UIElements/BaseButton.vue";
const services = [
  {
    id: "01",
    title: "Stratégie & Contenu",
    details:
      "Audit & Plan de communication, SEO éditorial & Rédaction web, Relations Presse & Média, Direction éditoriale.",
    tags: ["Audit", "SEO", "RP", "Éditorial"],
  },
  {
    id: "02",
    title: "Réseaux & Influence",
    details:
      "Stratégie réseaux sociaux, Community management, Stratégie d'influence, Social Ads & Analytics.",
    tags: ["Social Media", "Community", "Influence", "Ads"],
  },
  {
    id: "03",
    title: "Identité de Marque",
    details:
      "Branding & Positionnement, Identité visuelle & Logo, Création de supports, Charte graphique.",
    tags: ["Branding", "Visual ID", "Logo", "Design"],
  },
  {
    id: "04",
    title: "Accompagnement",
    details:
      "Coaching personnalisé, Ateliers & Formations, Montée en compétences, Conseil opérationnel.",
    tags: ["Coaching", "Workshops", "Formation", "Conseil"],
  },
];
</script>

<template>
  <section id="services" class="px-4 md:px-8 py-20 bg-white">
    <div class="max-w-8xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-24">
        <!-- Sticky Sidebar -->
        <div class="px-2 md:px-0 lg:w-1/3">
          <div class="lg:sticky lg:top-32 space-y-4 md:space-y-8">
            <div v-reveal class="overflow-hidden">
              <span
                class="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-muted block animate-slide-up-text"
                >Expertises</span
              >
            </div>
            <h2
              v-reveal
              class="text-6xl md:text-7xl font-serif leading-[0.9] overflow-hidden"
            >
              <span class="block animate-slide-up-text">Mes</span>
              <span
                class="italic text-brand-muted block animate-slide-up-text"
                style="animation-delay: 0.1s"
                >Expertises.</span
              >
            </h2>
            <p
              v-reveal
              class="text-xl text-brand-muted leading-relaxed max-w-sm animate-fade-in-up"
              style="animation-delay: 0.3s"
            >
              Une approche holistique de la communication pour faire rayonner
              votre vision auprès des bonnes audiences.
            </p>
            <div
              v-reveal
              class="pt-8 animate-fade-in-up"
              style="animation-delay: 0.4s"
            >
              <BaseButton
                label="Discutons de votre projet"
                variant="primary"
                size="lg"
                href="https://calendly.com/aliciaambroise-agency/30min?month=2025-12"
              />
            </div>
          </div>
        </div>

        <!-- Scrollable content -->
        <div class="lg:w-2/3 space-y-12">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            v-reveal
            class="p-12 md:p-16 rounded-[2.5rem] bg-brand-bg transition-all duration-500 group border-2 border-transparent"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex items-start justify-between">
              <h3
                class="text-3xl md:text-5xl font-serif mb-6 transition-transform duration-700"
              >
                {{ service.title }}
              </h3>
              <span class="text-2xl font-mono text-brand-muted">{{
                service.id
              }}</span>
            </div>
            <div class="flex flex-wrap gap-3 mb-8">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="bg-white px-4 py-2 rounded-full text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-brand-dark"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-xl text-brand-muted leading-relaxed max-w-xl">
              {{ service.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
