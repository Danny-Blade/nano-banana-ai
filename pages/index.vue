<template>
  <section class="py-10">
    <HeroSection />
    <FeatureGrid />
    <div class="mt-10">
      <h2 class="text-2xl font-semibold mb-4">{{ t('home.browse_all') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CapabilityCard v-for="cap in previewCaps" :key="cap.id" :cap="cap" />
      </div>
      <div class="mt-6 flex justify-end">
        <UButton to="/catalog" color="indigo" variant="outline">{{ t('home.browse_all') }}</UButton>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeroSection from '~/components/HeroSection.vue'
import FeatureGrid from '~/components/FeatureGrid.vue'
import CapabilityCard from '~/components/CapabilityCard.vue'
import { capabilities } from '~/data/capabilities'
const { t } = useI18n()
const previewCaps = capabilities.slice(0, 3)
</script>
