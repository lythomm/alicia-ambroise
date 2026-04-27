<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Lenis from "lenis";
import Navbar from "./components/Navbar.vue";
import Preloader from "./components/Preloader.vue";
import TransitionOverlay from "./components/TransitionOverlay.vue";

const router = useRouter();
const route = useRoute();
const isLoading = ref(true);
const isTransitioning = ref(false);
let lenis = null;

// Router guards for transition
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    isTransitioning.value = true;
    setTimeout(() => {
      next();
    }, 400);
  } else {
    next();
  }
});

router.afterEach(() => {
  setTimeout(() => {
    isTransitioning.value = false;
  }, 200);
});

const onLoaded = () => {
  isLoading.value = false;
  nextTick(() => {
    initLenis();
  });
};

const initLenis = () => {
  if (lenis) lenis.destroy();
  
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

// Re-init Lenis on route change if needed
watch(() => route.path, () => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
});

onUnmounted(() => {
  if (lenis) {
    lenis.destroy();
  }
});
</script>

<template>
  <TransitionOverlay :active="isTransitioning" />
  <Preloader @loaded="onLoaded" />

  <Navbar
    :class="{ 'opacity-0': isLoading }"
    class="transition-opacity duration-1000"
  />

  <div
    :class="[
      'min-h-screen bg-brand-bg main-content',
      { 'is-ready': !isLoading },
    ]"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style>
.main-content {
  opacity: 0;
  transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.main-content.is-ready {
  opacity: 1;
}

/* Page transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
