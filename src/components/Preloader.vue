<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits(["loaded"]);
const isVisible = ref(true);
const isExiting = ref(false);

onMounted(() => {
  // Wait for the intro animation to finish, then start exit
  setTimeout(() => {
    isExiting.value = true;
    setTimeout(() => {
      isVisible.value = false;
      emit("loaded");
    }, 1500); // Slightly longer exit for fluidity
  }, 3200); // Longer display time for the elegant reveal
});
</script>

<template>
  <div
    v-if="isVisible"
    :class="[
      'fixed inset-0 w-full h-[100dvh] bg-black z-[9999] flex items-center justify-center overflow-hidden transition-transform duration-[1500ms] ease-[cubic-bezier(0.85,0,0.15,1)]',
      { 'is-exiting -translate-y-full': isExiting },
    ]"
  >
    <div
      :class="[
        'relative z-20 text-center transition-all duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)]',
        { 'opacity-0 -translate-y-[100px]': isExiting },
      ]"
    >
      <div class="relative overflow-hidden p-[10px]">
        <h1
          class="text-white font-sans! text-[clamp(2rem,10vw,5.5rem)] tracking-[-0.02em] m-0 flex flex-wrap justify-center lowercase"
        >
          alicia ambroise
        </h1>
        <p
          class="text-white font-sans text-[clamp(0.8rem,2vw,1.1rem)] tracking-[0.2em] mt-4 flex flex-wrap justify-center uppercase"
        >
          <span
            v-for="(char, index) in 'chargée de communication'"
            :key="index"
            :style="{ '--delay': index * 0.03 + 0.4 + 's' }"
            :class="['reveal-char-sub', { 'w-[0.4em]': char === ' ' }]"
          >
            {{ char }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reveal-char-sub {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  animation: revealCharSub 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: calc(var(--delay));
}

@keyframes revealCharSub {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
