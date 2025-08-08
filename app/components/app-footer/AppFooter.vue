<template>
    <footer class="footer">
        <div class="container">
          <div class="footer__grid">
            <div v-for="section in footerSections" :key="section.title">
            <h3 class="footer-title">{{ section.title }}</h3>
            <ul class="footer-links">
              <li v-for="link in section.links" :key="link.href" class="footer-link-item">
                <a :href="link.href">{{ link.label }}
                  <img v-if="link.src" :src="link.src" alt="" class="footer-link-item__image" />
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import type { FooterSection } from '~/types';

interface Props {
  footerSections: FooterSection[]
}

defineProps<Props>()

</script>

<style scoped>
@import './AppFooter.css';
</style>