<script setup>
import HeroSection from "../components/HeroSection.vue";
import PortfolioGrid from "../components/PortfolioGrid.vue";
import ServicesSection from "../components/ServicesSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProcessSection from "../components/ProcessSection.vue";
import ReviewsSection from "../components/ReviewsSection.vue";
import AuditSection from "../components/AuditSection.vue";
import FAQSection from "../components/FAQSection.vue";
import FooterSection from "../components/FooterSection.vue";
</script>

<template>
  <main class="space-y-8">
    <HeroSection id="home" />
    <PortfolioGrid id="work" />
    <ServicesSection id="services" />
    <AboutSection />
    <ProcessSection id="process" />
    <ReviewsSection id="reviews" />
    <AuditSection />
    <FAQSection id="faq" />
    <FooterSection />
  </main>
</template>
