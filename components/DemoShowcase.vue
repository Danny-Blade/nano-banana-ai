<template>
  <section class="mt-12">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <div class="text-sm text-indigo-600 font-semibold tracking-wide mb-2">Demo</div>
        <h3 class="text-2xl font-bold">{{ t('home.demo.title') }}</h3>
        <p class="mt-3 text-gray-600 dark:text-gray-400">{{ t('home.demo.desc') }}</p>
        <div class="mt-6 flex gap-3">
          <NuxtLink to="/catalog" class="btn-primary">{{ t('home.cta.primary') }}</NuxtLink>
          <NuxtLink to="/chat" class="btn-secondary">{{ t('home.cta.secondary') }}</NuxtLink>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-30 blur-xl"></div>
        <div class="relative card p-4">
          <div class="h-64 md:h-80 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ t('home.demo.placeholder') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>