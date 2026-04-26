<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const reviews = ref([
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Fondatrice, Horizon Interiors",
    text: "Alicia a su transformer notre présence digitale. Son approche stratégique et son sens du détail ont permis de doubler notre engagement en seulement trois mois.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
  },
  {
    id: 2,
    name: "Marc Dubreuil",
    role: "Directeur Marketing, Urban Wheels",
    text: "Une collaboration fluide et des résultats concrets. Alicia comprend parfaitement les enjeux des marques modernes et sait comment raconter leur histoire.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc",
  },
  {
    id: 3,
    name: "Elena Rossi",
    role: "CEO, Elysian Studio",
    text: "L'expertise d'Alicia en communication stratégique est inégalée. Elle ne se contente pas de conseiller, elle construit une véritable identité pour ses clients.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    id: 4,
    name: "Jean-Philippe Meyer",
    role: "Propriétaire, Le Petit Bistro",
    text: "Grâce à Alicia, notre restaurant est devenu une référence sur les réseaux sociaux. Elle a su capturer l'essence de notre cuisine et la partager avec passion.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
  },
  {
    id: 5,
    name: "Clara Dubois",
    role: "Directrice de Création, Studio Lumière",
    text: "Un oeil créatif exceptionnel couplé à une rigueur organisationnelle rare. Travailler avec Alicia est un gage de qualité pour tous nos projets.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Clara",
  },
]);

const currentIndex = ref(0);
const autoplayInterval = ref(null);
const isPaused = ref(false);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length;
  resetAutoplay();
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + reviews.value.length) % reviews.value.length;
  resetAutoplay();
};

const goTo = (index) => {
  currentIndex.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  if (autoplayInterval.value) return;
  autoplayInterval.value = setInterval(() => {
    if (!isPaused.value) {
      currentIndex.value = (currentIndex.value + 1) % reviews.value.length;
    }
  }, 6000);
};

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
    startAutoplay();
  }
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

// Drag logic
const startX = ref(0);
const currentTranslate = ref(0);
const prevTranslate = ref(0);
const isDragging = ref(false);
const sliderTrack = ref(null);

const handleDragStart = (e) => {
  isPaused.value = true;
  isDragging.value = true;
  startX.value = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
};

const handleDragMove = (e) => {
  if (!isDragging.value) return;
  const x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  const walk = x - startX.value;
  // Logic for visual feedback during drag could be added here
};

const handleDragEnd = (e) => {
  if (!isDragging.value) return;
  isDragging.value = false;
  isPaused.value = false;

  const endX = e.type.includes("touch")
    ? e.changedTouches[0].clientX
    : e.clientX;
  const diff = startX.value - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) next();
    else prev();
  }
};
</script>

<template>
  <section id="reviews" class="px-4 md:px-8 flex flex-col items-center">
    <div
      v-reveal
      class="max-w-8xl w-full bg-white rounded-[1.25rem] p-8 md:p-20 shadow-sm border border-black/5 relative overflow-hidden animate-fade-in-up"
    >
      <!-- Grain Overlay -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none bg-grain mix-blend-multiply"
      ></div>

      <div
        class="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
      >
        <!-- Left: Heading -->
        <div class="w-full lg:w-[35%] shrink-0">
          <p
            class="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-dark/50 mb-8"
          >
            Témoignages
          </p>
          <h2
            v-reveal
            class="text-5xl md:text-7xl font-serif tracking-tighter leading-[0.9] mb-6 md:mb-12 animate-fade-in-up"
          >
            Ce qu'ils <br />
            <span class="italic text-gray-300">en disent.</span>
          </h2>

          <!-- Navigation Controls (Desktop) -->
          <div class="hidden lg:flex items-center gap-4 mt-12">
            <button
              @click="prev"
              class="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-500 group"
              aria-label="Avis précédent"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform group-hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              @click="next"
              class="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-500 group"
              aria-label="Avis suivant"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <!-- Progress indicators -->
          <div class="hidden lg:flex gap-2 mt-6 md:mt-16">
            <button
              v-for="(_, index) in reviews"
              :key="index"
              @click="goTo(index)"
              class="h-1 transition-all duration-700 rounded-full"
              :class="
                currentIndex === index
                  ? 'w-16 bg-brand-dark'
                  : 'w-4 bg-brand-dark/10 hover:bg-brand-dark/20'
              "
            ></button>
          </div>
        </div>

        <!-- Right: Reviews Slider -->
        <div
          class="w-full overflow-hidden cursor-grab active:cursor-grabbing"
          @mousedown="handleDragStart"
          @mousemove="handleDragMove"
          @mouseup="handleDragEnd"
          @mouseleave="handleDragEnd"
          @touchstart="handleDragStart"
          @touchmove="handleDragMove"
          @touchend="handleDragEnd"
        >
          <div
            ref="sliderTrack"
            class="flex transition-transform duration-[1.2s] ease-[cubic-bezier(0.16, 1, 0.3, 1)]"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="review in reviews"
              :key="review.id"
              class="w-full shrink-0 flex flex-col gap-6 md:gap-10 pr-4 lg:pr-12"
            >
              <div class="hidden md:block text-brand-dark/10">
                <svg
                  width="48"
                  height="40"
                  viewBox="0 0 40 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 32V18.1818C0 12.3636 1.45455 7.63636 4.36364 4C7.27273 0.363636 11.2727 -0.363636 16.3636 1.81818V8.18182C13.8182 7.27273 11.8182 7.45455 10.3636 8.72727C8.90909 10 8.18182 11.8182 8.18182 14.1818V16.3636H16.3636V32H0ZM23.6364 32V18.1818C23.6364 12.3636 25.0909 7.63636 28 4C30.9091 0.363636 34.9091 -0.363636 40 1.81818V8.18182C37.4545 7.27273 35.4545 7.45455 34 8.72727C32.5455 10 31.8182 11.8182 31.8182 14.1818V16.3636H40V32H23.6364Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <blockquote
                v-reveal
                class="text-2xl md:text-4xl font-serif leading-tight tracking-tight text-brand-dark/90 italic animate-fade-in-up"
              >
                {{ review.text }}
              </blockquote>

              <div
                v-reveal
                class="mt-8 flex items-center gap-6 group animate-fade-in-up"
                style="animation-delay: 0.2s"
              >
                <div
                  class="size-16 bg-brand-bg rounded-full overflow-hidden shrink-0"
                >
                  <img
                    :src="review.avatar"
                    :alt="review.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col">
                  <span
                    class="font-bold text-lg lg:text-xl tracking-tight transition-colors duration-500 group-hover:text-brand-dark/70"
                    >{{ review.name }}</span
                  >
                  <span
                    class="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-dark/30"
                    >{{ review.role }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Controls (Mobile/Tablet) -->
          <div class="flex lg:hidden items-center justify-between mt-16">
            <div class="flex gap-2">
              <button
                v-for="(_, index) in reviews"
                :key="index"
                @click="goTo(index)"
                class="h-1.5 transition-all duration-500 rounded-full"
                :class="
                  currentIndex === index
                    ? 'w-10 bg-brand-dark'
                    : 'w-2 bg-brand-dark/10'
                "
              ></button>
            </div>

            <div class="flex gap-3">
              <button
                @click="prev"
                class="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center active:scale-95 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                @click="next"
                class="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center active:scale-95 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}
</style>
