<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-500">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div class="flex items-center justify-between h-20">
          <NuxtLink 
            to="/" 
            class="text-xl font-bold tracking-wider transition-all duration-300 relative group text-white"
          >
            <span class="relative z-10">{{ bio.name.toUpperCase() }}</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          
          <div class="flex items-center gap-4 md:gap-6">
            <NuxtLink 
              to="/" 
              class="nav-link relative group px-2 py-1 text-sm uppercase tracking-[0.15em] transition-all duration-300 text-white/70 hover:text-white"
            >
              <span class="relative z-10">Accueil</span>
              <span class="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="nav-link relative group px-2 py-1 text-sm uppercase tracking-[0.15em] transition-all duration-300 text-orange-500"
            >
              <span class="relative z-10">Mon histoire</span>
              <span class="absolute bottom-0 left-0 w-full h-px bg-orange-500"></span>
            </NuxtLink>
            <a 
              href="/#work" 
              class="nav-link relative group px-2 py-1 text-sm uppercase tracking-[0.15em] transition-all duration-300 text-white/70 hover:text-white"
            >
              <span class="relative z-10">Mes créations</span>
              <span class="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/#contact" 
              class="inline-block text-sm uppercase tracking-[0.2em] text-orange-500 border-2 border-orange-500 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              <span class="relative z-10">Contact</span>
              <span class="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="min-h-screen flex items-center relative overflow-hidden pt-20">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div class="absolute top-20 left-10 w-96 h-96 rounded-full border border-white/5 blur-3xl animate-float"></div>
          <div class="absolute top-40 right-20 w-72 h-72 rounded-full border border-white/5 blur-3xl animate-float-delayed"></div>
        </div>

        <div class="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left: Text Content -->
            <div>
              <div class="bebas-title text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 animate-fade-in-up" style="animation-delay: 0.2s;">
                DÉVELOPPEUSE WEB
              </div>
              <div class="bebas-title text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in-up" style="animation-delay: 0.3s;">
                <span class="text-white">&</span> <span class="text-orange-500">GRAPHISTE</span>
              </div>
              <div class="space-y-6 animate-fade-in-up" style="animation-delay: 0.4s">
                <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
                  {{ bio.description }}
                </p>
                <p class="text-lg text-white/80 leading-relaxed">
                  Je combine ma <span class="text-orange-500 font-medium">passion</span> pour le <span class="text-orange-500 font-medium">code</span> et le <span class="text-orange-500 font-medium">design</span> pour créer des expériences digitales uniques qui allient <span class="text-orange-500 font-medium">esthétique</span> et <span class="text-orange-500 font-medium">performance</span>.
                </p>
              </div>
            </div>

            <!-- Right: Portrait Image -->
            <div class="flex justify-center lg:justify-end animate-fade-in-up -mt-20 lg:-mt-32" style="animation-delay: 0.4s">
              <div class="relative">
                <div class="w-80 h-96 md:w-96 md:h-[500px] lg:w-[500px] lg:h-[650px] border-2 border-orange-500/50 relative overflow-hidden">
                  <img 
                    src="/images/aboutMe.png" 
                    alt="Sarah" 
                    class="w-full h-full object-cover"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                  />
                  <div class="w-full h-full bg-gradient-to-br from-white/5 via-white/2 to-white/0 flex items-center justify-center hidden">
                    <div class="text-6xl opacity-20">👤</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="py-20 border-b border-white/10">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight">Technologies</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Development -->
            <div class="border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-300 bg-black/30 backdrop-blur-sm">
              <div class="text-sm uppercase tracking-[0.2em] text-orange-500 mb-6 font-semibold">Développement</div>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="skill in bio.skills.dev" 
                  :key="skill" 
                  class="px-4 py-2 text-sm text-white/80 border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 bg-white/5 hover:bg-orange-500/10"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Design -->
            <div class="border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-300 bg-black/30 backdrop-blur-sm">
              <div class="text-sm uppercase tracking-[0.2em] text-orange-500 mb-6 font-semibold">Design</div>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="skill in bio.skills.design" 
                  :key="skill" 
                  class="px-4 py-2 text-sm text-white/80 border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 bg-white/5 hover:bg-orange-500/10"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Parcours Scolaire Section -->
      <section class="py-20 border-b border-white/10">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 class="text-sm uppercase tracking-[0.15em] text-orange-500 mb-12 relative inline-block">
            <span class="relative z-10">Parcours scolaire</span>
            <span class="absolute bottom-0 left-0 w-full h-px bg-orange-500"></span>
          </h2>
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:transform md:-translate-x-1/2"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12">
              <!-- Timeline Item 1 -->
              <div class="relative flex items-start md:items-center">
                <!-- Timeline Dot -->
                <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10 md:transform md:-translate-x-1/2"></div>
                
                <!-- Content -->
                <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                  <div class="border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                    <div class="text-sm uppercase tracking-[0.2em] text-orange-500 mb-2">2024</div>
                    <h3 class="text-xl font-semibold text-white mb-2">Formation</h3>
                    <p class="text-white/70">Description de votre formation</p>
                  </div>
                </div>
              </div>

              <!-- Timeline Item 2 -->
              <div class="relative flex items-start md:items-center">
                <!-- Timeline Dot -->
                <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10 md:transform md:-translate-x-1/2"></div>
                
                <!-- Content -->
                <div class="ml-16 md:ml-auto md:w-1/2 md:pl-12">
                  <div class="border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                    <div class="text-sm uppercase tracking-[0.2em] text-orange-500 mb-2">2023</div>
                    <h3 class="text-xl font-semibold text-white mb-2">Formation</h3>
                    <p class="text-white/70">Description de votre formation</p>
                  </div>
                </div>
              </div>

              <!-- Timeline Item 3 -->
              <div class="relative flex items-start md:items-center">
                <!-- Timeline Dot -->
                <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10 md:transform md:-translate-x-1/2"></div>
                
                <!-- Content -->
                <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                  <div class="border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                    <div class="text-sm uppercase tracking-[0.2em] text-orange-500 mb-2">2022</div>
                    <h3 class="text-xl font-semibold text-white mb-2">Formation</h3>
                    <p class="text-white/70">Description de votre formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Let's Work Section -->
      <section class="py-20">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">Travailons ensemble</h2>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Que pensez-vous d'embarquer ensemble dans un voyage remarquable de création ? 
            <span class="text-orange-500 font-medium">VOUS AVEZ UN NOUVEAU PROJET À DISCUTER ?</span>
          </p>
          <NuxtLink 
            to="/#contact" 
            class="inline-block text-lg md:text-xl uppercase tracking-[0.2em] text-orange-500 border-2 border-orange-500 px-8 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            <span class="relative z-10">ME CONTACTER</span>
            <span class="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { bio } = usePortfolio()

useHead({
  title: `À propos - ${bio.name}`,
  meta: [
    {
      name: 'description',
      content: bio.description
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
    }
  ]
})
</script>

<style scoped lang="postcss">
.bebas-title {
  font-family: 'Bebas Neue', cursive, sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.skill-tag {
  @apply inline-block px-3 py-1 text-sm text-white/70 border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 hover:scale-105;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.5s ease-out forwards;
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
</style>

