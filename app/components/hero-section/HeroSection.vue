<template>
  <section 
    class="hero"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="hero__slider">
      <div class="hero__track" :style="{ animationPlayState: isHovered ? 'paused' : 'running' }">
        <div 
          v-for="(hero, index) in heros" 
          :key="hero.title"
          class="hero__slide"
        >
          <div class="hero__image">
            <img 
              :src="hero.image.src" 
              :alt="hero.title"
              class="hero__image-main"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Dots indicator -->
    <div class="hero__indicators">
      <div 
        v-for="(hero, index) in heros" 
        :key="`dot-${index}`"
        class="hero__indicators-dot"
        :class="{ 'hero__indicators-dot--active': currentSlide === index }"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Hero } from '~/types'

interface Props {
  heros: Hero[]
}

const props = defineProps<Props>()

// Reactive states
const currentSlide = ref(0)
const isHovered = ref(false)

// Auto-slide functionality
const slideInterval = ref<NodeJS.Timeout | null>(null)

const startAutoSlide = () => {
  slideInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % props.heros.length
  }, 4000) // Change slide every 4 seconds
}

const stopAutoSlide = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

// Mouse hover handlers
const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

// Lifecycle hooks
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

// Watch for hover state to control animation
watch(isHovered, (hovered) => {
  if (hovered) {
    stopAutoSlide()
  } else {
    startAutoSlide()
  }
})
</script>

<style scoped>
@import './HeroSection.css';
</style>