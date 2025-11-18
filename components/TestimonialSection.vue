<template>
  <section class="mt-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-bold mb-6">{{ t('home.testimonials.title') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="i in items" :key="i" class="card p-4">
          <div class="text-gray-700 dark:text-gray-200 text-sm">“{{ t(`home.testimonials.items.${i}.quote`) }}”</div>
          <div class="mt-4 flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-600"></div>
            <div>
              <div class="text-sm font-medium">{{ t(`home.testimonials.items.${i}.author`) }}</div>
              <div class="text-xs text-gray-500">{{ t(`home.testimonials.items.${i}.role`) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = ['0', '1', '2']
</script>