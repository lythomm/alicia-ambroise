<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: "#",
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "outline", "white"].includes(value),
  },
});

const variantClasses = computed(() => {
  if (props.variant === "primary")
    return "bg-brand-dark text-white border-brand-dark";
  if (props.variant === "white") return "bg-white text-brand-dark border-white";
  return "bg-transparent text-white border-white/20";
});

const sizeClasses = computed(() => {
  const mapping = {
    sm: {
      btn: "px-8 py-3.5",
      text: "text-[11px] tracking-[0.15em] group-hover:pr-2",
      svg: "right-6 group-hover:right-4",
      iconSize: "14",
    },
    md: {
      btn: "px-12 py-6",
      text: "text-[11px] tracking-[0.3em] group-hover:pr-2",
      svg: "right-8 group-hover:right-6",
      iconSize: "16",
    },
    lg: {
      btn: "px-16 py-8",
      text: "text-[11px] tracking-[0.3em] group-hover:pr-2",
      svg: "right-10 group-hover:right-8",
      iconSize: "18",
    },
  };
  return mapping[props.size];
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative inline-flex items-center justify-center rounded-full border transition-all duration-500 hover:opacity-90 active:scale-95"
    :class="[sizeClasses.btn, variantClasses]"
  >
    <span
      class="relative font-sans font-bold uppercase transition-all duration-500"
      :class="sizeClasses.text"
    >
      {{ label }}
    </span>
    <svg
      :width="sizeClasses.iconSize"
      :height="sizeClasses.iconSize"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute opacity-0 transition-all duration-500 group-hover:opacity-100"
      :class="sizeClasses.svg"
    >
      <path
        d="M1 7H13M13 7L7 1M13 7L7 13"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>
