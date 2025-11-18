<template>
  <header class="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur">
    <UContainer class="flex h-14 items-center justify-between">
      <NuxtLink to="/" class="font-semibold flex items-center gap-2">
        <UIcon name="i-heroicons-sparkles" class="text-indigo-600" />
        {{ siteName }}
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <NuxtLink to="/catalog" class="text-sm">{{ t('nav.catalog') }}</NuxtLink>
        <NuxtLink to="/chat" class="text-sm">{{ t('nav.chat') }}</NuxtLink>
        <NuxtLink to="/settings" class="text-sm">{{ t('nav.settings') }}</NuxtLink>
        <LanguageSwitcher />
      </nav>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
import { UIcon } from '#components'
const { t } = useI18n()
const siteName = useRuntimeConfig().public.siteName
</script>
