<script setup>
import aboutImage from "../assets/about-portrait.png";
</script>

<template>
  <section id="about-alicia" class="px-4 md:px-8">
    <div
      class="max-w-8xl mx-auto flex flex-col-reverse md:flex-row bg-brand-dark rounded-[1.5rem] overflow-hidden min-h-[600px] shadow-2xl"
    >
      <!-- Left: Content -->
      <div
        class="flex-1 p-8 md:p-20 flex flex-col justify-center space-y-8 md:space-y-12 relative overflow-hidden"
      >
        <!-- Subtle Gradient Glow -->
        <div
          class="hidden md:block absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(232,165,148,0.1)_0%,_transparent_60%)] pointer-events-none"
        ></div>

        <div v-reveal class="relative z-10">
          <span
            class="px-6 py-2.5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 bg-white/5 backdrop-blur-md"
          >
            A propos
          </span>
        </div>

        <div class="space-y-4 md:space-y-8 relative z-10">
          <h2
            v-reveal
            class="text-3xl md:text-5xl font-serif text-white leading-[1.1] tracking-tight"
          >
            Inspirée par la création, dédiée à faire rayonner votre vision.
          </h2>

          <div class="space-y-2 md:space-y-6 max-w-xl">
            <p v-reveal class="text-md text-white/60 font-sans leading-relaxed">
              Je suis <span class="text-white">Alicia</span>, experte en
              communication et fondatrice de mon agence. Si vous me demandez ce
              qui me passionne et m'anime au quotidien, c'est le pouvoir de
              l'image et du message.
            </p>
            <!-- <p
              v-reveal
              class="text-md text-white/60 font-sans leading-relaxed"
              style="animation-delay: 0.1s"
            >
              Diplômée d'un Master Culture & Communication, je m'efforce
              constamment de concevoir des stratégies qui aident les entreprises
              à réussir, avec une rigueur acquise notamment durant mes 3 ans en
              tant que responsable communication pour BedBoat.fr.
            </p> -->
            <p
              v-reveal
              class="text-md text-white/60 font-sans leading-relaxed"
              style="animation-delay: 0.2s"
            >
              Je suis convaincue qu'une communication créative et authentique a
              le pouvoir de transformer une marque. C'est pourquoi j'ai lancé
              cette aventure : pour accompagner des projets ambitieux tout en
              restant curieuse, déterminée et (très) créative.
            </p>
          </div>
        </div>
      </div>

      <!-- Right: Portrait -->
      <div
        v-reveal
        class="flex-1 relative min-h-[400px] md:min-h-full overflow-hidden rounded-[1.5rem] m-4 md:m-0"
      >
        <img
          :src="aboutImage"
          alt="Alicia Ambroise"
          class="absolute inset-0 w-full h-full object-cover md:aspect-auto"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#about-alicia {
  scroll-margin-top: 5rem;
}
</style>
