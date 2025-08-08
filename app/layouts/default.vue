<template>
    <AppHeader
        :logo="data.header.logo"
        :navigation="data.header.navigation"
        :actions="data.header.actions"
    />
    <main>
        <slot />
    </main>
    <AppFooter :footerSections="data.footer" />
</template>

<script setup lang="ts">
import AppHeader from '~/components/app-header/AppHeader.vue';
import AppFooter from '~/components/app-footer/AppFooter.vue';
import { useAppData } from '~/composables/useAppData';


const {data} = useAppData();
</script>
