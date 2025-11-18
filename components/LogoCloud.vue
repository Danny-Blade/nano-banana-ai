<template>
  <section class="mt-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-6">
        <div class="text-sm text-indigo-600 font-semibold tracking-wide">{{ t('home.logos.title') }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('home.logos.caption') }}</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 opacity-80">
        <div v-for="i in 10" :key="i" class="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 dark:bg-gray-900/40 px-4 py-3">
          <div class="h-6 w-24 bg-gradient-to-r from-white/50 to-white/20 dark:from-gray-200/40 dark:to-gray-500/20 rounded"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>