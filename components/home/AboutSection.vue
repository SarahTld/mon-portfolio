<template>
  <section id="about" class="relative z-30 bg-black text-white overflow-hidden" style="min-height: 100vh; margin-top: 100vh;">
    <!-- Background Image with Parallax (CSS) -->
    <div class="parallax-container absolute top-0 left-0 right-0 bottom-0 z-0">
      <div class="parallax-bg"></div>
    </div>
    
    <!-- Content (scrolls over the image) -->
    <div class="relative z-10 flex flex-col justify-center items-center min-h-[100vh] text-center px-6 lg:px-12">
      <div class="w-full max-w-5xl px-3 md:px-6 lg:px-8">
        <div class="about-title text-white/20 mb-8 animate-fade-in whitespace-nowrap text-center">MON HISTOIRE</div>
        <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
          {{ bio.description }}
        </p>
        <NuxtLink 
          to="/about" 
          class="inline-block px-8 py-4 border-2 border-orange-500 text-orange-500 font-medium uppercase tracking-wider hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
          style="animation-delay: 0.4s"
        >
          En savoir plus
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="postcss">
.about-title {
  font-family: 'Bebas Neue', cursive, sans-serif;
  font-size: clamp(4rem, 12vw, 12rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: 0;
  text-transform: uppercase;
  position: relative;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.parallax-container {
  padding: 1.5rem;
}

.parallax-bg {
  background-image: url("/images/aboutMe.png");
  height: 100%;
  min-height: calc(100vh - 3rem);
  background-attachment: fixed;
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
  opacity: 0.5;
}

@media only screen and (max-device-width: 1366px) {
  .parallax-bg {
    background-attachment: scroll;
  }
}
</style>

