<template>
  <div class="relative About-me flex flex-col items-center w-full duration-200 h-full text-white z-50 gap-[4rem] bg-black">
    <!-- About Section -->
    <section id="about" class="py-32 px-6 lg:px-12 relative z-10 bg-black text-white w-full">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-sm uppercase tracking-[0.3em] text-white/60 mb-6 animate-fade-in">About</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p class="text-lg text-white/80 leading-relaxed mb-6">
              {{ bio.description }}
            </p>
            <p class="text-lg text-white/80 leading-relaxed">
              Je combine ma <span class="text-orange-500 font-medium">passion</span> pour le <span class="text-orange-500 font-medium">code</span> et le <span class="text-orange-500 font-medium">design</span> pour créer des expériences digitales uniques qui allient <span class="text-orange-500 font-medium">esthétique</span> et <span class="text-orange-500 font-medium">performance</span>.
            </p>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="mb-8">
              <div class="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Skills</div>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(skill, index) in bio.skills.dev" 
                  :key="skill" 
                  class="skill-tag" 
                  :style="{ animationDelay: `${0.05 * index}s` }"
                >
                  {{ skill }}
                </span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(skill, index) in bio.skills.design" 
                  :key="skill" 
                  class="skill-tag" 
                  :style="{ animationDelay: `${0.05 * (index + bio.skills.dev.length)}s` }"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="py-32 border-t border-white/10 relative z-10 bg-black text-white w-full">
      <div class="mb-12 px-6 lg:px-12">
        <div class="max-w-[1400px] mx-auto">
          <div class="text-sm uppercase tracking-[0.3em] text-white/60 mb-4 animate-fade-in">Work</div>
          <div class="text-sm uppercase tracking-[0.2em] text-white/60 animate-fade-in" style="animation-delay: 0.2s">
            Scroll and click to view live website.
          </div>
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
        
        <div 
          class="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth" 
          style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scroll-padding: 0 24px;"
        >
          <div class="flex gap-8 px-6 lg:px-12 pb-8" style="width: max-content;">
            <div 
              v-for="(project, index) in projects" 
              :key="project.id"
              class="project-card-horizontal flex-shrink-0 animate-fade-in-up"
              :style="{ animationDelay: `${0.1 * index}s`, scrollSnapAlign: 'start' }"
            >
              <a :href="project.link" target="_blank" class="block group">
                <div class="w-[90vw] md:w-[600px] lg:w-[700px] border border-white/20 hover:border-orange-500/50 transition-all duration-500 relative overflow-hidden bg-yellow-400/50 backdrop-blur-sm group-hover:scale-[1.02]">
                  <!-- Project Image/Placeholder -->
                  <div class="h-64 md:h-80 bg-gradient-to-br from-white/5 via-white/2 to-white/0 flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-orange-500/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">🎨</div>
                  </div>
                  
                  <!-- Project Info -->
                  <div class="p-8 relative z-10">
                    <div class="text-sm uppercase tracking-[0.2em] text-white/60 mb-3 group-hover:text-orange-500 transition-colors">
                      {{ project.category }}
                    </div>
                    <h3 class="text-3xl md:text-4xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-500 text-orange-500">
                      {{ project.title }}
                    </h3>
                    <p class="text-white/70 mb-6 group-hover:text-white/90 transition-colors leading-relaxed">
                      {{ project.description }}
                    </p>
                    
                    <div class="flex items-center justify-between">
                      <div class="flex flex-wrap gap-2">
                        <span 
                          v-for="stack in project.stacks.slice(0, 3)" 
                          :key="stack" 
                          class="text-xs uppercase tracking-wider text-white/50 group-hover:text-orange-500/80 transition-colors px-2 py-1 border border-white/20 group-hover:border-orange-500/50"
                        >
                          {{ stack }}
                        </span>
                      </div>
                      <svg 
                        class="w-6 h-6 text-white/60 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
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

    <!-- Contact Section -->
    <section id="contact" class="py-32 px-6 lg:px-12 border-t border-white/10 relative z-10 bg-black text-white w-full">
      <div class="max-w-[1400px] mx-auto">
        <div class="text-sm uppercase tracking-[0.3em] text-white/60 mb-6 animate-fade-in">Contact</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h2 class="text-4xl md:text-5xl font-medium mb-6">
              Got a <span class="text-orange-500">project</span> in mind?
            </h2>
            <p class="text-lg text-white/70 mb-8">
              Disponible pour missions <span class="text-orange-500 font-medium">freelance</span>, refontes <span class="text-orange-500 font-medium">premium</span>, MVP rapides ou <span class="text-orange-500 font-medium">design systems</span>.
            </p>
            <a 
              href="mailto:contact@sarah.dev" 
              class="inline-block text-lg uppercase tracking-[0.2em] border-b border-white/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 relative group text-orange-500"
            >
              Send an email
              <span class="absolute bottom-0 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <div class="animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="text-sm uppercase tracking-[0.2em] text-white/60 mb-6">Socials</div>
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
  </div>
</template>

<script setup>
const props = defineProps({
  bio: {
    type: Object,
    required: true
  },
  projects: {
    type: Array,
    required: true
  },
  socialLinks: {
    type: Array,
    required: true
  },
})
</script>

<style scoped lang="postcss">
.skill-tag {
  @apply inline-block px-3 py-1 text-sm text-white/70 border border-white/20 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 hover:scale-105;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.5s ease-out forwards;
}

.project-card-horizontal {
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

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
