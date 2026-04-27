<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  active: Boolean,
});

// wasActive helps us keep the exiting state for a bit
const wasActive = ref(false);

watch(
  () => props.active,
  (newVal, oldVal) => {
    if (oldVal && !newVal) {
      wasActive.value = true;
      setTimeout(() => {
        wasActive.value = false;
      }, 500); // Match transition duration
    }
  },
);
</script>

<template>
  <div
    class="transition-overlay"
    :class="{
      'is-active': active,
      'is-exiting': !active && wasActive,
    }"
  >
    <div class="panel"></div>
  </div>
</template>

<style scoped>
.transition-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
}

.panel {
  position: absolute;
  inset: 0;
  background-color: #000;
  transform: translateY(100%);
}

.is-active {
  pointer-events: all;
}

.is-active .panel {
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.is-exiting .panel {
  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.64, 0, 0.78, 0);
}

/* Ensure that when idle (not active and not exiting), it's back at the bottom instantly */
.transition-overlay:not(.is-active):not(.is-exiting) .panel {
  transform: translateY(100%);
  transition: none;
}
</style>
