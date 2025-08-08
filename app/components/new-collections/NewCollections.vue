<template>
  <section class="new-collections">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <div class="section-nav">
          <button 
            class="nav-btn"
            @click="scrollPrev"
            :disabled="!canScrollPrev"
            aria-label="Previous collections"
          >
            <img :src="prevIcon" alt="Previous collections" />
          </button>
          <button 
            class="nav-btn"
            @click="scrollNext"
            :disabled="!canScrollNext"
            aria-label="Next collections"
          >
            <img :src="nextIcon" alt="Next collections" />
          </button>
        </div>
      </div>

      <div class="collections-container">
        <div 
          ref="collectionsTrack"
          class="collections-track"
          @scroll="handleScroll"
        >
          <div 
            v-for="collection in items" 
            :key="collection.id"
            class="collection-card"
          >
            <div class="collection-card__image">
              <img 
                :src="collection.image" 
                :alt="collection.title"
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
import type { Collection } from '~/types'
import prevIcon from '~/assets/images/icons/arrow_left.svg'
import nextIcon from '~/assets/images/icons/arrow_right.svg'

interface Props {
  title: Collection['title']
  items: Collection['items']
}

defineProps<Props>()

const collectionsTrack = ref<HTMLElement>()
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const scrollPrev = () => {
  if (!collectionsTrack.value) return
  
  const scrollAmount = collectionsTrack.value.clientWidth
  collectionsTrack.value.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  })
}

const scrollNext = () => {
  if (!collectionsTrack.value) return
  
  const scrollAmount = collectionsTrack.value.clientWidth
  collectionsTrack.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  if (!collectionsTrack.value) return
  
  const { scrollLeft } = collectionsTrack.value
  
  canScrollPrev.value = scrollLeft > 0
  
  const collectionCards = collectionsTrack.value.querySelectorAll('.collection-card')
  if (collectionCards.length === 0) {
    canScrollNext.value = false
    return
  }
  
  const lastCard = collectionCards[collectionCards.length - 1] as HTMLElement
  const containerRect = collectionsTrack.value.getBoundingClientRect()
  const lastCardRect = lastCard.getBoundingClientRect()
  
  const isLastCardHidden = lastCardRect.right > containerRect.right + 5
  canScrollNext.value = isLastCardHidden
}

onMounted(() => handleScroll())
</script>


<style scoped>
@import './NewCollections.css';
</style>