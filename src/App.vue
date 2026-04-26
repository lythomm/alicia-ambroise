<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Lenis from "lenis";
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import PortfolioGrid from "./components/PortfolioGrid.vue";
import ServicesSection from "./components/ServicesSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import FAQSection from "./components/FAQSection.vue";
import AuditSection from "./components/AuditSection.vue";
import ReviewsSection from "./components/ReviewsSection.vue";
import FooterSection from "./components/FooterSection.vue";
import Preloader from "./components/Preloader.vue";

const isLoading = ref(false);
let lenis = null;

onMounted(() => {
  // Prevent browser from restoring scroll position
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
  document.body.style.overflow = "";
  initScroll();
});

const onLoaded = () => {
  isLoading.value = false;
  document.body.style.overflow = "";
  window.scrollTo(0, 0);
  initScroll();
};

const initScroll = () => {
  // Disable Lenis on mobile/tablet for better performance and native behavior
  const isMobile = window.matchMedia("(max-width: 1024px)").matches;
  if (isMobile) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    if (lenis) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  }

  requestAnimationFrame(raf);

  // Global anchor link handling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = anchor.getAttribute("href");
      if (target === "#") return;

      if (lenis) {
        lenis.scrollTo(target, { duration: 2 });
      } else {
        const targetEl = document.querySelector(target);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
};

onUnmounted(() => {
  if (lenis) {
    lenis.destroy();
  }
});
</script>

<template>
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
    <main class="space-y-8">
      <HeroSection id="home" />
      <PortfolioGrid id="work" />
      <ServicesSection id="services" />
      <ProcessSection id="process" />
      <ReviewsSection id="reviews" />
      <AuditSection />
      <FAQSection id="faq" />
      <FooterSection />
    </main>
  </div>
</template>

<style>
.main-content {
  opacity: 0;
  transform: translateY(30px);
  filter: blur(20px);
  transition:
    opacity 2s cubic-bezier(0.2, 0, 0.2, 1),
    transform 2s cubic-bezier(0.2, 0, 0.2, 1),
    filter 2s cubic-bezier(0.2, 0, 0.2, 1);
}

.main-content.is-ready {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

body {
  margin: 0;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-brand-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-brand-dark);
  opacity: 0.1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  opacity: 0.3;
}
</style>
