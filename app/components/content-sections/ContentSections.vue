<template>
  <section class="content-sections">
    <div class="container">
      <div class="content-grid">
        <!-- Left Column - Large Cards Carousel -->
        <div class="content-column content-column--large">
          <div class="carousel-header">
            <h2 class="section-title">{{ calendar.title }}</h2>
            <div class="carousel-nav">
              <button 
                class="nav-btn"
                @click="scrollPrev"
                :disabled="!canScrollPrev"
                aria-label="Previous content"
              >
                <img :src="prevIcon" alt="Previous collections" />
              </button>
              <button 
                class="nav-btn"
                @click="scrollNext"
                :disabled="!canScrollNext"
                aria-label="Next content"
              >
                <img :src="nextIcon" alt="Next collections" />
              </button>
            </div>
          </div>

          <div class="carousel-container">
            <div 
              ref="carouselTrack"
              class="carousel-track"
              @scroll="handleScroll"
            >
              <div 
                v-for="item in calendar.items" 
                :key="item.id"
                class="content-card content-card--large"
              >
                <div class="content-card__image">
                  <img 
                    :src="item.image" 
                    :alt="item.title"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Small Cards -->
        <div class="content-column content-column--small">
          <h2 class="section-title">{{ populars.title }}</h2>
          <div 
            v-for="card in populars.items" 
            :key="card.id"
            class="content-card content-card--small"
          >
            <div class="content-card__image">
              <img 
                :src="card.image" 
                :alt="card.title"
                loading="lazy"
              />
            </div>
          </div>
        </div>

         <div class="content-column content-column--small">
          <h2 class="section-title">{{ promotions.title }}</h2>
          <div 
            v-for="card in promotions.items" 
            :key="card.id"
            class="content-card content-card--small"
          >
            <div class="content-card__image">
              <img 
                :src="card.image" 
                :alt="card.title"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContentSections } from '~/types'
import prevIcon from '~/assets/images/icons/arrow_left.svg'
import nextIcon from '~/assets/images/icons/arrow_right.svg'

interface Props {
  calendar: ContentSections['calendar']
  populars: ContentSections['populars']
  promotions: ContentSections['promotions']
}

const props = defineProps<Props>()

// Carousel functionality
const carouselTrack = ref<HTMLElement>()
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const scrollPrev = () => {
  if (!carouselTrack.value) return
  
  const scrollAmount = carouselTrack.value.clientWidth
  carouselTrack.value.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  })
}

const scrollNext = () => {
  if (!carouselTrack.value) return
  
  const scrollAmount = carouselTrack.value.clientWidth
  carouselTrack.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  if (!carouselTrack.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = carouselTrack.value
  
  canScrollPrev.value = scrollLeft > 0
  canScrollNext.value = scrollLeft < scrollWidth - clientWidth - 1
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => handleScroll(), 50)
  })
})
</script>

<style scoped>
@import './ContentSections.css'
</style>