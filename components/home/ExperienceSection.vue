<template>
  <section class="px-6 lg:px-12 py-32 border-t border-white/10 relative z-10 bg-black text-white overflow-hidden">
    <!-- Scrolling Text Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-center gap-0" style="line-height: 0.8;">
      <!-- First line - scrolling left to right (slower) -->
      <div class="scrolling-text whitespace-nowrap flex" style="line-height: 0.8;">
        <span class="experience-marquee text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white/5 uppercase inline-block pr-8" style="line-height: 0.8;">
          EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES
        </span>
        <span class="experience-marquee text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white/5 uppercase inline-block pr-8" style="line-height: 0.8;">
          EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES USER EXPERIENCE TECHNOLOGIES PERFORMANCES
        </span>
      </div>
      
      <!-- Second line - scrolling right to left (opposite direction) -->
      <div class="scrolling-text-reverse whitespace-nowrap flex" style="line-height: 0.8;">
        <span class="experience-marquee text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white/5 uppercase inline-block pr-8" style="line-height: 0.8;">
          DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION
        </span>
        <span class="experience-marquee text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white/5 uppercase inline-block pr-8" style="line-height: 0.8;">
          DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION DESIGN CODE CREATIVITY INNOVATION
        </span>
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-[1400px] mx-auto">
      <div class="max-w-3xl">
        <p class="text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
          Une bonne <span class="text-orange-500 font-medium">expérience utilisateur</span> est essentielle pour le succès d'une entreprise en ligne. Elle inclut une navigation facile, un design esthétique et des performances rapides, qui construisent la <span class="text-orange-500 font-medium">confiance</span> et encouragent les visiteurs à revenir.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollReverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.scrolling-text {
  animation: scroll 45s linear infinite;
  will-change: transform;
}

.scrolling-text-reverse {
  animation: scrollReverse 45s linear infinite;
  will-change: transform;
}

.experience-marquee {
  font-family: 'Bebas Neue', cursive, sans-serif;
  letter-spacing: 0.05em;
}
</style>

