<template>
  <header class="header">
    <nav class="nav">
        <!-- Mobile Menu Toggle (moved to left for mobile) -->
        <button 
          class="nav__toggle"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu">
          <img 
            :src="!isMobileMenuOpen ? verticalIcon : closeIcon" 
            alt="Open menu"
            class="nav__icon"
          />
        </button>

        <!-- Logo -->
        <div class="nav__logo">
          <NuxtLink to="/" class="logo-link">
            <img 
              :src="logo.src" 
              :alt="logo.alt"
              class="logo-image"
              width="120"
              height="40"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="nav__menu" :class="{ 'nav__menu--open': isMobileMenuOpen }">
          <ul class="nav__list">
            <li 
              v-for="item in navigation" 
              :key="item.href"
              class="nav__item"
              :class="{ 'nav__item--active': isActiveLink(item.href) }"
            >
              <NuxtLink 
                :to="item.href"
                class="nav__link"
                :class="{ 'nav__link--active': isActiveLink(item.href) }"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Action Buttons -->
        <div class="nav__actions">
          <template v-for="action in actions" :key="action.href">
            <NuxtLink 
              :to="action.href"
              class="btn"
              :class="[
                action.type === 'primary' ? 'btn--primary' : 'btn--secondary'
              ]"
            >
              {{ action.label }}
            </NuxtLink>
          </template>
        </div>
      </nav>
  </header>
</template>

<script setup lang="ts">
import type { Header } from '~/types'
import verticalIcon from '~/assets/images/icons/vertical.svg'
import closeIcon from '~/assets/images/icons/close.svg'

interface Props {
  logo: Header['logo']
  navigation: Header['navigation']
  actions: Header['actions']
}

defineProps<Props>()

const route = useRoute()
const isMobileMenuOpen = ref(false)

const isActiveLink = (href: string) => {
  return route.path === href || (href !== '/' && route.path.startsWith(href))
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMobileMenu()
    }
  }

  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})

// Prevent body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<style scoped>
@import './AppHeader.css';
</style>
    