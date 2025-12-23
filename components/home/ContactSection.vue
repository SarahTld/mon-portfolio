<template>
  <section id="contact" class="py-32 px-6 lg:px-12 border-t border-white/10 relative z-10 bg-black text-white">
    <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="animate-fade-in-up" style="animation-delay: 0.2s">
          <h2 class="contact-title mb-6">Enchantée !</h2>
          <p class="text-lg text-white/70 mb-8">Design. Code. Création. Découvrez mon univers.</p>
          <div class="space-y-4">
            <a href="mailto:sarahtld@hotmail.fr" class="inline-block text-lg uppercase tracking-[0.2em] border-b border-white/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 relative group text-orange-500">
              Mon CV
              <span class="absolute bottom-0 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <div>
              <a 
                href="mailto:sarahtld@hotmail.fr" 
                class="inline-block text-lg md:text-xl uppercase tracking-[0.2em] text-orange-500 border-2 border-orange-500 px-8 py-4 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-105 relative group"
              >
                <span class="relative z-10">ME CONTACTER</span>
                <span class="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="text-sm uppercase tracking-[0.2em] text-white/60 mb-6">Réseaux sociaux</div>
          <div class="space-y-4">
            <a 
              v-for="(social, index) in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank"
              class="block text-lg text-white/80 hover:text-orange-500 transition-all duration-300 hover:translate-x-2 relative group"
              :style="{ animationDelay: `${0.1 * index}s` }"
            >
              {{ social.name }}
              <span class="absolute left-0 bottom-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  socialLinks: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="postcss">
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-title {
  font-family: 'Bebas Neue', cursive, sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>

