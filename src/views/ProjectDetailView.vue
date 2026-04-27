<script setup>
import { computed, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();
const router = useRouter();

const project = computed(() => {
  return projects.find((p) => p.id === route.params.id);
});

const nextProject = computed(() => {
  const currentIndex = projects.findIndex((p) => p.id === route.params.id);
  return projects[(currentIndex + 1) % projects.length];
});

onMounted(() => {
  window.scrollTo(0, 0);
});

const goToNext = () => {
  router.push(`/project/${nextProject.value.id}`);
};
</script>

<template>
  <div v-if="project" class="bg-brand-bg min-h-screen pt-32 md:pt-40">
    <!-- Hero Section -->
    <section class="px-6 md:px-12 mb-20 md:mb-32">
      <div class="max-w-8xl mx-auto">
        <div v-reveal class="overflow-hidden mb-8">
          <span
            class="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-muted block animate-slide-up-text"
          >
            {{ project.tags.join(" / ") }}
          </span>
        </div>

        <h1
          v-reveal
          class="text-6xl md:text-[10rem] font-serif leading-[0.9] tracking-tighter mb-16 md:mb-24 animate-fade-in-up"
        >
          {{ project.title }}
        </h1>

        <div
          class="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-brand-dark/10 pt-12"
        >
          <div class="md:col-span-8">
            <p
              class="text-2xl md:text-3xl font-light leading-relaxed text-brand-muted"
            >
              {{ project.overview }}
            </p>
          </div>
          <div class="md:col-span-4 space-y-8">
            <div>
              <h4
                class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-4"
              >
                Services
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="service in project.services"
                  :key="service"
                  class="text-sm font-medium"
                >
                  {{ service }}
                </li>
              </ul>
            </div>
            <div class="flex justify-between">
              <div>
                <h4
                  class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-2"
                >
                  Client
                </h4>
                <p class="text-sm font-medium">{{ project.client }}</p>
              </div>
              <div>
                <h4
                  class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted mb-2"
                >
                  Année
                </h4>
                <p class="text-sm font-medium">{{ project.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Image -->
    <section v-reveal class="px-6 md:px-12 mb-20 md:mb-40 animate-fade-in">
      <div
        class="max-w-8xl mx-auto rounded-[2rem] overflow-hidden aspect-[16/9] md:aspect-[21/9]"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
      </div>
    </section>

    <!-- Dynamic Content -->
    <section
      v-for="(block, index) in project.content"
      :key="index"
      class="px-6 md:px-12 mb-20 md:mb-40"
    >
      <div class="max-w-8xl mx-auto">
        <!-- Text Block -->
        <div
          v-if="block.type === 'text'"
          class="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <div class="md:col-span-4">
            <h2 class="text-3xl font-serif italic">{{ block.title }}</h2>
          </div>
          <div class="md:col-span-8">
            <p
              class="text-xl md:text-2xl font-light leading-relaxed text-brand-muted"
            >
              {{ block.text }}
            </p>
          </div>
        </div>

        <!-- Full Image -->
        <div
          v-if="block.type === 'full-image'"
          class="rounded-[2rem] overflow-hidden border border-black/5"
        >
          <img :src="block.image" :alt="block.caption" class="w-full" />
        </div>

        <!-- Grid Images -->
        <div
          v-if="block.type === 'grid'"
          class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div
            v-for="img in block.images"
            :key="img"
            class="rounded-[2rem] overflow-hidden aspect-square border border-black/5"
          >
            <img :src="img" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section
      v-if="project.results && project.results.length"
      class="px-6 md:px-12 mb-32 md:mb-60"
    >
      <div class="max-w-8xl mx-auto py-20 border-y border-brand-dark/10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div v-for="result in project.results" :key="result.label">
            <div class="text-4xl md:text-6xl font-serif mb-2">
              {{ result.value }}
            </div>
            <div
              class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted"
            >
              {{ result.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Project -->
    <section
      @click="goToNext"
      class="group relative px-6 md:px-12 py-32 md:py-60 cursor-pointer overflow-hidden bg-brand-dark"
    >
      <div
        class="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
      >
        <img
          :src="nextProject.image"
          class="w-full h-full object-cover grayscale"
        />
      </div>

      <div class="relative z-10 max-w-8xl mx-auto text-center">
        <span
          class="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40 block mb-8"
          >Projet suivant</span
        >
        <h2
          class="text-6xl md:text-9xl font-serif text-white tracking-tighter transition-transform duration-1000 group-hover:scale-105"
        >
          {{ nextProject.title }}
        </h2>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
