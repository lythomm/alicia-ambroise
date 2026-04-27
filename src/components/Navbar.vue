<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BaseButton from "./UIElements/BaseButton.vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<template>
  <div
    class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-8xl"
  >
    <nav
      :class="[
        'flex items-center justify-between px-6 md:px-10 py-4 rounded-[2.5rem] border transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3 translate-y-0 border-black/5'
          : 'bg-white/40 backdrop-blur-md border-black/5',
        isMenuOpen
          ? 'bg-transparent border-transparent backdrop-blur-none'
          : '',
      ]"
    >
      <div class="flex items-center gap-1 group cursor-pointer z-[60]">
        <a href="#home" @click="closeMenu">
          <span
            :class="[
              'font-sans text-xl md:text-2xl tracking-wider font-medium transition-colors duration-500',
              isMenuOpen ? 'text-white' : 'text-brand-dark',
            ]"
            >alicia ambroise</span
          >
        </a>
      </div>

      <div class="flex items-center gap-6 md:gap-10">
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#work" class="hover:opacity-40 transition-all duration-300"
            >Projets</a
          >
          <a
            href="#services"
            class="hover:opacity-40 transition-all duration-300"
            >Services</a
          >
          <a
            href="#about-alicia"
            class="hover:opacity-40 transition-all duration-300"
            >À propos</a
          >
          <a
            href="#process"
            class="hover:opacity-40 transition-all duration-300"
            >Méthode</a
          >
          <a
            href="#reviews"
            class="hover:opacity-40 transition-all duration-300"
            >Avis</a
          >
          <a href="#faq" class="hover:opacity-40 transition-all duration-300"
            >FAQ</a
          >
        </div>

        <div class="flex items-center gap-4">
          <!-- Desktop CTA -->
          <BaseButton
            label="Prendre rendez-vous"
            size="sm"
            class="hidden! md:flex!"
            href="https://calendly.com/aliciaambroise-agency/30min?month=2025-12"
          />

          <!-- Hamburger Button -->
          <button
            @click="toggleMenu"
            class="flex md:hidden flex-col justify-center items-center gap-1.5 z-[60] w-10 h-10 relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              :class="[
                'w-6 h-0.5 transition-all duration-500 ease-in-out origin-center',
                isMenuOpen
                  ? 'rotate-45 translate-y-[8px] bg-white'
                  : 'bg-brand-dark',
              ]"
            ></span>
            <span
              :class="[
                'w-6 h-0.5 transition-all duration-300 bg-brand-dark',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              ]"
            ></span>
            <span
              :class="[
                'w-6 h-0.5 transition-all duration-500 ease-in-out origin-center',
                isMenuOpen
                  ? '-rotate-45 -translate-y-[8px] bg-white'
                  : 'bg-brand-dark',
              ]"
            ></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Fullscreen Mobile Menu -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        enter-from-class="opacity-0 -translate-y-full"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-[transform,opacity] duration-400 ease-in-out"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-full"
      >
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-brand-dark z-[55] flex flex-col items-center justify-center px-8 reveal-active"
        >
          <!-- Close Button -->
          <button
            @click="closeMenu"
            class="absolute top-8 right-8 md:top-12 md:right-12 text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-3 group"
          >
            <span
              class="text-[10px] uppercase tracking-[0.3em] font-sans pt-0.5"
              >Fermer</span
            >
            <div class="relative w-6 h-6">
              <span
                class="absolute top-1/2 left-0 w-full h-px bg-current rotate-45"
              ></span>
              <span
                class="absolute top-1/2 left-0 w-full h-px bg-current -rotate-45"
              ></span>
            </div>
          </button>

          <div class="flex flex-col items-center space-y-10 text-center">
            <div
              class="overflow-hidden"
              v-for="(link, i) in [
                { label: 'Projets', href: '#work' },
                { label: 'Services', href: '#services' },
                { label: 'À propos', href: '#about-alicia' },
                { label: 'Méthode', href: '#process' },
                { label: 'Avis', href: '#reviews' },
                { label: 'FAQ', href: '#faq' },
              ]"
              :key="link.href"
            >
              <a
                :href="link.href"
                @click="closeMenu"
                class="block text-5xl md:text-6xl font-serif text-white hover:text-brand-muted transition-all duration-500 hover:scale-105 active:scale-95 animate-slide-up-text"
                :style="{ animationDelay: `${300 + i * 100}ms` }"
              >
                {{ link.label }}
              </a>
            </div>
          </div>

          <!-- Decorative element -->
          <div
            class="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-white/20 animate-fade-in"
            style="animation-delay: 1000ms; animation-fill-mode: forwards"
          >
            Alicia Ambroise © 2024
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
