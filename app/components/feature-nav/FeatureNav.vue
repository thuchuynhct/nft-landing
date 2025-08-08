<template>
  <section class="feature-nav">
     <div class="container">
       <div class="feature-nav__grid">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="feature-nav__item"
        >
          <div class="feature-nav__icon">
            <img 
              :src="feature.image" 
              :alt="feature.title"
            />
            <span v-if="feature.badge" class="feature-nav__badge">{{ feature.badge }}</span>
          </div>
          <h3 class="feature-nav__title">{{ feature.title }}</h3>
        </div>
      </div>
     </div>
  </section>
</template>

  <script setup lang="ts">
import type { Feature } from '~/types'
interface Props {
  features: Feature[]
}

defineProps<Props>()
</script>

<style scoped>
@import './FeatureNav.css';
</style>