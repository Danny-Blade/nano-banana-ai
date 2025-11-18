<template>
  <header class="border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4 flex h-14 items-center justify-between">
      <NuxtLink to="/" class="font-semibold flex items-center gap-2">
        <SparklesIcon class="h-5 w-5 text-indigo-600" />
        {{ siteName }}
      </NuxtLink>
      <nav class="flex items-center gap-6">
        <NuxtLink to="/catalog" class="text-sm hover:text-indigo-600">{{ t('nav.catalog') }}</NuxtLink>
        <NuxtLink to="/chat" class="text-sm hover:text-indigo-600">{{ t('nav.chat') }}</NuxtLink>
        <NuxtLink to="/settings" class="text-sm hover:text-indigo-600">{{ t('nav.settings') }}</NuxtLink>
        <LanguageSwitcher />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
import { SparklesIcon } from '@heroicons/vue/24/solid'
const { t } = useI18n()
const siteName = useRuntimeConfig().public.siteName
</script>