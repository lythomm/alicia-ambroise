<script setup>
import heroImage from "../assets/hero-portrait.png";
</script>

<template>
  <section
    id="about"
    class="h-[100dvh] pt-[7.5rem] md:pt-32 pb-6 md:pb-10 px-4 md:px-8 flex flex-col"
  >
    <div
      class="flex-1 w-full max-w-8xl mx-auto flex flex-col md:flex-row shadow-sm relative rounded-[1.25rem]"
    >
      <!-- Left: Content & Mission -->
      <div
        class="flex-1 md:flex-[1.1] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden rounded-t-[1.25rem] md:rounded-l-[1.25rem] md:rounded-r-none"
      >
        <!-- Further Accentuated Gradient Glows (Full Width) -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-[#FDF8F6] via-white/50 to-[#E8A594]/20 pointer-events-none"
        ></div>
        <div
          class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#E8A594_0%,_transparent_70%)] opacity-40 pointer-events-none"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#E8A594_0%,_transparent_70%)] opacity-20 pointer-events-none"
        ></div>

        <div class="relative z-10 flex flex-col justify-end h-full">
          <div class="space-y-8 md:space-y-12">
            <!-- Mission Label -->
            <div
              v-reveal
              class="animate-fade-in-up"
              style="animation-delay: 0.2s"
            >
              <span
                class="px-6 py-2.5 border border-black/10 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase text-black/40 bg-white/40 backdrop-blur-md"
              >
                Ma Mission
              </span>
            </div>

            <!-- Main Heading with Masking -->
            <div class="space-y-2">
              <h1
                v-reveal
                class="text-4xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-brand-dark animate-slide-up-text"
              >
                Communiquer
              </h1>
              <h1
                v-reveal
                class="text-4xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-brand-dark animate-slide-up-text"
                style="animation-delay: 0.15s"
              >
                <span class="font-normal italic text-black/20"
                  >pour impacter.</span
                >
              </h1>
            </div>

            <!-- Services & Description Group -->
            <div class="space-y-8">
              <!-- Service Categories -->
              <div
                v-reveal
                class="flex items-center gap-3 md:gap-10 text-[10px] font-bold tracking-[0.4em] uppercase animate-fade-in-up"
                style="animation-delay: 0.6s"
              >
                <span>Stratégie</span>
                <span class="w-1 h-1 bg-black/30 rounded-full"></span>
                <span>Contenu</span>
                <span class="w-1 h-1 bg-black/30 rounded-full"></span>
                <span>Influence</span>
              </div>

              <!-- Intro Paragraph -->
              <p
                v-reveal
                class="text-sm md:text-xl text-brand-dark/50 font-sans leading-relaxed max-w-xl animate-fade-in-up"
                style="animation-delay: 0.8s"
              >
                J'accompagne les marques dans leur rayonnement à travers une
                communication stratégique, créative et résolument tournée vers
                les résultats.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Portrait (Jules Studio Reveal Style) -->
      <div
        v-reveal
        class="hero_image-wrap flex-1 md:flex-[1.1] relative min-h-[300px] md:min-h-full overflow-hidden animate-reveal-up"
      >
        <img
          v-reveal
          :src="heroImage"
          alt="Alicia Ambroise"
          class="hero_image absolute inset-0 w-full h-full object-cover contrast-[1.05] rounded-b-[1.25rem] md:rounded-l-none md:rounded-r-[1.25rem] animate-image-zoom-parallax"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Responsive height fixes */
@media (max-height: 700px) and (max-width: 768px) {
  #about {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
  .space-y-8 {
    margin-top: 1rem;
    gap: 1rem;
  }
  h1 {
    font-size: 2.5rem !important;
  }
}

.hero_image-wrap {
  animation-delay: 0.4s;
}

.hero_image {
  animation-delay: 0.4s;
}
</style>
