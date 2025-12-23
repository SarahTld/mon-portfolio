<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500', isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent']">
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-20">
        <a 
          href="/" 
          :class="['flex flex-col leading-tight transition-all duration-300 relative group', isScrolled ? 'text-white' : 'text-black']"
        >
          <span class="relative z-10 text-xl font-bold tracking-wider">{{ bio.name }}</span>
          <span class="relative z-10 text-xs uppercase tracking-[0.2em] opacity-70">Perpignan - France</span>
          <span :class="['absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300', isScrolled ? 'bg-orange-500' : 'bg-orange-500', 'group-hover:w-full']"></span>
        </a>
        
        <div class="flex items-center gap-4 md:gap-6">
          <a 
            href="#" 
            :class="['nav-link relative group px-2 py-1 text-sm uppercase tracking-[0.15em] transition-all duration-300', isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black']"
          >
            <span class="relative z-10">Accueil</span>
            <span :class="['absolute bottom-0 left-0 w-0 h-px transition-all duration-300', isScrolled ? 'bg-orange-500' : 'bg-orange-500', 'group-hover:w-full']"></span>
          </a>
          <a 
            href="#about" 
            :class="['nav-link relative group px-2 py-1 text-sm uppercase tracking-[0.15em] transition-all duration-300', isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black']"
          >
            <span class="relative z-10">Mon histoire</span>
            <span :class="['absolute bottom-0 left-0 w-0 h-px transition-all duration-300', isScrolled ? 'bg-orange-500' : 'bg-orange-500', 'group-hover:w-full']"></span>
          </a>
          <a 
            href="#work" 
            :class="['nav-link relative group px-2 py-1 text-sm uppercase tracking-[0.15em] transition-all duration-300', isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black']"
          >
            <span class="relative z-10">Mes créations</span>
            <span :class="['absolute bottom-0 left-0 w-0 h-px transition-all duration-300', isScrolled ? 'bg-orange-500' : 'bg-orange-500', 'group-hover:w-full']"></span>
          </a>
          <a 
            href="#contact" 
            class="inline-block text-sm uppercase tracking-[0.2em] text-orange-500 border-2 border-orange-500 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            <span class="relative z-10">Contact</span>
            <span class="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
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
.nav-link {
  @apply transition-colors;
}
</style>

