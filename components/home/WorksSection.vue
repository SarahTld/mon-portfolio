<template>
  <section id="work" class="py-32 border-t border-white/10 relative z-10 bg-black text-white">
    <div class="mb-12 px-6 lg:px-12">
      <div class="max-w-[1400px] mx-auto">
        <div class="works-title text-white mb-6 animate-fade-in">MES CRÉATIONS</div>
        <div class="text-sm uppercase tracking-[0.2em] text-white/60 animate-fade-in" style="animation-delay: 0.2s">Faites défiler et cliquez pour voir le site en direct.</div>
      </div>
    </div>

    <!-- Horizontal Scroll Container -->
    <div class="relative">
      <!-- Scroll Indicator -->
      <div class="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div class="flex items-center gap-2 text-orange-500/60 animate-pulse">
          <span class="text-xs uppercase tracking-wider">Scroll</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
      
      <div class="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth" style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scroll-padding: 0 24px;">
        <div class="flex gap-8 px-6 lg:px-12 pb-8" style="width: max-content;">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id"
            class="project-card-horizontal flex-shrink-0 animate-fade-in-up p-2"
            :style="{ animationDelay: `${0.1 * index}s`, scrollSnapAlign: 'start' }"
          >
            <a :href="project.link" target="_blank" class="block group">
              <div class="w-[80vw] md:w-[520px] lg:w-[600px] border border-white/10 group-hover:border-orange-500/50 transition-all duration-500 relative bg-black/50 backdrop-blur-sm group-hover:scale-[1.02]">
                <!-- Project Image/Placeholder -->
                <div class="h-64 md:h-80 bg-gradient-to-br from-white/5 via-white/2 to-white/0 flex items-center justify-center relative overflow-hidden">
                  <img 
                    :src="project.image" 
                    :alt="project.title" 
                    class="absolute inset-0 w-full h-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-orange-500/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <!-- Project Info -->
                <div class="p-8 relative z-10">
                  <div class="text-sm uppercase tracking-[0.2em] text-white/60 mb-3 group-hover:text-orange-500 transition-colors">{{ project.category }}</div>
                  <h3 class="text-3xl md:text-4xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-500 text-orange-500">{{ project.title }}</h3>
                  <p class="text-white/70 mb-6 group-hover:text-white/90 transition-colors leading-relaxed">{{ project.description }}</p>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-2">
                      <span v-for="stack in project.stacks.slice(0, 3)" :key="stack" class="text-xs uppercase tracking-wider text-white/50 group-hover:text-orange-500/80 transition-colors px-2 py-1 border border-white/10 group-hover:border-orange-500/50">
                        {{ stack }}
                      </span>
                    </div>
                    <svg class="w-6 h-6 text-white/60 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="postcss">
.works-title {
  font-family: 'Bebas Neue', cursive, sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.05em;
  text-transform: uppercase;
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

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
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

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateX(40px);
  animation: fadeInRight 0.8s ease-out forwards;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

