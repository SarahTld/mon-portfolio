<template>
  <section class="pt-0 pb-32 px-6 lg:px-12 relative z-10 overflow-hidden" style="min-height: 100vh;">
    <!-- Background Decorative Elements - Modern Style -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Subtle Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 80px 80px;" :class="[isScrolled ? 'text-white' : 'text-black']"></div>
      
      <!-- Subtle Lines -->
      <div :class="['absolute top-0 left-1/4 w-px h-full transition-colors duration-500', isScrolled ? 'bg-white/8' : 'bg-black/8']"></div>
      <div :class="['absolute top-0 right-1/4 w-px h-full transition-colors duration-500', isScrolled ? 'bg-white/8' : 'bg-black/8']"></div>
      
      <!-- Horizontal accent lines -->
      <div :class="['absolute top-1/3 left-0 right-0 h-px transition-colors duration-500', isScrolled ? 'bg-white/5' : 'bg-black/5']"></div>
      <div :class="['absolute bottom-1/3 left-0 right-0 h-px transition-colors duration-500', isScrolled ? 'bg-white/5' : 'bg-black/5']"></div>
    </div>

    <div class="max-w-[1400px] mx-auto relative z-10">
      <div class="mb-8 flex flex-col justify-center" style="min-height: 100vh;">
        <!-- Subtitle -->
        <div :class="['text-sm uppercase tracking-[0.3em] mb-12 animate-fade-in transition-colors duration-500', isScrolled ? 'text-white/60' : 'text-black/60']" style="animation-delay: 0s">
          Bienvenue
        </div>
        
        <!-- Title with subtle glow effect -->
        <div class="relative">
          <h1 class="hero-title relative z-10">
            <span :class="['block hero-line transition-colors duration-500', isScrolled ? 'text-white' : 'text-black']" style="animation-delay: 0.1s">
              <span v-for="(letter, index) in 'GRAPHISTE'.split('')" :key="index" class="inline-block">
                {{ letter === ' ' ? '\u00A0' : letter }}
              </span>
              <span class="text-orange-500"> &</span>
            </span>
            <span :class="['block hero-line transition-colors duration-500', isScrolled ? 'text-white' : 'text-black']" style="animation-delay: 0.3s">
              <span v-for="(letter, index) in 'DÉVELOPPEUSE WEB'.split('')" :key="index" class="inline-block">
                {{ letter === ' ' ? '\u00A0' : letter }}
              </span>
            </span>
          </h1>
          
          <!-- Subtle underline accent -->
          <div class="absolute -bottom-8 left-0 w-24 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bio: {
    type: Object,
    required: true
  },
  isScrolled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="postcss">
.hero-title {
  font-family: 'Bebas Neue', cursive, sans-serif;
  font-size: clamp(4rem, 12vw, 12rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: 0;
  text-transform: uppercase;
  -webkit-text-stroke: 0.5px currentColor;
  position: relative;
}


.hero-title span.inline-block {
  margin-right: 0;
}

.hero-line {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 25s ease-in-out infinite;
  animation-delay: -5s;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 20s ease-in-out infinite;
}

.animate-blob-delayed {
  animation: blob 25s ease-in-out infinite;
  animation-delay: -5s;
}

@keyframes particle-1 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate(50px, -100px);
    opacity: 1;
  }
}

@keyframes particle-2 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate(-80px, 120px);
    opacity: 1;
  }
}

@keyframes particle-3 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate(100px, 80px);
    opacity: 1;
  }
}

.animate-particle-1 {
  animation: particle-1 15s ease-in-out infinite;
}

.animate-particle-2 {
  animation: particle-2 18s ease-in-out infinite;
  animation-delay: -3s;
}

.animate-particle-3 {
  animation: particle-3 20s ease-in-out infinite;
  animation-delay: -7s;
}

</style>

