<template>
  <footer class="mt-12 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-8 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
      <div>© {{ new Date().getFullYear() }} {{ siteName }} · All rights reserved</div>
      <div class="flex items-center gap-3">
        <UIcon name="i-heroicons-globe-alt" />
        <div>{{ t('site.subtitle') }}</div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const siteName = useRuntimeConfig().public.siteName
</script>