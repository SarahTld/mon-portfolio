<template>
  <div class="min-h-screen relative overflow-hidden bg-white text-black">
    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-orange-500/20 z-[100]">
      <div 
        class="h-full bg-orange-500 transition-all duration-150 ease-out" 
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <!-- Background Shapes -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <!-- Floating Circles -->
      <div :class="['absolute top-20 left-10 w-96 h-96 rounded-full border blur-3xl animate-float transition-colors duration-1000', isScrolled ? 'border-white/5' : 'border-black/5']"></div>
      <div :class="['absolute top-40 right-20 w-72 h-72 rounded-full border blur-3xl animate-float-delayed transition-colors duration-1000', isScrolled ? 'border-white/5' : 'border-black/5']"></div>
      <div :class="['absolute bottom-40 left-1/4 w-64 h-64 rounded-full border blur-3xl animate-float-slow transition-colors duration-1000', isScrolled ? 'border-white/5' : 'border-black/5']"></div>
      <div :class="['absolute top-1/3 right-1/4 w-48 h-48 rounded-full border blur-2xl animate-float transition-colors duration-1000', isScrolled ? 'border-white/5' : 'border-black/5']" style="animation-delay: -7s"></div>
      
      <!-- Geometric Lines -->
      <div :class="['absolute top-1/2 right-1/3 w-px h-96 bg-gradient-to-b from-transparent to-transparent animate-line transition-colors duration-1000', isScrolled ? 'via-white/10' : 'via-black/10']"></div>
      <div :class="['absolute bottom-1/4 left-1/3 w-96 h-px bg-gradient-to-r from-transparent to-transparent animate-line-delayed transition-colors duration-1000', isScrolled ? 'via-white/10' : 'via-black/10']"></div>
      <div :class="['absolute top-1/4 left-1/2 w-px h-64 bg-gradient-to-b from-transparent to-transparent animate-line transition-colors duration-1000', isScrolled ? 'via-white/8' : 'via-black/8']" style="animation-delay: -2s"></div>
      
      <!-- Geometric Shapes -->
      <div :class="['absolute top-32 right-1/4 w-32 h-32 border rotate-45 animate-rotate-slow transition-colors duration-1000', isScrolled ? 'border-white/5' : 'border-black/5']"></div>
      <div :class="['absolute bottom-32 left-1/4 w-24 h-24 border rotate-12 animate-rotate-slow transition-colors duration-1000', isScrolled ? 'border-white/5' : 'border-black/5']" style="animation-delay: -5s"></div>
    </div>
    
    <!-- Navigation -->
    <home-navigation :bio="bio" :is-scrolled="isScrolled" />

    <!-- Hero Section -->
    <div class="fixed top-0 left-0 w-full h-screen z-0 bg-white">
      <home-hero-section :bio="bio" :is-scrolled="false" />
    </div>

    <!-- About Section -->
    <home-about-section :bio="bio" />

    <!-- Work Section -->
    <home-works-section :projects="projects" />

    <!-- Experience Section -->
    <home-experience-section />

    <!-- Contact Section -->
    <home-contact-section :social-links="socialLinks" />

    <!-- Footer -->
    <home-footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { bio, socialLinks, projects } = usePortfolio()

const isScrolled = ref(false)
const scrollProgress = ref(0)

let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - windowHeight
      
      // Calculate scroll progress (0 to 100)
      if (maxScroll > 0) {
        scrollProgress.value = (scrollPosition / maxScroll) * 100
      } else {
        scrollProgress.value = 0
      }
      
      
      // Change to black after scrolling 100px (for other sections)
      isScrolled.value = scrollPosition > 100
      
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Check initial position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useHead({
  title: `${bio.name} - ${bio.title}`,
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

.animate-float-slow {
  animation: float 30s ease-in-out infinite;
  animation-delay: -10s;
}

@keyframes line {
  0%, 100% {
    opacity: 0.1;
    transform: scaleY(0.8);
  }
  50% {
    opacity: 0.3;
    transform: scaleY(1);
  }
}

.animate-line {
  animation: line 8s ease-in-out infinite;
}

.animate-line-delayed {
  animation: line 10s ease-in-out infinite;
  animation-delay: -3s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate-slow {
  animation: rotate 60s linear infinite;
}
</style>