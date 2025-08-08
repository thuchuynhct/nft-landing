<template>
    <HeroSection 
        :heros="data.heros" />
    <FeatureNav :features="data.features" />
    <NewCollections
        :title="data.newCollections.title" 
        :items="data.newCollections.items" />
    <ContentSections
        :calendar="data.contentSections.calendar"
        :populars="data.contentSections.populars"
        :promotions="data.contentSections.promotions" />
</template>


<script setup lang="ts">
import { useAppData } from '~/composables/useAppData';
import HeroSection from '~/components/hero-section/HeroSection.vue';
import FeatureNav from '~/components/feature-nav/FeatureNav.vue';
import NewCollections from '~/components/new-collections/NewCollections.vue';
import ContentSections from '~/components/content-sections/ContentSections.vue';

const { data } = useAppData();
</script>


