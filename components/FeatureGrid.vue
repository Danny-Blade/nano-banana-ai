<template>
  <section class="nb-section">
    <h2 class="nb-title nb-title-xl mb-6">{{ t('home.features.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="f in features" :key="f.key" class="nb-card nb-hover p-4 h-full">
        <div class="flex items-start gap-3">
          <span class="nb-pill">
            <UIcon :name="f.icon" class="text-indigo-600" />
            <span class="text-xs">{{ t(`home.features.${f.key}.title`) }}</span>
          </span>
        </div>
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">{{ t(`home.features.${f.key}.desc`) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const features = [
  { key: 'speed', icon: 'i-heroicons-bolt' },
  { key: 'multilingual', icon: 'i-heroicons-language' },
  { key: 'categories', icon: 'i-heroicons-rectangle-group' },
  { key: 'security', icon: 'i-heroicons-shield-check' },
  { key: 'performance', icon: 'i-heroicons-chart-bar' },
  { key: 'ui', icon: 'i-heroicons-sparkles' }
]
</script>
