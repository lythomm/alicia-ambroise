<script setup>
import { useRouter } from "vue-router";
import { projects } from "../data/projects";

const router = useRouter();

const goToProject = (id) => {
  router.push(`/project/${id}`);
};
</script>

<template>
  <section
    id="work"
    class="px-4 md:px-8 flex flex-col items-center overflow-hidden"
  >
    <!-- Grid Container -->
    <div class="max-w-8xl w-full relative">
      <!-- Title Section -->
      <div
        v-reveal
        class="max-w-8xl w-full mx-auto mb-12 text-left animate-reveal"
      >
        <h2
          class="text-5xl md:text-6xl font-serif tracking-tight leading-none text-center overflow-hidden pb-4"
        >
          <span class="block animate-slide-up-text">Projets sélectionnés</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 relative z-10">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          v-reveal
          @click="goToProject(project.id)"
          :class="[
            'group relative cursor-pointer flex flex-col animate-fade-in-up border-b border-black/50 last:border-none pb-10 last:pb-0 md:border-none md:pb-0',
            project.span,
          ]"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        >
          <!-- Mobile presentation uses a vertical stack (image then info below) -->
          <div class="flex flex-col gap-6">
            <!-- Card Container (Image + Logo) -->
            <div
              class="relative rounded-[1.25rem] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[360px] md:min-h-[480px] bg-white/40 border border-black/5 shadow-sm"
            >
              <!-- Project Image -->
              <div class="absolute inset-0 overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:brightness-[0.3]"
                />
              </div>

              <!-- Premium Hover Overlay (Desktop Only) -->
              <div
                class="hidden md:flex absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex-col p-8 justify-end"
              >
                <div class="space-y-6">
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tag, tagIndex) in project.tags"
                      :key="tag"
                      class="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-white translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      :style="{ transitionDelay: `${0.1 + tagIndex * 0.1}s` }"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <h3
                    class="text-5xl font-serif text-white tracking-tighter leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100"
                  >
                    {{ project.title }}
                  </h3>
                </div>
              </div>

              <!-- Subtle Arrow Button (Desktop Only) -->
              <div
                class="hidden md:flex absolute top-8 right-8 size-10 bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0 border border-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-white transition-transform duration-500 group-hover:rotate-45"
                >
                  <path
                    d="M1.16669 12.8333L12.8334 1.16666M12.8334 1.16666H3.50002M12.8334 1.16666V10.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <!-- Metadata below card (Mobile Only) -->
            <div class="flex flex-col gap-4 md:hidden">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1.5 border border-black/10 rounded-md text-[12px] font-bold tracking-[0.05em] uppercase text-brand-muted"
                >
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-4xl font-serif text-brand-dark leading-tight">
                {{ project.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
